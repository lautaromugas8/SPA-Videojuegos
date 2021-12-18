import axios from "axios";

export const ALL_GENRES_REQUEST = "ALL_GENRES_REQUEST";
export const ALL_GENRES_SUCCESS = "ALL_GENRES_SUCCESS";
export const ALL_GENRES_FAIL = "ALL_GENRES_FAIL";

export function getAllGenres() {
  return async function (dispatch) {
    dispatch({ type: ALL_GENRES_REQUEST });
    try {
      const response = await axios.get("/genres");
      dispatch({ type: ALL_GENRES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ALL_GENRES_FAIL, payload: error });
    }
  };
}
