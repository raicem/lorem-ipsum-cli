const text = require('./lorem-ipsum');
const packageInfo = require('../package.json');
const helpers = require('./helpers');

const sentences = text.loremIpsum
  .split('. ')
  .filter(sentence => sentence.length > 0)
  .map(sentence => `${sentence.trim()}.`);

const firstSentence = sentences[0];

const getRandomSentence = () => {
  const number = helpers.getRandomNumberInRange(0, sentences.length);
  return sentences[number];
};

const generateParagraph = (numberOfSentences = 10) => {
  let paragraph = '';
  for (let index = 0; index < numberOfSentences; index++) {
    paragraph = `${paragraph} ${getRandomSentence()}`;
  }

  return paragraph;
};

exports.paragraph = (count) => {
  let paragraph = firstSentence;
  for (let index = 0; index < count; index++) {
    paragraph = `
      ${paragraph}${generateParagraph()}
    `;
  }
  console.log(paragraph);
  process.exit();
};

exports.sentence = (count) => {
  let sentence = '';
  for (let index = 0; index < count; index++) {
    sentence = `${sentence} ${getRandomSentence()}`;
  }
  console.log(sentence);
  process.exit();
};

exports.help = () => {
  console.log(`
    ${packageInfo.description}

    Usage:

    lorem                                           
        Generates a random sentence.

    lorem -s, --sentence                            
        Generates a random sentence.

    lorem -s -c <number>, --sentence --count <number>    
        Generates a number of random sentences.

    lorem -p, --paragraph                           
        Generates a paragraph.

    lorem -p -c <number>, --paragraph --count <number>   
        Generates a number of paragraphs.

    lorem -h, --help                                
        Displays this help message.

    lorem -v, --version                             
        Displays the version of the program.
  `);

  process.exit();
};
