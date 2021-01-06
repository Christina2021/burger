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

//Post
router.post("/api/burgers", function (req, res) {
    //From burger.js insertOne, adds new burger to table
    burger.insertOne(["burger_name"],[req.body.burger_name], function(data){
        //Send back ID
        res.json({ id: data.insertId });
    });
});

//Put
router.put("/api/cats/:id", function(req, res) {

});

module.exports = router;