import { snackbarStore } from "../store/snackbar";

export default {
  install: (app, options) => {
    const snackbar = {
      store(messages, icon, color, timeout) {
        if (typeof messages === "string") messages = [messages];

        snackbarStore.set({
          messages,
          icon,
          color,
          timeout,
        });
      },
      error(messages) {
        this.store(messages, "mdi-alert-circle", "error", options.timeout);
      },
      warning(messages) {
        this.store(messages, "mdi-alert", "warning", options.timeout);
      },
      success(messages) {
        this.store(
          messages,
          "mdi-checkbox-marked-circle",
          "success",
          options.timeout
        );
      },
    };
    app.config.globalProperties.$snackbar = snackbar;
    app.provide("snackbar", snackbar);
  },
};
