import React from "react";

const API =
  "https://api.themoviedb.org/3/discover/movie?api_key=08b6d4985e66ef10046668e8a1e80b90&primary_release_date.gte=1990-01-01&primary_release_date.lte=2021-01-01&with_genres=28&vote_average.gte=8";

function SubmitBtn() {
  const handleSubmit = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => console.log(data.results));
  };

  return (
    <button className="movies__submit-btn" onClick={handleSubmit}>
      Search
    </button>
  );
}

export default SubmitBtn;
