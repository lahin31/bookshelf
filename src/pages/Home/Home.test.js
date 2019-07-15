import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Home from "./index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

it("tests the page title", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('pageTitle')).toHaveTextContent("All Available Books");
});

it("tests the all_books dom attr not empty", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('all_books')).not.toBeEmpty();
});

