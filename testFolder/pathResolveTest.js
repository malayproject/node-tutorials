const path = require('path')

const relPath = path.join('..', 'src', 'index.js');
//String(relpath)
console.log(typeof __dirname)
console.log(relPath)

// console.log(path.dirname('./src/dsd/sdfsd.txt'))
// console.log(path.dirname())
//console.log(path.resolve(__dirname, relpath))
// console.log(__dirname)
// console.log(__filename)
console.log(path.resolve(__dirname, '..', 'src', 'index.js'))
console.log(path.resolve(__dirname, '..\src\test\test.js'))
//console.log(path.resolve(`.src/test/test.js`))