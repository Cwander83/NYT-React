const API = require("../scripts/API-nytimes.js");

API("russia", "2017", "2018").then(response => {
    console.log("data: " , response.data);
    return response.data;
  });