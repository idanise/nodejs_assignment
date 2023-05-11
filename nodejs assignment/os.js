/*
The os module in Node.js provides a set of utility functions for
 interacting with the operating system. It allows you to retrieve 
 information about the system, work with network interfaces, get]
  environment variables, and more.
  */

const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());