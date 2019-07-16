/** @jsx jsx */
import { Component } from "react";
import { jsx, css } from "@emotion/core";
import BookContext from "../../context/book-context";
import BookSearchField from "../../components/BookSearchField";
import { Title } from "../../globalStyles";
import classNames from "classnames";

class FinishedBooks extends Component {
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
                <Title data-testid="pageTitle">Finished Books</Title>
              </div>
              <div className="all_books" data-testid="all_books">
                <BookSearchField
                  value={searchedName}
                  onChange={this.updateSearchedName}
                />
                {val.finishedReadingBooks &&
                  val.finishedReadingBooks.map((book, i) => {
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
                {val.finishedReadingBooks &&
                val.finishedReadingBooks.length <= 0 ? (
                  <p>No books finished yet</p>
                ) : null}
              </div>
            </div>
          );
        }}
      </BookContext.Consumer>
    );
  }
}

export default FinishedBooks;
