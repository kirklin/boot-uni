import { createSSRApp } from "vue";

import * as Pinia from "pinia";

import App from "~/App.vue";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/styles/main.css";
import "uno.css";

export function createApp() {
  const app = createSSRApp(App);

  const store = Pinia.createPinia();
  app.use(store);

  return {
    app,
    Pinia,
  };
}
