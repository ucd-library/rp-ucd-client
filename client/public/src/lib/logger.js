import config from "../config.js";

class RpLogger {
  log() {
    if ( !config.verbose ) return;
    let args = Array.from(arguments);
    args.unshift(this.getCaller());
    console.log.apply(null, args);
  }

  error() {
    if ( !config.verbose ) return;
    console.log.apply(null, arguments);
  }

  getCaller() {
    try { throw new Error('Stack Trace'); }
    catch(e) { 
      return e.stack.split('\n')[3].trim();
    }
  }
}
const rpLogger = new RpLogger();

export { rpLogger };