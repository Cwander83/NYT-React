const cheerio = require("cheerio");
const axios = require("axios");

const url = `http://www.nytimes.com`;

// Use axios to get the html from the above link
axios
    .get(url)
    // Our promise-based response
    .then((response) => {
        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        const $ = cheerio.load(response.data);

        // An empty array to save the data that we'll scrape
        let results = [];

        // With cheerio, find each p-tag with the "title" class
        // (i: iterator. element: the current element)
        $("figure.rollover").each((i, element) => {

            /* Cheerio's find method will "find" the first matching child element in a parent.
             *    We start at the current element, then "find" its first child a-tag.
             *    Then, we "find" the lone child img-tag in that a-tag.
             *    Then, .attr grabs the imgs srcset value.
             *    The srcset value is used instead of src in this case because of how they're displaying the images
             *    Visit the website and inspect the DOM if there's any confusion
             */

            const imgLink = $(element).find("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];

            // Push the image's URL (saved to the imgLink var) into the results array
            results.push({
                link: imgLink
            });
        });
        // Log the results once you've looped through each of the elements found with cheerio
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });