import rpNodeUtils from '@ucd-lib/rp-node-utils';
import eventBus from './event-bus.js';

const {kafka, config} = rpNodeUtils;

/**
 * @class StatusBroker
 * @description Brokers the kafka indexer-status-update topic message to the servers
 * event bus where the socker-io module can pick them up and send to admin socker connections
 */
class StatusBroker {

  constructor() {
    this.kafkaConsumer = new kafka.Consumer({
      'group.id': config.kafka.groups.index,
      'metadata.broker.list': config.kafka.host+':'+config.kafka.port,
    },{
      // subscribe to front of committed offset
      'auto.offset.reset' : 'earliest'
    });

    this.connect();
  }

  /**
   * @method connect
   * @description connect to kafka and listten to indexer-status-update topic messages
   */
  async connect() {
    await this.kafkaConsumer.connect();
    await this.kafkaConsumer.waitForTopics([config.kafka.topics.indexerStatusUpdate]);
    await this.kafkaConsumer.subscribe([config.kafka.topics.indexerStatusUpdate]);
    this.listen();
  }

  /**
   * @method listen
   * @description Start consuming messages from kafka, register onMessage as the handler.
   */
  async listen() {
    try {
      await this.kafkaConsumer.consume(msg => this.onMessage(msg));
    } catch(e) {
      console.error('kafka consume error', e);
    }
  }

  /**
   * @method onMessage
   * @description listens to the indexer-status-update topic.  Checks for completed index, then swaps  
   * if complete
   * 
   * @param {*} msg 
   * @returns 
   */
  async onMessage(msg) {
    msg = JSON.parse(msg.value.toString('utf-8'));
    eventBus.emit('admin-client-message', {
      type : 'indexer-status-update',
      message : msg
    });
  }

}

const statusBroker = new StatusBroker();
export default statusBroker;