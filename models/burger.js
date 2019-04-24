var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(cols, val, cb) {
        orm.insert("burgers", cols, val, function(res) {
            cb(res);
        });
    },
    update: function(objColVal, condition, cb) {
        orm.update("burgers", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;