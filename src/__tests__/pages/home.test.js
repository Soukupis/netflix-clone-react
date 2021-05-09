import react from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom");

test("renders the homepage", () => {
  const { getByText, getByTestId, getByPlaceholderText } = render(<Home />);
  expect(getByText("Unlimited films, TV programmess and more.")).toBeTruthy();
  expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
  expect(getByPlaceholderText("Email address")).toBeTruthy();
  expect(getByText("Try it now")).toBeTruthy();
  expect(
    getByText(
      "Ready to watch? Enter your email to create or restart your membership"
    )
  ).toBeTruthy();
});
