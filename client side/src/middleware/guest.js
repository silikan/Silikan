export default function guest({ next, store }) {
  const storageItem = window.localStorage.getItem("guest");
  if (storageItem === "isNotGuest" && !store.getters["auth/authUser"]) {
    console.log("guest middleware");

    store.dispatch("auth/getAuthUser").then(() => {
      if (store.getters["auth/authUser"]) {
        next("/profile");
      } else {
        store.dispatch("auth/setGuest", { value: "isGuest" });
        next();
      }
    });
  } else {
    next();
  }
}
