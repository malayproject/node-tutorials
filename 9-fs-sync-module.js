const {readFileSync, writeFileSync} = require('fs');
const path = require('path')

console.log('started working')

const first = readFileSync(path.join('.', 'testFolder', 'content', 'first.txt'), 'utf8');

const second = readFileSync(path.join('.', 'testFolder', 'content', 'second.txt'), 'utf8');

console.log(first, second);

writeFileSync(path.join('.', 'testFolder', 'content', 'result-sync.txt'), `${first}\n${second}\n`, {flag: 'a'});

console.log('ended working')


