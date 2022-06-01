import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");

const hamburgerButton = document.querySelector(".hamburger-button");
const drawer = document.querySelector("#drawer");

hamburgerButton.addEventListener("click", (event) => {
  event.stopPropagation();
  drawer.classList.toggle("open");
});
drawer.addEventListener("click", (event) => {
  event.stopPropagation();
  drawer.classList.remove("open");
});

