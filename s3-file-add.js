const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

//configuring the AWS environment
AWS.config.update({
  accessKeyId: "AKIAWSSKOCVAZDQCDHWK",
  secretAccessKey: "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",
});

var s3 = new AWS.S3();
var filePath = "./raju.txt";

//configuring parameters
var params = {
  Bucket: "rajusamplebuck1",
  Body: fs.createReadStream(filePath),
  Key: "rajufiles" + Date.now() + "_" + path.basename(filePath),
};

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("deleted in :", data.Location);
  }
});
