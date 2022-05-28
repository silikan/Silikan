export default function admin({ next, store }) {
  if (store.getters["auth/isClient"]) next();
  else next("/:catchAll(.*)");
}
