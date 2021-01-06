const orm = require("../config/orm.js");

//call ORM functions using burger specific input for the ORM
var burger = {
    //Select all to get data from orm.js
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });
    }
};

module.exports = burger;