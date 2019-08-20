/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const BookSearchField = props => {
  return (
    <input
      type="text"
      css={css`
        width: 100%;
        padding: 12px 20px;
        margin: 0px 0px 25px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      `}
      placeholder="Search by Book Name"
      value={props.value}
      onChange={props.onChange}
    />
  );
};
export default BookSearchField;
