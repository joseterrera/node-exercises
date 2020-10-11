/* File System Object */
var fs = require('fs');
const axios = require('axios');



/* Read File */
function cat(file) {
fs.readFile(file, "utf8", function(err, data) {
    if (err) {
      // handle error
      console.log(err)
    }
    // otherwise we're good
    console.log(data)
  })
}


/** read page at URL and print it out. */
async function webCat(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}


let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}


//node step2.js one.txt 
//node step2.js 'https://www.google.com/'