import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";

const Providers: React.ComponentType<{ children?: any }> = ({ children }) => children;
const customRender = (ui: React.ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender };
