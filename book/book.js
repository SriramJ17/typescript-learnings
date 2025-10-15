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
var book1 = new Book("The Alchemist", "Paulo Coelho", false);
book1.getBookInfo();
