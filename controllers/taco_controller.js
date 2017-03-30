var express = require('express');
var router = express.Router();
var models = require('../models');


router.get("/", function(req, res) {
  models.Taco.findAll({ 

  }).then(function(results) {
    // console.log(results);
    res.render("index", {
      tacos: results
    });
  });
});

router.post("/add", function(req, res) {
  models.Taco.create({
    name: req.body.taco
  }).then(function() {
    res.redirect('/');
  });
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;


  models.Taco.update(
  {devoured: req.body.devoured},{where: {id: condition}} 
  ).then(function() {
    res.redirect("/");
  });
});

module.exports = router;