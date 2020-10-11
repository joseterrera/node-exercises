/* File System Object */
var fs = require('fs');

/* Read File */

fs.readFile("one.txt", "utf8", function(err, data) {
  if (err) {
    // handle error
    console.log(err)
  }
  // otherwise we're good
  console.log(data)
});