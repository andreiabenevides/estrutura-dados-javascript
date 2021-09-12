function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    };
}

// instanciando a classe Book

var book = new Book('title', 'pag', 'isbn');

console.log(book.title);
book.title = 'new title';
console.log(book.title);

//declarando e usando uma função
Book.prototype.printTitle = function() {
    console.log(this.title);
}

book.printTitle();



book.printIsbn();