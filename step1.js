/* File System Object */
var fs = require('fs');

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

cat('one.txt')