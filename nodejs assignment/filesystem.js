/*
The fs module in Node.js provides an API for working with the file system. It 
allows you to perform various file-related operations such as reading 
from and writing to files, creating and deleting files and directories,
modifying file permissions, and more
*/

const fs = require('fs');

fs.readFile('assignment.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});