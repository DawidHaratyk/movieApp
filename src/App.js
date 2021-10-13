import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./components/input/Input";
import Headline from "./components/headline/Headline";
import CategorySelect from "./components/categorySelect/CategorySelect";
import categories from "./data";
import MovieCard from "./components/movieCard/MovieCard";
import { searchData } from "./data";
import SubmitBtn from "./components/submitBtn/SubmitBtn";

function App() {
  const [minValue, setMinValue] = useState([1990, 0, 0]);
  const [maxValue, setMaxValue] = useState([2021, 10, 300]);
  const [category, setCategory] = useState(28);
  const [moviesList, setMoviesList] = useState([]);

  const API = `https://api.themoviedb.org/3/discover/movie?api_key=08b6d4985e66ef10046668e8a1e80b90&primary_release_date.gte=${minValue[0]}-01-01&primary_release_date.lte=${maxValue[0]}-01-01&with_genres=${category}&vote_average.gte=${minValue[1]}&vote_average.lte=${maxValue[1]}&with_runtime.gte=${minValue[2]}&with_runtime.lte=${maxValue[2]}`;

  const handleSubmit = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMoviesList(data.results));
  };

  const inputsList = searchData.map((item, id) => {
    const { min, max, title } = item;
    return (
      <Input
        min={min}
        max={max}
        title={title}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        id={id}
        key={id}
      />
    );
  });

  const moviesContainer = moviesList.map((movie, key) => {
    const { title, poster_path, id } = movie;
    if (poster_path === null) {
      return null;
    } else {
      return (
        <Link to={`/movie/${id}`} className="card" key={key}>
          <MovieCard
            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
            name={title}
          />
        </Link>
      );
    }
  });

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="App">
      <Headline title="Movies App" />
      <div className="movies-content">
        <div className="movies-filter">
          <CategorySelect
            title="Genre"
            categories={categories}
            category={category}
            setCategory={setCategory}
          />
          {inputsList}
          <SubmitBtn handleSubmit={handleSubmit} />
        </div>
        <div className="movies-list">{moviesContainer}</div>
      </div>
    </div>
  );
}

export default App;
