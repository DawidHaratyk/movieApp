import React from "react";

function MovieCard({ image, name, showMovieCardView }) {
  return (
    <div className="card-content" onClick={showMovieCardView}>
      <img src={image} alt="film" className="card__image" />
      <h5 className="card__headline">{name}</h5>
    </div>
  );
}
export default MovieCard;
