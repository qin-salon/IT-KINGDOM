import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";

function customRender(ui: React.ReactElement, options = {}): RenderResult {
  return render(ui, { wrapper: ({ children }) => children as any, ...options });
}

export * from "@testing-library/react";
export { customRender };
