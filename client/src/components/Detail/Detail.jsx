import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  detailUnmount,
  getGameDetail,
  resetFilteredGames,
} from "../../redux/actions/index";
import defaultImage from "../../images/default-placeholder.png";
import "./Detail.css";

function Detail() {
  const dispatch = useDispatch();
  const { gameDetail, games } = useSelector((state) => state);
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

  if (!rating) {
    rating = "";
  }

  if (!released) {
    released = "Aún no hay fecha";
  }

  useEffect(() => {
    dispatch(getGameDetail(id));
    dispatch(resetFilteredGames());
    games[0].sort((a, b) => {
      const ar = a.hasOwnProperty("added"),
        br = b.hasOwnProperty("added");
      if (ar && br) {
        return b.added - a.added;
      }
      return ar ? 1 : br ? -1 : 0;
    });
    return () => dispatch(detailUnmount());
  }, [dispatch, id, games]);

  if (Object.keys(gameDetail).length) {
    return (
      <div className="detail-container">
        <div className="detail-title">
          <p>
            {name.replace(/-/g, " ")} ({`${rating}⭐`})
          </p>
        </div>
        <div>
          <p>Fecha de lanzamiento: {released}</p>
        </div>
        <div>
          <p>
            Genero(s):
            {genres.map((g, index) =>
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
  } else {
    return <div></div>;
  }
}

export default Detail;
