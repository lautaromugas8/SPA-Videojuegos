import axios from "axios";

export const get_all_games = "get_all_games";
export const search = "search";
export const reset = "reset";
export const get_game_detail = "get_game_detail";

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
    dispatch({ type: reset });
    dispatch({ type: search, payload: response.data });
  };
}

export function getGameDetail(id) {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/videogame/${id}`);
    dispatch({ type: get_game_detail, payload: response.data });
  };
}
