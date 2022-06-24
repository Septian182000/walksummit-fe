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
        "favicon3.png",
        "robots.txt",
      ],
      manifest: {
        name: "WalkSummit",
        short_name: "Mountain Hiking",
        description: "Platform for hiking",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#d84315",
        icons: [
          {
            src: "/icon-pwa/android-chrome-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icon-pwa/android-chrome-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icon-pwa/android-chrome-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icon-pwa/android-chrome-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icon-pwa/android-chrome-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/icon-pwa/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-pwa/android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-pwa/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        sourcemap: true,
      },
      registerType: "autoUpdate",
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
