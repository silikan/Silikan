import { createStore } from "vuex";
import * as auth from "@/store/modules/Auth";
import * as user from "@/store/modules/User";
import * as handyman from "@/store/modules/Handyman";
import * as Chat from "@/store/modules/Chat";
import * as Loading from "@/store/modules/Loading";
import * as Gig from "@/store/modules/Gig";
import * as Request from "@/store/modules/Request";
import * as Cart from "@/store/modules/Cart";
import * as Task from "@/store/modules/Task";
import * as Search from "@/store/modules/Search";
import * as Category from "@/store/modules/Category";
import * as Admin from "@/store/modules/Admin";
import * as Moderator from "@/store/modules/Moderator";
import * as Review from "@/store/modules/Review";
import * as Checkout from "@/store/modules/Moderator";
import * as BuyerFeed from "@/store/modules/BuyerFeed";
import * as SellerFeed from "@/store/modules/SellerFeed";
import * as Transaction from "@/store/modules/Transaction";
import * as Notification from "@/store/modules/Notification";
import * as FeedBack from "@/store/modules/Feedback";
import * as Blog from "@/store/modules/Blog";
export default createStore({
    strict: true,

    modules: {
        auth,
        user,
        handyman,
        Chat,
        Loading,
        Gig,
        Request,
        Cart,
        Task,
        Search,
        Category,
        Admin,
        Moderator,
        Review,
        Checkout,
        BuyerFeed,
        SellerFeed,
        Transaction,
        Notification,
        FeedBack,
        Blog,
    },
});