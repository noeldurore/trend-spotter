/* 
    Filename: professional_complex_code.js

    Description: This code demonstrates a sophisticated and elaborate implementation of a book management system. 
    It includes classes, inheritance, multiple functions, and a complex data structure.

    Note: This code is just an example and might not fully function.

*/

// Define the Book class
class Book {
  constructor(title, author, genre, publishDate) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publishDate = publishDate;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Publish Date: ${this.publishDate}`);
  }
}

// Define the Library class
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBooksByAuthor(authorName) {
    return this.books.filter(book => book.author === authorName);
  }

  removeBookByTitle(bookTitle) {
    this.books = this.books.filter(book => book.title !== bookTitle);
  }

  displayAllBooks() {
    this.books.forEach(book => book.displayInfo());
  }
}

// Instantiate books
const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 'Fiction', '1951');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Fiction', '1960');
const book3 = new Book('1984', 'George Orwell', 'Science Fiction', '1949');

// Instantiate the library
const library = new Library('Main Library', 'New York');

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Display all books in the library
console.log('All Books in the Library:');
library.displayAllBooks();

// Find books by a specific author
console.log('\nBooks by Harper Lee:');
const booksByAuthor = library.findBooksByAuthor('Harper Lee');
booksByAuthor.forEach(book => book.displayInfo());

// Remove a book from the library by title
console.log('\nRemoving book: 1984');
library.removeBookByTitle('1984');

// Display all books in the library again
console.log('\nAll Books in the Library:');
library.displayAllBooks();