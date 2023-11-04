import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import WrapperApp from "./App";

describe("App", () => {
  it("Renders Hello World", () => {
    render(<WrapperApp />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello World");
  });
});
