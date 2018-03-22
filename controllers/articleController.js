const db = require("../models");
const API = require("../scripts/API-nytimes.js");

// API("russia", "2017", "2018").then(response => {
//     console.log( response.data.response);
//     return response.data;
//   });


module.exports = {
    gatherArticles: function (q, startYear, endYear) {
      
    return API()
        .then(articles => {
          //console.log(articles);
        // then insert articles into the db
        return db.Article.create(articles);
            })
            .then(function(dbArticle) {
                if (dbArticle.length === 0) {
                  res.json({
                    message: "No new articles today. Check back tomorrow!"
                  });
                }
                else {
                  // Otherwise send back a count of how many new articles we got
                  res.json({
                    message: "Added " + dbArticle.length + " new articles!"
                  });
                }
              })
              .catch(function(err) {
                // This query won't insert articles with duplicate headlines, but it will error after inserting the others
                res.json({
                  message: "Scrape complete!!"
                });
              });
      
  }
};