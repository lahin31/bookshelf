import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import FinishedBooks from "./index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<FinishedBooks />);
  expect(asFragment()).toMatchSnapshot();
});

