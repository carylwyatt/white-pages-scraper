const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');
const $ = require('cheerio');

const username = process.argv.slice(2);
const url = `https://whitepages.ivytech.edu/profile/${username}`;

//require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();

request({method: "GET", 
        "rejectUnauthorized": false,
        "url": url}, function (error, response, body) {
  //        console.log(body);
//        console.log(url);
//        console.log(error);
//        console.log('Response: ', response && response.statusCode);

        //uncomment this console.log to test the form submission result 
  //      //console.log('body:', body); // Print the form submission result
        const $ = cheerio.load(body);        
        const location = $('td:contains("Location")').next().text();

        console.log(location);
        });
