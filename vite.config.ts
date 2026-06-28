import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2022",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        plan: resolve(__dirname, "plan.html"),
        hotels: resolve(__dirname, "hotels.html"),
        restaurants: resolve(__dirname, "restaurants.html"),
        spa: resolve(__dirname, "spa.html"),
        gaming: resolve(__dirname, "gaming.html"),
        tours: resolve(__dirname, "tours.html"),
        transfers: resolve(__dirname, "transfers.html"),
        how: resolve(__dirname, "how-it-works.html"),
        contact: resolve(__dirname, "contact.html"),
        faq: resolve(__dirname, "faq.html"),
        help: resolve(__dirname, "help.html"),
        register: resolve(__dirname, "partner.html"),
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    open: false,
  },
  preview: {
    port: 4173,
  },
});