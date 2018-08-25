//* BookLibrary is the main page, it will render three book shelves sorted by the category

import React from "react";
import BookShelf from "./BookShelf";

const BookLibrary = props => {
  console.log("BookLibrary Props", props);
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookShelf
            books={props.books.filter(
              book => book.shelf === "currentlyReading"
            )}
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <BookShelf
            books={props.books.filter(book => book.shelf === "wantToRead")}
          />
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookShelf
            books={props.books.filter(book => book.shelf === "read")}
          />
        </div>
      </div>
    </div>
  );
};

export default BookLibrary;
