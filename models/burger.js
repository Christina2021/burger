const orm = require("../config/orm.js");

//call ORM functions using burger specific input for the ORM
var burger = {
    //Select all to get data from orm.js
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(col1, val1, val2, cb) {
        orm.updateOne("burgers", col1, val1, val2, function(res){
            cb(res);
        })
    }
};

module.exports = burger;