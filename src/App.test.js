import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

afterEach(cleanup);

// making a snapshot
it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("tests the length of the two state", () => {
  const ref = React.createRef();
  render(<App ref={ref} />);
  expect(ref.current.state.readingBooks.length).toEqual(0);
  expect(ref.current.state.finishedReadingBooks.length).toEqual(0);
});