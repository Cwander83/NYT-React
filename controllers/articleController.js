const db = require("../models");

module.exports = {
    // this method handles finding all articles in the db
    find: function (req, res) {
        console.log("Gathering saved articles from the db");
        db.Article
            .find()
            .then(function (doc) {
                res.json(doc);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    // this method handles adding new articles to the db
    create: function (req, res) {
    
       db.Article
            .create(req.body)
            .then(function (doc) {
                res.json(doc);
                console.log("doc: ", doc);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    // this method handles deleting articles from the db
    remove: function (req, res) {
        console.log("Deleting a saved article from the db");
        db.Article
            .remove({
                _id: req.params.id
            })
            .then(function (doc) {
                res.json(doc);
                console.log("doc: ", doc);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};