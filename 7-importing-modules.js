//every js file is a module 

const namesy = require('./3-names');
const data = require('./4-utils');


const {sayHi: sayHelloHi} = data

console.log(namesy)

console.log(data)

sayHelloHi(namesy.MALAY)
sayHelloHi(namesy.PALASH)

require('./5-mind-blown')