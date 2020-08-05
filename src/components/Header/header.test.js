import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./index";

test("renders Header component", () => {
  const { asFragment, getByAltText, getByText, getByTestId } = render(
    <Header title="Title" />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(getByAltText(/logo/i)).toBeInTheDocument();
  expect(getByText("Title")).toBeInTheDocument();
  // expect(getByTestId("header-title")).toBeInTheDocument();
});

afterEach(cleanup);