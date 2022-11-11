const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB();

function getAllCompany() {
  const params = {
    TableName: "Company",
  };

  DynamoDB.scan(params, function (err, data) {
    if (err) {
      console.error("Unable to find movies", err);
    } else {
      console.log(`Found ${data.Count} movies`);
      console.log(data.Items);
    }
  });
}

module.exports = {
  getAllCompany,
};
