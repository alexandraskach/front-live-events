import {
  BLOG_POST_ERROR,
  BLOG_POST_RECEIVED,
  BLOG_POST_REQUEST,
  BLOG_POST_UNLOAD,
} from "../actions/constants";

const blogPostReducer = (
  state = {
    post: null,
    fetching: false,
  },
  action
) => {
  switch (action.type) {
    case BLOG_POST_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case BLOG_POST_RECEIVED:
      return {
        ...state,
        post: action.data,
        fetching: false,
      };
    case BLOG_POST_ERROR:
      return {
        ...state,
        fetching: false,
      };
    case BLOG_POST_UNLOAD:
      return {
        ...state,
        fetching: false,
        post: null,
      };
    default:
      return state;
  }
};
export default blogPostReducer;
