import {
  GAME_DETAIL_REQUEST,
  GAME_DETAIL_SUCCESS,
  GAME_DETAIL_FAIL,
  RESET,
} from "../actions/gameDetailActions";

const initialState = {
  isLoading: false,
  gameDetail: {},
  error: undefined,
};

export default function gameDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_DETAIL_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GAME_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        gameDetail: { ...state.gameDetail, ...action.payload },
      };
    }
    case GAME_DETAIL_FAIL: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case RESET: {
      return { ...state, gameDetail: {} };
    }
    default: {
      return state;
    }
  }
}
