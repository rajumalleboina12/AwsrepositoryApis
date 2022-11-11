const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB();

function addDetails(Id, Name, Age, Address, Gender) {
  const params = {
    TableName: "Details",
    Item: {
      Id: { N: Id },
      Name: { S: Name },
      Age: { N: Age },
      Address: { S: Address },
      Gender: { S: Gender },
    },
  };

  DynamoDB.putItem(params, function (err) {
    if (err) {
      console.error("Unable to add movie", err);
    } else {
      console.log(
        `Added ${Id} with details with Name ${Name} ${Age} ${Address} ${Gender}`
      );
    }
  });
}

module.exports = {
  addDetails,
};
