// Not in package.json as is shipped with lambda env
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

const client = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: "todos",
        Item: {
            id: uuid(),
            text: data.text,
            checked: false 
        }
    };

    // doesn't proceed unless successful
    // In the event of a failure, the function will error with a 500 status code
    // could wrap in try-catch for custom errors
    await client.put(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};