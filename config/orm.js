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
    insertOne: function(tableInput, col, val, cb) {
        let queryString = `INSERT INTO ?? (??) VALUES (?)`;
        connection.query(queryString, [tableInput, col, val], function (err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    updateOne: function(tableInput, col1, val1, val2, cb) {
        let queryString = `UPDATE ?? SET ?? = ? WHERE id = ?;`
        connection.query(queryString, [tableInput, col1, val1, val2], function (err, data) {
            if (err) throw err;
            cb(data);
        })

    }
};

module.exports = orm;