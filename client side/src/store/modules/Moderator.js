import { getError } from "@/utils/helpers";
export const namespaced = true;

export const state = {
  users: [],
  gigs: [],
  requests: [],
  handymen: [],
  clients: [],
  admins: [],
  moderators: [],
  user: {},
  gig: {},
  request: {},
  handyman: {},
  client: {},
  admin: {},
  moderator: {},
  usersPaginated: [],
  gigsPaginated: [],
  requestsPaginated: [],
  handymenPaginated: [],
  clientsPaginated: [],
  adminsPaginated: [],
  moderatorsPaginated: [],
  error: null,
  loading: false,
};

export const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },

  SET_GIGS(state, gigs) {
    state.gigs = gigs;
  },

  SET_REQUESTS(state, requests) {
    state.requests = requests;
  },

  SET_HANDYMEN(state, handymen) {
    state.handymen = handymen;
  },

  SET_CLIENTS(state, clients) {
    state.clients = clients;
  },

  SET_ADMINS(state, admins) {
    state.admins = admins;
  },

  SET_MODERATORS(state, moderators) {
    state.moderators = moderators;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_GIG(state, gig) {
    state.gig = gig;
  },
  SET_REQUEST(state, request) {
    state.request = request;
  },
  SET_HANDYMAN(state, handyman) {
    state.handyman = handyman;
  },
  SET_CLIENT(state, client) {
    state.client = client;
  },
  SET_ADMIN(state, admin) {
    state.admin = admin;
  },
  SET_MODERATOR(state, moderator) {
    state.moderator = moderator;
  },
  SET_USERS_PAGINATED(state, usersPaginated) {
    state.usersPaginated = usersPaginated;
  },
  SET_GIGS_PAGINATED(state, gigsPaginated) {
    state.gigsPaginated = gigsPaginated;
  },
  SET_REQUESTS_PAGINATED(state, requestsPaginated) {
    state.requestsPaginated = requestsPaginated;
  },
  SET_HANDYMEN_PAGINATED(state, handymenPaginated) {
    state.handymenPaginated = handymenPaginated;
  },
  SET_CLIENTS_PAGINATED(state, clientsPaginated) {
    state.clientsPaginated = clientsPaginated;
  },
  SET_ADMINS_PAGINATED(state, adminsPaginated) {
    state.adminsPaginated = adminsPaginated;
  },
  SET_MODERATORS_PAGINATED(state, moderatorsPaginated) {
    state.moderatorsPaginated = moderatorsPaginated;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  }
};

export const actions = {};

export const getters = {
  users(state) {
    return state.users;
  },
  gigs(state) {
    return state.gigs;
  },
  requests(state) {
    return state.requests;
  },
  handymen(state) {
    return state.handymen;
  },
  clients(state) {
    return state.clients;
  },
  admins(state) {
    return state.admins;
  },

  moderators(state) {
    return state.moderators;
  },
  user(state) {
    return state.user;
  },
  gig(state) {
    return state.gig;
  },
  request(state) {
    return state.request;
  },
  handyman(state) {
    return state.handyman;
  },
  client(state) {
    return state.client;
  },
  admin(state) {
    return state.admin;
  },
  moderator(state) {
    return state.moderator;
  },
  usersPaginated(state) {
    return state.usersPaginated;
  },
  gigsPaginated(state) {
    return state.gigsPaginated;
  },
  requestsPaginated(state) {
    return state.requestsPaginated;
  },
  handymenPaginated(state) {
    return state.handymenPaginated;
  },
  clientsPaginated(state) {
    return state.clientsPaginated;
  },
  adminsPaginated(state) {
    return state.adminsPaginated;
  },
  moderatorsPaginated(state) {
    return state.moderatorsPaginated;
  },
  getError(state) {
    return getError(state.error);
  },
  loading(state) {
    return state.loading;
  }

  
};
