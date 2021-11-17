import nodeKafka from '@ucd-lib/node-kafka';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import config from './config.js';
import eventBus from './event-bus.js';

const {logger, redis} = rpNodeUtils;
const waitUntil = rpNodeUtils['wait-util'];
const {Consumer, Producer, utils} = nodeKafka;

const KAFKA_HOST_PORT = config.kafka.host+':'+config.kafka.port;

class Harvest {

  constructor() {
    this.messageHandlers = [];
  }

  /**
   * @method connect
   * @description connect to redis and kafka, subscribe to harvest
   * update kafka topic
   */
  async connect() {
    logger.info('waiting from redis');
    await waitUntil(config.redis.host, config.redis.port);

    logger.info('redis online, connecting');
    await redis.connect();

    logger.info('waiting for kafka');
    await waitUntil(config.kafka.host, config.kafka.port);

    logger.info('kafka online, connecting');
    this.consumer = new Consumer({
      'group.id': config.kafka.groups.harvest,
      'metadata.broker.list': KAFKA_HOST_PORT,
    },{
      // make sure we read any unread messages
      'auto.offset.reset' : 'earliest'
    });

    this.producer = new Producer({
      'metadata.broker.list': KAFKA_HOST_PORT,
    });

    logger.info('Connecting top kafka topic: '+config.kafka.topics.harvestRunning);
    await this.producer.connect();
    await this.consumer.connect();

    await this.ensureTopic(config.kafka.topics.harvestQueue);
    await this.ensureTopic(config.kafka.topics.harvestRunning);

    logger.info('Subscribing to topic: '+config.kafka.topics.harvestRunning);
    await this.consumer.subscribe([config.kafka.topics.harvestRunning]);
    await this.consumer.consume(msg => this.handleHarvestUpdate(msg));
  }

  ensureTopic(topic) {
    logger.info('Ensuring kafka topic: '+topic);
    return utils.ensureTopic({
        topic,
        num_partitions: 10,
        replication_factor: 1
      }, 
      {
        'metadata.broker.list': KAFKA_HOST_PORT,
        'log.retention.ms' : 1000 * 60 * 60 * 24 * 7
      }
    );
  }

  /**
   * @method request
   * @description request a new harvest.  if a harvest is already queued or
   * in progress, this will be ignored
   * 
   * @param {String} user user id 
   * @returns {Promise} resolves to Boolean
   */
  async request(user) {
    let state = await this.state(user);
    if( state ) return false;

    await redis.client.set(config.redis.prefixes.harvest+user, 'queued');
    eventBus.emit('user-message', {user, state: 'queued'});

    this.producer.produce({
      topic : config.kafka.topics.harvestQueue,
      value : {user},
    });

    return true;
  }

  state(user) {
    return redis.client.get(config.redis.prefixes.harvest+user);
  }

  clear(user) {
    return redis.client.del(config.redis.prefixes.harvest+user);
  }

  /**
   * @method handleHarvestUpdate
   * @description send along message on local (server) event bus
   * 
   * @param {Object} msg 
   */
  async handleHarvestUpdate(msg) {
    let payload = JSON.parse(msg.value);
    console.log(payload);
    eventBus.emit('user-message', payload);
  }

}

let harvest = new Harvest();
export default harvest;