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

class ItBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}


let jsBook = new ItBook('Learning JS Algorithms', '200', '1234567890', 'Javascript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());