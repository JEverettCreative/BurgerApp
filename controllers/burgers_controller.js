var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
        console.log(data);
        res.render("index", {data});
    });
});

router.post("/burgers/insert", function(req, res) {
    burger.insert(req.body.burger_name, function(result) {
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;
