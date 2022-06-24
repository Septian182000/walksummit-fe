import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        "favicon3.svg",
        "favicon3.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "WalkSummit",
        short_name: "Mountain Hiking",
        description: "Platform For Hiking",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "./public/icon-pwa/icon72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "./public/icon-pwa/icon512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        sourcemap: true,
      },
      registerType: "autoUpdate",
      strategies: "injectManifest",
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
