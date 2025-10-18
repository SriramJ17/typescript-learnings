// This exercise is about creating a small class for a book to know whether the particular book is available or not
var Book = /** @class */ (function () {
    function Book(title, author, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.isAvailable = true;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    Book.prototype.borrowBook = function () {
        console.log("You have borrowed" + "".concat(this.title));
    };
    Book.prototype.returnBook = function () {
        console.log("You have returned" + "".concat(this.title));
    };
    Book.prototype.getBookInfo = function () {
        console.log("Title:" + "".concat(this.title), "Author:" + "".concat(this.author), "Available:" + "".concat(this.isAvailable));
    };
    return Book;
}());
var book1 = new Book("The Alchemist", "Paulo Coelho");
var book2 = new Book("Sherlock Holmes", "Author2");
var Library = /** @class */ (function () {
    function Library(books) {
        if (books === void 0) { books = []; }
        this.books = [];
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.listBooks = function () {
        return this.books;
    };
    return Library;
}());
var lib = new Library();
lib.addBook(book1);
lib.addBook(book2);
console.log(lib.listBooks());
