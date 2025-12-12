class Book {
    title: string;
    author: string;
    isAvailable: boolean;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    borrow(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You borrowed: ${this.title}`);
        } else {
            console.log(`"${this.title}" is already borrowed.`);
        }
    }

    returnBook(): void {
        this.isAvailable = true;
        console.log(`You returned: ${this.title}`);
    }
}

class Library {
    books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    listAvailableBooks(): void {
        console.log("Available Books:");
        for (let b of this.books) {
            if (b.isAvailable) {
                console.log(`- ${b.title} by ${b.author}`);
            }
        }
    }

    borrowBook(title: string): void {
        let book: Book | undefined = undefined;

        for (let b of this.books) {
            if (b.title === title) {
                book = b;
                break;
            }
        }

        if (!book) {
            console.log("Book not found in library.");
            return;
        }

        book.borrow();
    }

    returnBook(title: string): void {
        let book: Book | undefined = undefined;

        for (let b of this.books) {
            if (b.title === title) {
                book = b;
                break;
            }
        }

        if (!book) {
            console.log("Book not found in library.");
            return;
        }

        book.returnBook();
    }
}


// --- Demo ---

const library = new Library();

library.addBook(new Book("Harry Potter", "J.K. Rowling"));
library.addBook(new Book("Atomic Habits", "James Clear"));
library.addBook(new Book("The Alchemist", "Paulo Coelho"));

library.listAvailableBooks();

library.borrowBook("Harry Potter");
library.borrowBook("Harry Potter"); 

library.returnBook("Harry Potter");
library.listAvailableBooks();
