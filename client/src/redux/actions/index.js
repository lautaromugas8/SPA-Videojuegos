import axios from "axios";

export const get_all_games = "get_all_games";
export const search = "search";
export const reset = "reset";
export const get_game_detail = "get_game_detail";
export const set_games_on_page = "set_game_on_page";

export function getAllGames() {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/videogames");
    dispatch({ type: get_all_games, payload: response.data });
  };
}

export function searchGame(e) {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/videogames?name=${e.target[0].value}`
    );
    dispatch({ type: search, payload: response.data });
  };
}

export function getGameDetail(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/videogame/${id}`);
      dispatch({ type: get_game_detail, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setGamesPerPage(num, games) {
  switch (num) {
    case 1:
      return { type: set_games_on_page, payload: games[0].slice(0, 15) };
    case 2:
      return { type: set_games_on_page, payload: games[0].slice(15, 30) };
    case 3:
      return { type: set_games_on_page, payload: games[0].slice(30, 45) };
    case 4:
      return { type: set_games_on_page, payload: games[0].slice(45, 60) };
    case 5:
      return { type: set_games_on_page, payload: games[0].slice(60, 75) };
    case 6:
      return { type: set_games_on_page, payload: games[0].slice(75, 90) };
    case "creados":
      // console.log(num);
      return { type: set_games_on_page, payload: games };
    default:
      return;
  }
}

export function detailUnmount() {
  return { type: reset };
}
