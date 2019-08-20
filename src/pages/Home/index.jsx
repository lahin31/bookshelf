/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import classNames from "classnames";
import BookContext from "../../context/book-context";
import BookSearchField from "../../components/BookSearchField";
import { Title } from "../../globalStyles";
import "./Home.css";

class Home extends Component {
  state = {
    books: [],
    selectedName: ""
  };

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(res => res.json())
      .then(
        res => {
          this.setState({ books: res.books });
        },
        () => console.log(this.state.books)
      );
  }

  updateSelectedName = e => {
    this.setState({ selectedName: e.target.value });
  };

  render() {
    const { books, selectedName } = this.state;
    return (
      <BookContext.Consumer>
        {val => {
          return (
            <div
              css={css`
                margin-left: 10px;
              `}
              className="all_books_wrapper"
            >
              <div className="title_wrapper">
                <Title data-testid="pageTitle">All Available Books</Title>
              </div>
              <div className="all_books" data-testid="all_books">
                <BookSearchField
                  value={selectedName}
                  onChange={this.updateSelectedName}
                />
                {
                  // eslint-disable-next-line
                  books.map((book, i) => {
                  if (
                    book.name.toLowerCase().includes(selectedName.toLowerCase())
                  ) {
                    return (
                      <div
                        className="book"
                        key={i}
                        css={css`
                          display: flex;
                        `}
                      >
                        <div className="featured_image">
                          <img
                            src={book.featured_image}
                            css={css`
                              width: 250px;
                            `}
                            alt={book.name}
                          />
                        </div>
                        <div
                          className="book_info"
                          css={css`
                            margin-bottom: 0;
                            margin-left: 20px;
                          `}
                        >
                          <div
                            className="book_title_header"
                            css={css`
                              display: flex;
                              justify-content: space-between;
                            `}
                          >
                            <h2
                              css={css`
                                margin-top: 0;
                                margin-bottom: 0;
                              `}
                            >
                              <strong>{book.name}</strong>
                            </h2>
                            {!book.complete ? (
                              <>
                                {!book.readingList ? (
                                  <button
                                    css={css`
                                      border-color: #fff;
                                      box-shadow: none;
                                      background-color: #4caf50;
                                      border: none;
                                      color: white;
                                      padding: 10px 15px;
                                      text-align: center;
                                      text-decoration: none;
                                      display: inline-block;
                                      font-size: 16px;
                                      cursor: pointer;
                                    `}
                                    onClick={() => val.addBookToReading(book)}
                                  >
                                    Add to Reading List
                                  </button>
                                ) : (
                                  <button
                                    css={css`
                                      border-color: #fff;
                                      box-shadow: none;
                                      background-color: rgb(255, 0, 0);
                                      border: none;
                                      color: white;
                                      padding: 10px 15px;
                                      text-align: center;
                                      text-decoration: none;
                                      display: inline-block;
                                      font-size: 16px;
                                      cursor: pointer;
                                    `}
                                    onClick={() =>
                                      val.removeBookFromReading(book.id)
                                    }
                                  >
                                    Remove from Reading List
                                  </button>
                                )}
                              </>
                            ) : null}
                          </div>
                          <div className="rating" data-testid="rating">
                            <span
                              className={classNames(
                                `fa fa-star ${
                                  book.ratings >= 1 ? "checked" : ""
                                }`
                              )}
                            />
                            <span
                              className={classNames(
                                `fa fa-star ${
                                  book.ratings >= 2 ? "checked" : ""
                                }`
                              )}
                            />
                            <span
                              className={classNames(
                                `fa fa-star ${
                                  book.ratings >= 3 ? "checked" : ""
                                }`
                              )}
                            />
                            <span
                              className={classNames(
                                `fa fa-star ${
                                  book.ratings >= 4 ? "checked" : ""
                                }`
                              )}
                            />
                            <span
                              className={classNames(
                                `fa fa-star ${
                                  book.ratings >= 5 ? "checked" : ""
                                }`
                              )}
                            />
                          </div>
                          <p
                            css={css`
                              margin-top: 0;
                              margin-bottom: 0;
                            `}
                          >
                            {book.author}
                          </p>
                          <p
                            css={css`
                              margin-top: 0;
                            `}
                          >
                            Published on: {book.published_date}
                          </p>
                          <p>{book.description}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        }}
      </BookContext.Consumer>
    );
  }
}

export default Home;
