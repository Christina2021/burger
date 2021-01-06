const express = require("express");
const burger = require("../models/burger.js");

//express.Router used to create modular, mountable route handlers
const router = express.Router();

//Routes
router.get("/", function(req, res) {
    //From burger.js selectAll, get data
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers", function (req, res) {

});

router.put("/api/cats/:id", function(req, res) {

});

module.exports = router;