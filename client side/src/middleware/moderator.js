export default function admin({ next, store }) {
  if (store.getters["auth/isModerator"]) next();
  else next("/:catchAll(.*)");
}
