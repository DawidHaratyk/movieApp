import React, { useEffect, useState } from "react";

function MovieDetails({ movie, categories }) {
  const [runtime, setRuntime] = useState(null);

  const {
    backdrop_path,
    original_title,
    release_date,
    genre_ids,
    vote_average,
    overview,
  } = movie;
  const releaseDate = release_date.substring(0, 4);
  const list = [];

  const movieCategories = genre_ids.map((id, counter) => {
    categories.filter((category, key) => {
      if (id === category.id) {
        list.push(
          <div className="movie__category" key={key}>
            <span className="movie__category-name">{category.name}</span>
            {counter === genre_ids.length - 1 ? null : (
              <span className="movie__category-separator"></span>
            )}
          </div>
        );
        return null;
      }
    });
    if (counter === genre_ids.length - 1) {
      return list;
    } else {
      return null;
    }
  });

  const getMovieRuntime = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=08b6d4985e66ef10046668e8a1e80b90`
    )
      .then((response) => response.json())
      .then((data) => setRuntime(data.runtime));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovieRuntime();
  }, []);

  return (
    <div className="movie">
      <div
        className="movie__image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
        }}
      ></div>
      <div className="movie__content">
        <h3 className="movie__name">
          {original_title} <span className="movie__year">({releaseDate})</span>
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
