import { SET_FILTERED_GAMES, RESET } from "../actions/filteredGamesActions";

const initialState = {
  filteredGames: [],
};

export default function filteredGamesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTERED_GAMES: {
      return { ...state, filteredGames: action.payload };
    }
    case RESET: {
      return { ...state, filteredGames: [] };
    }
    default: {
      return state;
    }
  }
}
