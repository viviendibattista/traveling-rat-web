// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "../router";
import axios from "axios";
import VueAxios from "vue-axios";
// import snackbar from "./snackbar";

export function registerPlugins(app) {
  const isDev = process.env.NODE_ENV !== "production";

  let BASE_URL_API = import.meta.env.VITE_BASE_URL_API;
  if (isDev) {
    BASE_URL_API = import.meta.env.VITE_BASE_URL_API_SERVE;
  }

  axios.interceptors.request.use((config) => {
    return {
      ...config,
      baseURL: BASE_URL_API,
      withCredentials: true,
      validateStatus: function (status) {
        return status >= 200 && status < 300;
      },
    };
  });

  axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      let errorsContent = [];
      if (error.response) {
        let status = error.response.status;
        let message =
          status +
          " : " +
          (error.response.data.phrase ?? " : " + error.message);
        errorsContent.push(message);
        let errors = error.response.data.errors;
        if (errors !== null) {
          Object.keys(errors).forEach(function (prop) {
            errorsContent.push(errors[prop][0]);
          });
        }
      } else {
        errorsContent.push(error.message ?? "Undefined");
      }
    //   let snackbar = app.config.globalProperties.$snackbar;
    //   if (!axios.isCancel(error)) {
    //     snackbar.error(errorsContent);
    //   }
      return Promise.reject(error.response);
    }
  );

  window.axios = axios;
  loadFonts();

  app.use(vuetify).use(router).use(VueAxios, axios)/*.use(snackbar, {
    timeout: 3500,
  })*/;
}
