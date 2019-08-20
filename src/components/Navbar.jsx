/** @jsx jsx */
import { Link } from "@reach/router";
import { jsx, css } from "@emotion/core";

const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? "red" : "blue"
          }
        };
      }}
    />
  );

const Navbar = props => {
    return (
        <nav className="vertical_navbar">
            <div
              css={css`
                position: sticky;
                top: 0;
              `} 
            >
              <NavLink to="/">All Available Books</NavLink>
              <NavLink to="/reading_books">Reading Books({props.readingBooks.length > 0 ? props.readingBooks.length : 0})</NavLink>
              <NavLink to="/finished_books">Finished Books({props.finishedReadingBooks.length > 0 ? props.finishedReadingBooks.length : 0})</NavLink>
            </div> 
        </nav>
    )
}

export default Navbar;
