var express = require('express');
var router = express.Router();
var taco = require('../models');


router.get("/", function(req, res) {
  taco.all(function(data) {
    var hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// router.post("/add"), function(req, res){
//  burger.add(["burger_name"], [req.body.burger_name], function(response){
//    res.redirect('/');
//  })
//  console.log(res);
// }

router.post("/add", function(req, res) {
  taco.add(["id", "taco"], [req.body.id, req.body.taco], function(response){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  taco.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


module.exports = router;