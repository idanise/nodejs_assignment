/*
The readline module in Node.js provides an interface for reading 
input from a readable stream, such as the terminal or a file.
 It allows you to interactively read input from users and process it in your Node.js applications
 */

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('index.html')
});

const lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});