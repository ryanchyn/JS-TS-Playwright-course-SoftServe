class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book ${book} added to ${this.name}.`);
  }

  removeBook(book) {
    const initialLength = this.books.length;
    this.books = this.books.filter((item) => item !== book);

    if (this.books.length === initialLength) {
      console.log(`Book ${book} does not exist in ${this.name}.`);
    } else {
      console.log(`Book ${book} removed from ${this.name}.`);
    }
  }

  displayBooks() {
    if (this.books.length === 0) {
      console.log("No books available.");
    } else {
      console.log(`Books in ${this.name}:`);
      this.books.forEach((book, index) => {
        console.log(`${index}: ${book}`);
      });
    }
  }
}

const library = new Library("JS library");

library.displayBooks();

library.addBook("Javascript: The Definitive Guide - David Flanagan");

library.addBook("You don`t know JS - Kyle Simpson");

library.addBook("Eloquent JavaScript, 4th Edition - Marijn Haverbeke");

library.displayBooks();

library.removeBook("Javascript: The Definitive Guide - David Flanagan");

library.displayBooks();
