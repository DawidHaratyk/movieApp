import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headline from "../../components/headline/Headline";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const {
    backdrop_path,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
    runtime,
  } = movie;

  const genresList = genres ? genres : [];

  const movieCategories = genresList.map((genre, key) => {
    return (
      <div className="movie__category" key={key}>
        <span className="movie__category-name">{genre.name}</span>
        {key === genresList.length - 1 ? null : (
          <span className="movie__category-separator"></span>
        )}
      </div>
    );
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=08b6d4985e66ef10046668e8a1e80b90`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="movie">
      <Headline title="Movie" />
      <div
        className="movie__image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
        }}
      ></div>
      <div className="movie__content">
        <h3 className="movie__name">
          {original_title}{" "}
          <span className="movie__year">
            ({release_date ? release_date.substring(0, 4) : null})
          </span>
        </h3>
        <div className="movie__categories">{movieCategories}</div>
        <p className="movie__detail">
          Rating: <span className="movie__detail-result">{vote_average}</span>
        </p>
        <p className="movie__detail">
          Runtime: <span className="movie__detail-result">{runtime} min</span>
        </p>
        <div className="movie__overview">
          <h4 className="movie__overview-headline">Overview</h4>
          <p className="movie__overview-text">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
