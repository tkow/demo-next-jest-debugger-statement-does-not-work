/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  debugger
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});
