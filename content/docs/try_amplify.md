+++
date = '2024-11-25T12:03:59Z'
draft = false
title = 'Amplify'
weight = 11
+++
<!-- <h1 class="page-title"> Galeria </h1> -->
<div class="top_box"> </div>
<!-- Button and Input Fields -->
<div class="form-container">
    <label for="dataKey">Key:</label>
    <input type="text" id="dataKey" placeholder="Enter key">
    
    <label for="dataValue">Value:</label>
    <input type="text" id="dataValue" placeholder="Enter value">
    
    <button id="saveButton">Save to AWS</button>
</div>

<script>
import Amplify, { API } from 'aws-amplify';

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "MyApiName",
                endpoint: "https://your-api-url.amazonaws.com/dev"
            }
        ]
    }
});

// Fetch data
API.get("MyApiName", "/path").then(response => {
    console.log(response);
});

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { key, value } = JSON.parse(event.body);

    const params = {
        TableName: "YourTableName",
        Item: {
            key,
            value,
        },
    };

    try {
        await dynamoDb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data saved successfully!" }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to save data.", error: err }),
        };
    }
};

</script>