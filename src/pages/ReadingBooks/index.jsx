/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import BookContext from "../../context/book-context";
import BookSearchField from "../../components/BookSearchField";
import { Title } from "../../globalStyles";
import classNames from "classnames";

class ReadingBooks extends Component {
  state = {
    searchedName: ""
  };

  updateSearchedName = e => {
    this.setState({
      searchedName: e.target.value
    });
  };

  render() {
    const { searchedName } = this.state;
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
                <Title>Reading Books</Title>
              </div>
              <div className="all_books">
                <BookSearchField
                  value={searchedName}
                  onChange={this.updateSearchedName}
                />
                {val.readingBooks &&
                  val.readingBooks.map((book, i) => {
                    if (
                      book.name
                        .toLowerCase()
                        .includes(searchedName.toLowerCase())
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
                                  flex: 1;
                                `}
                                onClick={() => val.addBookToFinished(book)}
                              >
                                Add to Finished List
                              </button>
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
                                  flex: 1;
                                `}
                                onClick={() =>
                                  val.removeBookFromReading(book.id)
                                }
                              >
                                Remove
                              </button>
                            </div>
                            <div className="rating">
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
                {val.readingBooks && val.readingBooks.length <= 0 ? (
                  <p>No books selected</p>
                ) : null}
              </div>
            </div>
          );
        }}
      </BookContext.Consumer>
    );
  }
}

export default ReadingBooks;
