import App from "./App.vue";
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import { appStore } from "./store/app";
import i18n from "./utils/i18n";

const app = createApp(App);

registerPlugins(app);

const config = (varName) => {
  return varName.split(".").reduce((o, x) => o[x], appStore.getState().config);
};

const canAccess = (roleName) => {
  if (appStore.getState().user_role >= config("role." + roleName)) return true;
  return false;
};

app.provide("config", config);
app.provide("canAccess", canAccess);
app.use(i18n());
app.mount("#app");
