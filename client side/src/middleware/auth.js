export default function auth({ to, next, store }) {
  const loginQuery = { path: "/signin", query: { redirect: to.fullPath } };

  if (!store.getters["auth/authUser"]) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) next(loginQuery);
      else next();
    });
  } else {
    next();
  }
}
