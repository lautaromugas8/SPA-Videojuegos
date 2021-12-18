import {
  ALL_GENRES_REQUEST,
  ALL_GENRES_SUCCESS,
  ALL_GENRES_FAIL,
} from "../actions/genresActions";

const initialState = {
  isLoading: false,
  genres: [],
  error: undefined,
};

export default function genresReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_GENRES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ALL_GENRES_SUCCESS: {
      return { ...state, isLoading: false, genres: action.payload };
    }
    case ALL_GENRES_FAIL: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
}
