/*
 * This is the initial API interface
 * we set the base URL for the API
 */

import axios from "axios";
import store from "@/store";

export const apiClient = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}/api`,
  withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      store.getters["auth/authUser"] &&
      !store.getters["auth/guest"]
    ) {
      store.dispatch("auth/logout");
    }
    return Promise.reject(error);
  }
);

//setup loading
apiClient.interceptors.request.use((config) => {
  store.dispatch("Loading/start");
  return config;
});
//setup Loading
apiClient.interceptors.response.use(
  (response) => {
    store.dispatch("Loading/stop");
    return response;
  },
  (error) => {
    store.dispatch("Loading/stop");
    return Promise.reject(error);
  }
);
