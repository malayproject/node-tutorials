// import { readFile, writeFile } from 'fs';
const {readFile, writeFile} = require('fs');

console.log('started working');

readFile('./testFolder/content/first.txt', 'utf8', (err, res) => {
    if(err) {
        console.log('first error:: ', err)
    }else{
        const first = res;
        readFile('./testFolder/content/second.txt', 'utf8', (err, res) => {
            if(err) {
                console.log('second error:: ', err)
            }else{
                const second = res;
                writeFile('./testFolder/content/result-async.txt', `${first}\n${second}\n`, {flag: 'a'}, (err, res) => {
                    if(err) {
                        console.log('write Result error:: ', err)
                    }else{
                        console.log(res)
                    }
                })
            }
        })
    }
}
)
console.log('ended working')