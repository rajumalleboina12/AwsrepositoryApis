const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB();

function createTable() {
  const params = {
    TableName: "Details",
    KeySchema: [{ AttributeName: "Id", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "Id", AttributeType: "N" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  DynamoDB.createTable(params, function (err, data) {
    if (err) {
      console.error("Unable to create table", err);
    } else {
      console.log("Created table", data);
    }
  });
}

module.exports = {
  createTable,
};
