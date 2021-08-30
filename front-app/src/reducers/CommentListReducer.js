import {
  COMMENT_ADDED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_UNLOAD,
} from "../actions/constants";

const commentListReducer = (
  state = {
    commentList: null,
    fetching: false,
  },
  action
) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case COMMENT_LIST_RECEIVED:
      console.log("action", action);
      return {
        ...state,
        commentList: action.data["hydra:member"],
        fetching: false,
      };
    case COMMENT_ADDED:
      return {
        ...state,
        commentList: [action.comment, ...state.commentList],
      };
    case COMMENT_LIST_ERROR:
    case COMMENT_LIST_UNLOAD:
      return {
        ...state,
        fetching: false,
        commentList: null,
      };
    default:
      return state;
  }
};

export default commentListReducer;
