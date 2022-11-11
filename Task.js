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
app.post("/AddSurvey", function (req, res) {
  console.log(req.body);
  const params = {
    TableName: "CustomerService",
    Item: {
      customer_id: { N: req.body.customer_id },
      customer_name: { S: req.body.customer_name },
      delivery_satisfied: { N: req.body.delivery_satisfied },
      rate_reponse_time: { N: req.body.rate_reponse_time },
      quality_satisfied: { N: req.body.quality_satisfied },
      CGP_satisfied: { N: req.body.CGP_satisfied },
      rate_communication: { N: req.body.rate_communication },
      rate_product_knowledge: { N: req.body.rate_product_knowledge },
      overall_satisfaction: { N: req.body.overall_satisfaction },
      products_like: { S: req.body.products_like },
      products_dislike: { S: req.body.products_dislike },
      mobile: { N: req.body.mobile },
    },
  };
  DynamoDB.putItem(params, function (err) {
    if (err) {
      console.error("Unable to add details", err);
    } else {
      console.log(`Added with details`);
    }
  });
});

//get details
app.get("/getAllCustomers", function (req, res) {
  const params = {
    TableName: "CustomerService",
  };
  DynamoDB.scan(params, function (err, data) {
    if (err) {
      console.error("Unable to find customers", err);
    } else {
      //console.log(`Found ${data.Count} persons`);
      console.log(data.Items);
      res.json(data.Items);
    }
  });
});

//get specific details from here best reviews were not working 
// app.get("/bestreviews", function (req, res) {
//   console.log(req.body);
//   const params = {
//     TableName: "CustomerService",
//     FilterExpression:
//       "#rate_reponse_time >= :rate_reponse_time AND #quality_satisfied >= :quality_satisfied",
//     ExpressionAttributeNames: {
//       "#rate_reponse_time": "rate_reponse_time",
//       "#quality_satisfied": "quality_satisfied",
//     },
//     ExpressionAttributeValues: {
//       ":rate_reponse_time": 4,
//       ":quality_satisfied": 4,
//     },
//   };
//   DynamoDB.scan(params, function (err, data) {
//     if (err) {
//       console.error("Unable to find details", err);
//     } else {
//       console.log("Found company", data.Items);
//       res.json(data.Items);
//     }
//   });
// };
// app.get("/bestreviews", function (req, res) {
//   console.log(req.body);
//   const params = {
//     TableName: "CustomerService",
//     KeyConditionExpression:
//       "customer_id = :customer_id and rate_reponse_time BETWEEN :fromTitle AND :toTitle and CGP_satisfied BETWEEN :fromTitle AND :toTile and delivery_satisfied BETWEEN :fromTitle AND :toTile and quality_satisfied BETWEEN :fromTitle AND :toTile and overall_satisfaction BETWEEN :fromTitle AND :toTile and rate_communication BETWEEN :fromTitle AND :toTile and rate_product_knowledge BETWEEN :fromTitle AND :toTile",
//     // FilterExpression: "attribute_exists(rate_reponse_time)",
//     ExpressionAttributeValues: {
//       ":customer_id": { N: "106" },
//       ":fromTitle": { N: "4" },
//       ":toTitle": { N: "5" },
//     },
//   };
  DynamoDB.scan(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      return res.json(data);
    }
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
