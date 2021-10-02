function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

Book.prototype.printTitle = function() {
    console.log(this.title);
}

//ES6

class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn)
    }
}

let book = new Book('title', 'pag',  'isbn');

console.log(book.title); //outputs the book title

book.title = 'new title'; //update the value of the book title

console.log(book.title); //outputs the book title