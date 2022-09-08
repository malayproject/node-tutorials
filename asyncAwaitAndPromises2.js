const path = require('path');
const util = require('util');
const {readFile, writeFile} = require('fs');
//const {readFile, writeFile} = require('fs').promises;

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const taskFunc = async () => {
    try{
        const first = await readFilePromise(path.join(__dirname, 'testFolder', 'content', 'first.txt'), 'utf8');
        const second = await readFilePromise(path.join(__dirname, 'testFolder', 'content', 'second.txt'), 'utf8');
        await writeFilePromise(path.join(__dirname, 'testFolder', 'content', 'third.txt'), `${first}, ${second}\n`, {flag: 'a'})
    }catch(err) {
        console.log(err)
    }
}

taskFunc()