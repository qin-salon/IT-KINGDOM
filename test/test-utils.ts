import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render as rtlRender } from "@testing-library/react";

function render(ui: React.ReactElement, options: RenderOptions = {}): RenderResult {
  return rtlRender(ui, { wrapper: ({ children }) => children, ...options });
}

export * from "@testing-library/react";
export { render };
