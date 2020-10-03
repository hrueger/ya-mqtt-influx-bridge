const mqtt = require("mqtt");
const client  = mqtt.connect(`mqtt://${process.env.MQTT_HOST || "mqtt"}:${process.env.MQTT_PORT || 1883}`);
 
client.on("connect", function () {
    console.log("Connected successfully!");
    const topic = `${process.env.MQTT_TOPIC || "datalog"}`;
    client.subscribe(topic, function (err) {
        if (err) {
            console.log(`Error while subscribing: ${err}`);
            return;
        }
        console.log(`Successfully subscribed to ${topic}!`);
    })
})
 
client.on("message", function (topic, message) {
    console.log(`Incoming message: ${message.toString()}`);
})