const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const uri = "mLabs or other mongo URL";


app.get('/', function(req, res, next) {
    //input req.query.name for get requests
        const client = new MongoClient(uri, {useNewUrlParser: true});

        client.connect(err => {
            if (err) {
                console.log(err);
            }

            const collection = client.db("dbname").collection("collection-name");
            collection.find({}, {skip: offset, limit: 5},).toArray(
                function (err, messages) {
                    if(err) {console.log(err); res.json({"error":err})}
                    res.json({"count":resp,"data":messages})
                });

        });
    });


module.exports = app
