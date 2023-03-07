const AWS = require('aws-sdk');
const SES = new AWS.SES();
const fs = require('fs');

exports.handler = async event => {
 
    const params = {
        Destination: {
            ToAddresses: event.to,
        },
        Message: {
            Body: {
                Html: { Data: "Apuxurva" }
            },
            Subject: {
                Data: event.subject
            },
        },
        Source: 'apurva@flipr.ai'
    };

    try {
        await SES.sendEmail(params).promise();
        return {
            statusCode: 200,
            body: 'Email sent!'
        }
    } catch (e) {
        console.error(e);
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }
};