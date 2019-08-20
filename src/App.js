/** @jsx jsx */
import { Component } from 'react';
import { Router } from "@reach/router";
import { jsx, css } from "@emotion/core";
import './App.css';
import BookContext from "./context/book-context";
import Home from "./pages/Home";
import ReadingBooks from "./pages/ReadingBooks";
import FinishedBooks from './pages/FinishedBooks';
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    readingBooks: [],
    finishedReadingBooks: []
  }

  addBookToReading = book => {
    let books = [...this.state.readingBooks];
    book.readingList = true;
    books.push(book);
    this.setState({ readingBooks: books });
  }

  removeBookFromReading = (id, complete = false) => {
    let books = [...this.state.readingBooks];
    let indexOfDeletedBook = books.findIndex(book => book.id === id);
    books[indexOfDeletedBook].readingList = false;
    if(complete) {
      books[indexOfDeletedBook].complete = true;
    }
    books.splice(indexOfDeletedBook, 1);
    this.setState({
      readingBooks: books
    });
  }

  addBookToFinished = book => {
    let books = [...this.state.finishedReadingBooks];
    book.readingList = false;
    book.complete = true;
    books.push(book);
    this.setState({ finishedReadingBooks: books });
    this.removeBookFromReading(book.id, true);
  }

  render() {
    const { readingBooks, finishedReadingBooks } = this.state;
    return (
      <BookContext.Provider value={{
        readingBooks,
        finishedReadingBooks,
        addBookToReading: this.addBookToReading,
        removeBookFromReading: this.removeBookFromReading,
        addBookToFinished: this.addBookToFinished
      }}>
        <div className="container">
          <Navbar
            readingBooks={readingBooks}
            finishedReadingBooks={finishedReadingBooks}
          />
          <div className="vertical_lists" css={css`
            flex: 2;
          `}>
            <Router>
              <Home path="/" />
              <ReadingBooks path="reading_books" />
              <FinishedBooks path="finished_books" />
            </Router>
          </div>
        </div>
      </BookContext.Provider>
    );
  }
}

export default App;
