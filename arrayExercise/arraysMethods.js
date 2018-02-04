let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to', 'Program');

secretMessage[7] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));

/* ******************************************************* */

let secretMessage2 = '00372783267236387236;0121-655/00372783267236387236;1302-211/00372783267236387236;1302-211';

const cards = secretMessage2.split('/');
console.log('cards',cards);

const cardNumber1Array = cards[0].split(';');
const cardNumber1 = cardNumber1Array[0];

const cardNumber1Array2 = cardNumber1Array[1].split('-');
const cardExipryDate = cardNumber1Array2[0];
const cardSC = cardNumber1Array2[1];



console.log('cardNumber1',cardNumber1);
