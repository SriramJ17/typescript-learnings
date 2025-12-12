Problem Statement

Create a simple Library System using TypeScript.

1. Class: Book

Each book should have:

title: string

author: string

isAvailable: boolean

Methods:

borrow(): void
If the book is available → mark it unavailable
Otherwise → print "Book already borrowed"

returnBook(): void
Mark the book as available again

Library Class

Create a Library class that manages books.

It should have:

A list/array of Book objects

Method addBook(book: Book)

Method listAvailableBooks()

Method borrowBook(title: string)

Method returnBook(title: string)