const path = require('path')

console.log(path.sep)

const filepath = path.join('src', 'index.js')

console.log(filepath)

const base = path.basename(filepath)

console.log(base)

console.log(path.resolve(__dirname, filepath))
