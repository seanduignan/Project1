var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/farmSystemDb');
var Schema = mongoose.Schema;

var livestockSchema = new Schema({
      TAG: String,
      Type: String,
      Mother: String,
      Sire: String,
      Breed: String,
      DOB: String,
      CauseOfDeath: String,
      DateOfDeath: String
});

var Livestock = mongoose.model('livestock', livestockSchema);

router.get('/', function(req, res, next) {
  Livestock.find()
      .then(function(doc) {
        console.log("Array length is: " + doc.length);
        res.render('index', {title: "Farm Page", items: doc});
      });
});

module.exports = router;
