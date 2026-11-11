import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

function Boom() {
  throw new Error("boom");
}

afterEach(() => {
  jest.restoreAllMocks();
});

test("shows the given fallback instead of crashing the tree", () => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  render(
    <ErrorBoundary fallback={<p>fallback shown</p>}>
      <Boom />
    </ErrorBoundary>
  );
  expect(screen.getByText("fallback shown")).toBeInTheDocument();
});

test("shows a reload prompt when no fallback is given", () => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  render(
    <ErrorBoundary>
      <Boom />
    </ErrorBoundary>
  );
  expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Reload" })).toBeInTheDocument();
});

test("renders children when nothing throws", () => {
  render(
    <ErrorBoundary>
      <p>all good</p>
    </ErrorBoundary>
  );
  expect(screen.getByText("all good")).toBeInTheDocument();
});
