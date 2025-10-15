// This exercise is about creating a small class for a book to know whether the particular book is available or not
class Book {
    title: string;
    author: string;
    isAvailable: boolean = true;

    constructor (title:string, author:string,isAvailable: boolean=true) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    borrowBook() {
        console.log("You have borrowed" + `${this.title}`)
    }

    returnBook() {
        console.log("You have returned" + `${this.title}`)
    }

    getBookInfo() {
        console.log("Title:" + `${this.title}`, "Author:" + `${this.author}`, "Available:" + `${this.isAvailable}`)
    }
}

const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("Sherlock Holmes", "Author2");

class Library {
    books: Book[] = [];

    constructor (books: Book[] = [])
    {
        this.books=books;
    }

    addBook(book: Book) {
        this.books.push(book)
    }

    listBooks() {
        return this.books
    }

}

const lib = new Library()
lib.addBook(book1)
lib.addBook(book2)
console.log(lib.listBooks())