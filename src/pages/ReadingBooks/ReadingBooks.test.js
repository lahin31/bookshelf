import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import ReadingBooks from "./index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<ReadingBooks />);
  expect(asFragment()).toMatchSnapshot();
});

