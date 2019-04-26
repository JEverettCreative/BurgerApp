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
    update: function(id, cb) {
        orm.updateOne("burgers", id, cb);
    }
};

module.exports = burger;