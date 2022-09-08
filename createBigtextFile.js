const {LoremIpsum} = require('lorem-ipsum');
const EventEmitter = require('Events');
const {writeFileSync} = require('fs');
const path = require('path');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 7,
        min: 2
    },
    wordsPerSentence: {
        max: 8,
        min: 4
    }
});

const WriteEventEmitter = new EventEmitter();

WriteEventEmitter.on('create', () => {
    for(let i = 0; i < 10000; i++)  {
        writeFileSync(path.join(__dirname, 'testFolder', 'content', 'bigFile.txt'), lorem.generateParagraphs(1), {flag: 'a'});
    }
    console.log(`file write complete`);
});

WriteEventEmitter.emit('create');




