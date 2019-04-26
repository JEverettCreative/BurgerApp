var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
        // var newObject = {
        //     burger: data
        // };
        console.log(data);
        res.render("index", {data});
    });
});

// router.post("/api/burger")
// Create the POST code here to establish routes

module.exports = router;
