const area = require('./lib/11-calcArea');
const book = require('./lib/11-book');

console.log(area.circleArea(2));
console.log(area.squareArea(2));

const myBook = new Book('some title');
myBook.printTitle()