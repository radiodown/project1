import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const useRepositoryBase =
  process.env.GITHUB_ACTIONS === "true" && Boolean(repositoryName);

export default defineConfig({
  base: useRepositoryBase && repositoryName ? `/${repositoryName}/` : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});

