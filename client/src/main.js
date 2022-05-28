import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";
import timeago from "vue-timeago3";

import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "./assets/tailwind.css";

createApp(App).use(store).use(ElementPlus).use(timeago).use(router).mount("#app");