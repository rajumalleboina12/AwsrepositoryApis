var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer"); //Step 1S
var path = require("path");
const AWS = require("aws-sdk");

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  return next();
});

app.use(express.static(__dirname)); //Step 2

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

AWS.config.update({
  region: "ap-south-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB();

app.post("/postPersons", function (req, res) {
  console.log(req.body);
  const params = {
    TableName: "Persons",
    Item: {
      PersonId: { N: req.body.PersonId },
      LastName: { S: req.body.LastName },
      FirstName: { S: req.body.FirstName },
      Address: { S: req.body.Address },
      City: { S: req.body.City },
    },
  };
  DynamoDB.putItem(params, function (err) {
    if (err) {
      console.error("Unable to add person", err);
    } else {
      console.log(`Added with details`);
    }
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
