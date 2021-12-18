import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SET_GAMES_ON_PAGE,
} from "../actions/gamesOnPageActions";

const initialState = {
  isLoading: false,
  gamesOnPage: [],
  error: undefined,
};

export default function gamesOnPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return { ...state, isLoading: true };
    }
    case SEARCH_SUCCESS: {
      return { ...state, isLoading: false, gamesOnPage: action.payload };
    }
    case SEARCH_FAIL: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case SET_GAMES_ON_PAGE: {
      return { ...state, isLoading: false, gamesOnPage: action.payload };
    }
    default: {
      return state;
    }
  }
}
