const AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-1'});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

function putItem(table, item) {
  return new Promise( async (resolve, reject) => {
    const params = {
      TableName: table,
      Item: item
    };

    dynamoDb.put(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getAllItems(table) {
  return new Promise( async (resolve, reject) => {
    const params = {
      TableName: table
    };

    dynamoDb.scan(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Items);
      }
    });
  });
}

function getItem(table, idKey, id) {
  return new Promise( async (resolve, reject) => {
    const params = {
      TableName: table,
      Key: {
        [idKey]: id
      }
    };

    dynamoDb.get(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Item);
      }
    });
  });
}

module.exports = {
  putItem,
  getAllItems,
  getItem
};