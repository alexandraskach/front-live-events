import { combineReducers } from "redux";
import BlogPostList from "./reducers/BlogPostListReducer.js";
import { connectRouter } from "connected-react-router";
import BlogPost from "./reducers/BlogPostReducer.js";
import CommentList from "./reducers/CommentListReducer.js";
import Auth from "./reducers/AuthReducer.js";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    BlogPostList,
    BlogPost,
    CommentList,
    Auth,
  });

export default createRootReducer;
