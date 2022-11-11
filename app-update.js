const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB();

function updateDetails(Id, Name, Age, Address, Gender) {
  const params = {
    TableName: "Details",
    Item: {
      Id: { N: Id },
      Name: { S: Name },
      Age: { N: Age },
      Address: { S: Address },
      Gender: { S: Gender },
    },
    ReturnConsumedCapacity: "TOTAL",
  };

  DynamoDB.putItem(params, function (err) {
    if (err) {
      console.error("Unable to find movie", err);
    } else {
      console.log(
        `Updated ${Id} with new update ${Name}% ${Age} ${Address} ${Gender}`
      );
    }
  });
}

module.exports = {
  updateDetails,
};
