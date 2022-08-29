const os = require('os');

const userInfo = os.userInfo()
console.log(userInfo)
console.log(os.uptime())

const currOSInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
// console.log(os.homedir())
console.log(os.constants)
// console.log(os.version())

// console.log(currOSInfo);