import { createApp } from "vue"
import "./style.less"
import "virtual:uno.css"
import App from "./App.vue"
import router from "@/router"
createApp(App).use(createPinia()).use(router).mount("#app")
