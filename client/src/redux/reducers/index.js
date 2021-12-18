import { combineReducers } from "redux";
import gamesReducer from "../reducers/gamesReducer";
import genresReducer from "../reducers/genresReducer";
import gameDetailReducer from "../reducers/gameDetailReducer";
import gamesOnPageReducer from "../reducers/gamesOnPageReducer";
import filteredGamesReducer from "../reducers/filteredGamesReducer";

export default combineReducers({
  games: gamesReducer,
  genres: genresReducer,
  gameDetail: gameDetailReducer,
  gamesOnPage: gamesOnPageReducer,
  filteredGames: filteredGamesReducer,
});
