//To compile JavaScript code in a virtual machine

const vm = require('vm');
const myObj = { name: 'Danise', age: 12 };
vm.createContext(myObj);

vm.runInContext('age += 1;', myObj);

console.log(myObj);