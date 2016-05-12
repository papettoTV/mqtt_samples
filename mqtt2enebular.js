var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
	client.publish('enebular_test', 'Hello enebular');
	client.end();
});

