const mongoose = require('mongoose');
var dbUserName = '';
var dbUserPassword = '';
var clusterName = "";
var dbName = '';

const dbconnecturl = "";//add your db url 

mongoose.connect(dbconnecturl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongodb connected successfully");
}).catch((err) => {
    console.log("Error occured in mongodb connection!!!");
});
