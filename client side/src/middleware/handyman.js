export default function admin({ next, store }) {
  if (store.getters["auth/isHandyman"]) next();
  else next("/:catchAll(.*)");
}
