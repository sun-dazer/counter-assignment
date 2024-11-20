import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter"; 
beforeEach(() => {
  render(<Counter />);
});

// Test cases
test("renders counter message", () => {
  expect(screen.getByText("Counter")).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("-1");
});
