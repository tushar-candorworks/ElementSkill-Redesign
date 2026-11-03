import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";

function copyIndexTo404() {
  return {
    name: "copy-index-to-404",
    closeBundle() {
      if (fs.existsSync("dist/index.html")) {
        fs.copyFileSync("dist/index.html", "dist/404.html");
      }
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? process.env.VITE_BASE_PATH || "/ElementSkill-Redesign/" : "/",
  plugins: [tailwindcss(), react(), copyIndexTo404()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor-react";
            }
            if (id.includes("lucide-react")) {
              return "vendor-icons";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));
