//It enables you to create, emit, and handle events within your applications.

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('An event has been detected!');
});
eventEmitter.emit('event');