import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetFilteredGames } from "../../redux/actions/filteredGamesActions";
import {
  getGameDetail,
  detailUnmount,
} from "../../redux/actions/gameDetailActions";
import defaultImage from "../../images/default-placeholder.png";
import "./Detail.css";

function Detail() {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.games);
  const { gameDetail, isLoading } = useSelector((state) => state.gameDetail);
  const { id } = useParams();
  let {
    background_image,
    description,
    genres,
    name,
    platforms,
    rating,
    released,
  } = gameDetail;
  console.log(gameDetail, isLoading);

  if (!rating) {
    rating = "";
  }

  if (!released) {
    released = "Aún no hay fecha";
  }

  React.useEffect(() => {
    dispatch(getGameDetail(id));
    return () => {
      dispatch(detailUnmount());
    };
  }, [dispatch, id]);

  React.useEffect(() => {
    dispatch(resetFilteredGames());
    games.sort((a, b) => {
      const ar = a.hasOwnProperty("added"),
        br = b.hasOwnProperty("added");
      if (ar && br) {
        return b.added - a.added;
      }
      return ar ? 1 : br ? -1 : 0;
    });
  }, [dispatch, games]);

  if (isLoading) {
    return <div className="loading"></div>;
  } else
    return (
      <div className="detail-container">
        <div className="detail-title">
          <p>
            {name?.replace(/-/g, " ")} ({`${rating}⭐`})
          </p>
        </div>
        <div>
          <p>Fecha de lanzamiento: {released}</p>
        </div>
        <div>
          <p>
            Genero(s):
            {genres?.map((g, index) =>
              index === genres.length - 1 ? g.name : " " + g.name + ", "
            )}
          </p>
        </div>
        {Array.isArray(platforms) ? (
          <div>
            <p>
              Plataforma(s):
              {platforms.map((p, index) =>
                index === platforms.length - 1
                  ? p.platform.name
                  : " " + p.platform.name + ", "
              )}
            </p>
          </div>
        ) : (
          <div>
            <p>Plataforma(s): {platforms}</p>
          </div>
        )}
        <div
          className="detail-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div className="detail-image-container">
          {background_image ? (
            <img className="detail-image" src={background_image} alt="" />
          ) : (
            <img className="detail-image-default" src={defaultImage} alt="" />
          )}
        </div>
      </div>
    );
}

export default Detail;
