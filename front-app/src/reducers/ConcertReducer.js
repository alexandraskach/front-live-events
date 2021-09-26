import {
  CONCERT_ERROR,
  CONCERT_RECEIVED,
  CONCERT_REQUEST,
  CONCERT_UNLOAD,
} from "../actions/constants";

const concertReducer = (
  state = {
    concert: null,
    fetching: false,
  },
  action
) => {
  switch (action.type) {
    case CONCERT_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CONCERT_RECEIVED:
      return {
        ...state,
        concert: action.data,
        fetching: false,
      };
    case CONCERT_ERROR:
      return {
        ...state,
        fetching: false,
      };
    case CONCERT_UNLOAD:
      return {
        ...state,
        fetching: false,
        concert: null,
      };
    default:
      return state;
  }
};
export default concertReducer;
