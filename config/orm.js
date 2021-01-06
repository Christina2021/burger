//Import mysql data
const connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        let queryString = `SELECT * FROM ??;`
        connection.query(queryString, tableInput, function (err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
};

module.exports = orm;