import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
      test: resolve(__dirname, "./test"),
      public: resolve(__dirname, "./public"),
    },
  },
});
