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
        //Response
        res.json(true);
    });
});

//Put
router.put("/api/cats/:id", function(req, res) {
    //Updates the burger for devoured from false to true
    burger.updateOne(["devoured"],[req.body.devoured], [req.params.id], function(data){
        //Response
        if (data.changedRows === 0) {
            //If no rows changed, then id does not exist. Give 404 error
            return res.status(404).end();
          }
        res.status(200).end();
    });
});

module.exports = router;