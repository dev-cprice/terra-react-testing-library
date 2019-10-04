import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement } from "./test-utils";
import ExampleComponent from "./ExampleComponent";

test("loads and displays greeting", async () => {
  const url = "/greeting";
  const { getByText, getByTestId } = render(<ExampleComponent url={url} />);

  fireEvent.click(getByText("ExampleComponent.loadGreeting"));

  const greetingTextNode = await waitForElement(() =>
    getByTestId("greeting-text")
  );

  expect(getByTestId("greeting-text")).toHaveTextContent(
    "ExampleComponent.greeting"
  );
  expect(getByTestId("ok-button")).toHaveAttribute("disabled");
});
