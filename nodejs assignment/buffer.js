//To handle binary data

const StringDecoder = require('string_decoder').StringDecoder;
const d = new StringDecoder('utf8');
const b = Buffer.alloc(3); // Allocate a buffer of size 3 bytes

console.log(b); // Writes the buffer
console.log(d.write(b)); // Writes the decoded buffer
