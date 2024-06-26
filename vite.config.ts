import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
    server: {
      proxy: {
        "/api": {
          target: env["VITE_API_URL"],
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api")
        }
      }
    }
  };
});
