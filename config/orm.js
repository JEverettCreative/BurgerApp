var connection = require("./connection");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(tableInput, val, cb) {
        var queryString = "INSERT INTO " + tableInput + " (burger_name)";
        queryString += "VALUES ('" + val + "');";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, condition, cb) {
        var queryString = "UPDATE " + tableInput;

        queryString += " SET devoured=true WHERE id=";
        queryString += condition + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;