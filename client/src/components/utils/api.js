// api key for new york times = 8ee90c8c8c81400590742aeb69073295

import axios from "axios";

  const key = "8ee90c8c8c81400590742aeb69073295";
  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


export default {
    articleGet: function (res) {
        return axios.get(url + key)
            .then(function (err, res) {
                res = JSON.parse(res)
                console.log(res);
            });
    },
    
}