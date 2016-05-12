var mqtt = require('mqtt');

var app_id = 'appleimob06ca';
var secure = true;
var url = secure ? 'mqtts://'+app_id+'.mlkcca.com:8883' : 'mqtt://'+app_id+'.mlkcca.com:1883';

var client = mqtt.connect(url, {
  username: 'sdammy',
  clientId: 'jsclientid01',
  password: app_id,
  protocolId : 'MQTT',
  protocolVersion: 4,
  reconnectPeriod: 7000,
  clean : false
});

/*
 *  milkcocoa.dataStore('message').push({content: 3});
 */
// 必ずparamsに包んであげる
var payload = JSON.stringify({
  params: {
    content: 'hello enebular??' 
  }
});

client.publish(app_id + '/message/push', payload, {
  qos : 0,
  retain : false
});

client.end();

