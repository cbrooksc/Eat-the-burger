// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("food", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("food", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("food", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("food", condition, function (res) {
            cb(res);
        });
    }
};

//burger.all(function(data){console.log(data)});
//burger.create('burger_name',"Sweet",function(data){console.log(data)})
// burger.update('devoured',0,'id=1', function(data){console.log(data)})
//burger.delete('id=3',function(data){console.log(data)})



// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;