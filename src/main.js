import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

app.provide("emitter", emitter).use(router).mount("#app");
