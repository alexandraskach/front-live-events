import { combineReducers } from "redux";
import BlogPostList from "./reducers/BlogPostListReducer.js";
import { connectRouter } from "connected-react-router";
import BlogPost from "./reducers/BlogPostReducer.js";
import CommentList from "./reducers/CommentListReducer.js";
import Auth from "./reducers/AuthReducer.js";
import Registration from "./reducers/RegistrationReducer.js";
import BlogPostForm from "./reducers/BlogPostFormReducer.js";
import ConcertList from "./reducers/ConcertListReducer.js";
import Concert from "./reducers/ConcertReducer.js";
import ConcertForm from "./reducers/ConcertFormReducer.js";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    BlogPostList,
    BlogPost,
    CommentList,
    ConcertList,
    Concert,
    Auth,
    Registration,
    BlogPostForm,
    ConcertForm,
  });

export default createRootReducer;
