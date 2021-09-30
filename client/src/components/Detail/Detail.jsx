import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../redux/actions";

function Detail() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const { id } = useParams();
  const {
    background_image,
    desciption,
    genres,
    name,
    platforms,
    rating,
    released,
  } = game;

  useEffect(() => {
    dispatch(getGameDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>{name.replace(/-/g, " ")}</div>
      <div>{desciption}</div>

      <div>
        {genres.map((g, index) =>
          index === genres.length - 1 ? g.name + "." : g.name + ", "
        )}
      </div>

      {Array.isArray(platforms) ? (
        <div>{platforms.map((p) => p.platform.name + "-")}</div>
      ) : (
        <div>{platforms}</div>
      )}

      <div>{rating}</div>
      <div>{released}</div>
    </div>
  );
}

export default Detail;
