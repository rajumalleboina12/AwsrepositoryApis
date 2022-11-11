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
  region: "ap-south-1",
});

const DynamoDB = new AWS.DynamoDB();

//Api to to insert the details into persons table
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

//Api to get Alldetails of Persons table
app.get("/getAllPersons", function (req, res) {
  const params = {
    TableName: "Persons",
  };
  DynamoDB.scan(params, function (err, data) {
    if (err) {
      console.error("Unable to find persons", err);
    } else {
      //console.log(`Found ${data.Count} persons`);
      console.log(data.Items);
      res.json(data.Items);
    }
  });
});

//Api to get specific details of Persons table
app.get("/getPerson", function (req, res) {
  console.log(req.body);
  const params = {
    TableName: "Persons",
    Key: {
      PersonId: { N: req.body.PersonId },
    },
  };
  DynamoDB.getItem(params, function (err, data) {
    if (err) {
      console.error("Unable to find movie", err);
    } else {
      console.log("Found company", data.Item);
      res.json(data.Item);
    }
  });
});

//Api to update details of Persons table
app.post("/updatePerson", function (req, res) {
  //console.log(req.body);
  const params = {
    TableName: "Persons",
    Item: {
      PersonId: { N: req.body.PersonId },
      LastName: { S: req.body.LastName },
      FirstName: { S: req.body.FirstName },
      Address: { S: req.body.Address },
      City: { S: req.body.City },
    },
    ReturnConsumedCapacity: "TOTAL",
  };
  DynamoDB.putItem(params, function (err) {
    if (err) {
      console.error("Unable to find movie", err);
    } else {
      console.log(`Updated with new details`);
    }
  });
});

//Api to delete specific details from Persons table
app.post("/deletePerson", function (req, res) {
  console.log(req.body);
  const params = {
    TableName: "Persons",
    Key: {
      PersonId: { N: req.body.PersonId },
    },
  };

  DynamoDB.deleteItem(params, function (err) {
    if (err) {
      console.error("Unable to delete", err);
    } else {
      console.log(`Deleted`);
    }
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
