import { Store } from "./main";

class SnackbarStore extends Store {
  data() {
    return {
      messages: [],
      icon: "",
      color: "",
      timeout: 0,
      show: true,
    };
  }

  set(payload) {
    this.state.messages = payload.messages;
    this.state.icon = payload.icon;
    this.state.color = payload.color;
    this.state.timeout = payload.timeout;
  }
}

export const snackbarStore = new SnackbarStore();
