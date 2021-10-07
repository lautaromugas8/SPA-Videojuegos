import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailUnmount, getGameDetail } from "../../redux/actions/index";
import defaultImage from "../../images/default-placeholder.png";
import "./Detail.css";

function Detail() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const { id } = useParams();
  let {
    background_image,
    description,
    genres,
    name,
    platforms,
    rating,
    released,
  } = game;

  if (!rating) {
    rating = "";
  }

  if (!released) {
    released = "Aún no hay fecha";
  }

  useEffect(() => {
    dispatch(getGameDetail(id));
    return () => dispatch(detailUnmount());
  }, [dispatch, id]);

  if (Object.keys(game).length) {
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
