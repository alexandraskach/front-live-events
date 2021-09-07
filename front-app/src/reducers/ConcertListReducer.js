import {
  CONCERT_LIST_REQUEST,
  CONCERT_LIST_RECEIVED,
  CONCERT_LIST_ERROR,
} from "../actions/constants";

const concertListReducer = (
  state = {
    concerts: null,
    fetching: false,
  },
  action
) => {
  switch (action.type) {
    case CONCERT_LIST_REQUEST:
      state = {
        ...state,
        fetching: true,
      };
      return state;
    case CONCERT_LIST_RECEIVED:
      state = {
        ...state,
        concerts: action.data["hydra:member"],
        fetching: false,
      };
      return state;
    case CONCERT_LIST_ERROR:
      return {
        ...state,
        fetching: false,
        concerts: null,
      };
    default:
      return state;
  }
};

export default concertListReducer;
