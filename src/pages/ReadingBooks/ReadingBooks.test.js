import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import ReadingBooks from "./index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<ReadingBooks />);
  expect(asFragment()).toMatchSnapshot();
});

it("tests the page title", () => {
  const { getByTestId } = render(<ReadingBooks />);
  expect(getByTestId('pageTitle')).toHaveTextContent("Reading Books");
});

it("tests the all_books dom attr not empty", () => {
  const { getByTestId } = render(<ReadingBooks />);
  expect(getByTestId('all_books')).not.toBeEmpty();
});