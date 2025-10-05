import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          // Copy to dist/assets/images so existing "assets/images/..." paths work after build
          src: "assets/images",
          dest: "assets",
        },
      ],
    }),
  ],
});
