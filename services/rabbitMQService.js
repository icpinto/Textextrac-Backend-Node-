const amqp = require('amqplib/callback_api');

// Function to publish a message to RabbitMQ queue
exports.sendMessageToQueue = (queueName, message) => {
    amqp.connect(process.env.RABBITMQ_URI || 'amqp://localhost', (error0, connection) => {
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1;
            }
            channel.assertQueue(queueName, {
                durable: false
            });
            channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
            console.log("Sent '%s'", message);
        });
    });
};
