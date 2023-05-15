const mongoose = require('mongoose');
var dbUserName = 'TonyStark';
var dbUserPassword = 'SRJ6bVz1bvHGremX';
var clusterName = "";
var dbName = 'casacraze';

const dbconnecturl = "mongodb+srv://" + dbUserName + ":" + dbUserPassword + "@tirthmongo.y0v3u2p.mongodb.net/" + dbName + "?retryWrites=true&w=majority";

mongoose.connect(dbconnecturl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongodb connected successfully");
}).catch((err) => {
    console.log("Error occured in mongodb connection!!!");
});