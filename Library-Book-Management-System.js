// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)

//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise



class Book {
    title;
    author;
    pages;
    isAvailable;

    constructor(title, author, pages, isAvailable) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }

    borrow() {
        this.isAvailable = false;
    }
    returnBook() {
        this.isAvailable = true;
    }
    getInfo() {
        return "The " + this.title + "by " + this.author + "(" + this.pages + ") and  isAvailable : " + this.isAvailable;
    }
    isLongBook() {
        if (this.pages > 300) {
            return true;
        }
        else {
            return false;
        }
    }
}


//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


let b1 = new Book("Aaaa", "alex", 350, true);
let b2 = new Book("Bbbb", "blex", 250, true);
let b3 = new Book("Cccc", "clex", 30, true);
let b4 = new Book("Dddd", "dlex", 240, true);
let b5 = new Book("Eeee", "elex", 678, true);




//   2. Perform the following operations:

//       i. Display info of all books

let b1Info = b1.getInfo();
console.log(b1Info)
let b2Info = b2.getInfo();
console.log(b2Info)
let b3Info = b3.getInfo();
console.log(b3Info)
let b4Info = b4.getInfo();
console.log(b4Info)
let b5Info = b5.getInfo();
console.log(b5Info)


//       ii. Borrow 2 books and show their availability status
b1.borrow();
b4.borrow();
console.log("after borrowing b1, b4 : ");
console.log(b1.getInfo());
console.log(b4.getInfo());


//       iii. Return 1 book and show updated status
b1.returnBook();
console.log("After returning b1 :");
console.log(b1.getInfo());

//       iv. Count how many books are "long books" (more than 300 pages)
let count = 0;
if (b1.isLongBook()) count++;
if (b2.isLongBook()) count++;
if (b3.isLongBook()) count++;
if (b4.isLongBook()) count++;
if (b5.isLongBook()) count++;

console.log("the count of long books is : " + count);


//       v. List all available books
if (b1.isAvailable === true) console.log(b1.title + " is available")
if (b2.isAvailable === true) console.log(b2.title + " is available")
if (b3.isAvailable === true) console.log(b3.title + " is available")
if (b4.isAvailable === true) console.log(b4.title + " is available")
if (b5.isAvailable === true) console.log(b5.title + " is available")


