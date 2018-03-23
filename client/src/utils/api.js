// api key for new york times = 8ee90c8c8c81400590742aeb69073295

import axios from "axios";

const api = {
    getArticles: function (topic, startYear, endYear) {
        const key = "8ee90c8c8c81400590742aeb69073295";

        const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        key  + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        console.log(url);
        return axios.get(url);
            
    },

    getArticle: function () {
        return axios.get("/api/saved");
    },

    deleteArticle: function (id) {
        return axios.delete("/api/saved/" + id);
    },
    saveArticle: function (data) {
        return axios.post("/api/saved", data);

    }
};

export default api;