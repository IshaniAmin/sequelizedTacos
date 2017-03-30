var express = require('express');
var router = express.Router();
var models = require('../models');

console.log(models.Taco);

router.get("/", function(req, res) {
  models.Taco.findAll({ 
    // include: [models.Taco]
  }).then(function(taco) {
    var hbsObject = {
      taco: data
    };
    console.log(food);
    res.render("index", {taco: taco});
  });
});

router.post("/", function(req, res) {
  models.Taco.create({
    name: req.body.name
  }).then(function() {
    res.redirect('/');
  });
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;

  // console.log(condition);

  models.Taco.update(
  {devoured: req.body.devoured},{where: {id: condition}} 
  ).then(function() {
    res.redirect("/");
  });
});

module.exports = router;