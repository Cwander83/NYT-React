// api key for new york times = 8ee90c8c8c81400590742aeb69073295

const axios = require("axios");

const key = "8ee90c8c8c81400590742aeb69073295";

const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const articleSearch= function() {

    return axios.get(url + {
      
        params: {

                "api-key": key, 
                "q": query,
                "begin_date": beginDate,
                "end_date": endDate
            }
        })
        .then(response);
    console.log("data: " + response.data);
    console.log(response);
    
}
    
module.exports = articleSearch;
