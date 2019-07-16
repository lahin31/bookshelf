import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import FinishedBooks from "./index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<FinishedBooks />);
  expect(asFragment()).toMatchSnapshot();
});

it("tests the page title", () => {
  const { getByTestId } = render(<FinishedBooks />);
  expect(getByTestId('pageTitle')).toHaveTextContent("Finished Books");
});

it("tests the all_books dom attr not empty", () => {
  const { getByTestId } = render(<FinishedBooks />);
  expect(getByTestId('all_books')).not.toBeEmpty();
});