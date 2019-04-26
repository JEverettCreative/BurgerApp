var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(val, cb) {
        orm.insertOne("burgers", val, cb);
    },
    update: function(id, cb) {
        orm.updateOne("burgers", id, cb);      
    }
};

module.exports = burger;