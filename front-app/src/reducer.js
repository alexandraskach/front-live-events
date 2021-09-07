import { combineReducers } from "redux";
import BlogPostList from "./reducers/BlogPostListReducer.js";
import { connectRouter } from "connected-react-router";
import BlogPost from "./reducers/BlogPostReducer.js";
import CommentList from "./reducers/CommentListReducer.js";
import Auth from "./reducers/AuthReducer.js";
import Registration from "./reducers/RegistrationReducer.js";
import BlogPostForm from "./reducers/BlogPostFormReducer.js";
import ConcertList from "./reducers/ConcertListReducer.js";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    BlogPostList,
    BlogPost,
    CommentList,
    ConcertList,
    Auth,
    Registration,
    BlogPostForm,
  });

export default createRootReducer;
