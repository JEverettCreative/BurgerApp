var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(cols, val, cb) {
        orm.insertOne("burgers", cols, val, function(res) {
            cb(res);
        });
    },
    update: function(objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;