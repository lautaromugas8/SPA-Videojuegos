import {
  ALL_GAMES_REQUEST,
  ALL_GAMES_SUCCESS,
  ALL_GAMES_FAIL,
} from "../actions/gamesActions";

const initialState = {
  isLoading: false,
  games: [],
  error: undefined,
};

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_GAMES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ALL_GAMES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        games: action.payload,
      };
    }
    case ALL_GAMES_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
