import { Store } from "./main";

class AppStore extends Store {
  data() {
    return {
      loaded: false,
      username: null,
      user_role: null,
      config: null,
    };
  }

  set(payload) {
    this.state.loaded = payload.loaded;
    this.state.username = payload.username;
    this.state.user_role = payload.user_role;
    this.state.config = payload.config;
  }
}

export const appStore = new AppStore();
