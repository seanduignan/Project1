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
var feedSchema = new Schema({
      Qty: String,
      Price: String,
      Supplier: String,
      Code: String
});
var vetSchema = new Schema({
      Reason: String,
      Cost: String,
      VetName: String,
      Date: String,
      Tag: String
});

var Livestock = mongoose.model('livestock', livestockSchema);
var Feed = mongoose.model('feed', feedSchema);
var Vet = mongoose.model('vet', vetSchema);

router.get('/', function(req, res, next) {
  Livestock.find()
    .then(function(livestocks) {
      Feed.find()
        .then(function(feeds) {
          Vet.find()
           .then(function(vets) {
          console.log("livestocks length is: " + livestocks.length);
          console.log("feeds length is: " + feeds.length);
          console.log("vets length is: " + vets.length);
          res.render('index', {title: "Farm Page", livestockArray: livestocks, feedArray: feeds, vetArray: vets});
        });
    });
});
});

module.exports = router;
