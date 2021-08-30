import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_ADD,
} from "../actions/constants";

const blogPostListReducer = (
  state = {
    posts: null,
    fetching: false,
  },
  action
) => {
  switch (action.type) {
    case BLOG_POST_LIST_REQUEST:
      state = {
        ...state,
        fetching: true,
      };
      return state;
    case BLOG_POST_LIST_RECEIVED:
      console.log("action", action);
      state = {
        ...state,
        posts: action.data["hydra:member"],
        fetching: false,
      };
      return state;
    case BLOG_POST_LIST_ERROR:
      return {
        ...state,
        fetching: false,
        posts: null,
      };
    case BLOG_POST_LIST_ADD:
      state = {
        ...state,
        posts: state.posts ? state.posts.concat(action.data) : state.posts,
      };
      return state;
    default:
      return state;
  }
};

export default blogPostListReducer;
