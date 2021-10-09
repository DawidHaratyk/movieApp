import React, { useState, useEffect } from "react";
import { Link, useLocation, Switch, Route } from "react-router-dom";
import Input from "./components/input/Input";
import Headline from "./components/headline/Headline";
import CategorySelect from "./components/categorySelect/CategorySelect";
import categories from "./data";
import MovieCard from "./components/movieCard/MovieCard";
import { searchData } from "./data";
import SubmitBtn from "./components/submitBtn/SubmitBtn";
import MovieDetails from "./components/movieDetails/MovieDetails";

function App() {
  const [minValue, setMinValue] = useState([1990, 0, 0]);
  const [maxValue, setMaxValue] = useState([2021, 10, 300]);
  const [category, setCategory] = useState(28);
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();
  const [flag, setFlag] = useState(false);

  const url = `https://api.themoviedb.org/3${location.pathname}?api_key=08b6d4985e66ef10046668e8a1e80b90`;
  // console.log(url);

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

  async function showMovieCardView() {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    //   fetch(
    //     `https://api.themoviedb.org/3${window.location.pathname}?api_key=08b6d4985e66ef10046668e8a1e80b90`
    //   )
    //     .then((response) => {
    //       response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     });
    // setFlag((prevState) => !prevState);
  }

  const moviesContainer = moviesList.map((movie, key) => {
    const { title, poster_path, id } = movie;
    if (poster_path === null) {
      return null;
    } else {
      return (
        <li className="card" key={key}>
          <Link to={`/movie/${id}`}>
            <MovieCard
              image={`https://image.tmdb.org/t/p/w500${poster_path}`}
              name={title}
              showMovieCardView={showMovieCardView}
              // onClick={showMovieCardView}
            />
            {/* nie cała wysokość karty działa na kliknięcie */}
          </Link>
        </li>
      );
    }
  });

  // const currentRoutes = moviesList.map((movie, key) => {
  // async function getMovieRuntime(url = "") {
  //   const response = await fetch(url);
  //   return response.json();
  // }
  // getMovieRuntime(
  //   `https://api.themoviedb.org/3/movie/${movie.id}?api_key=08b6d4985e66ef10046668e8a1e80b90`
  // ).then((data) => {
  //   if (data.runtime >= minValue[2] && data.runtime <= maxValue[2]) {
  // return (
  //   <Route
  //     path={`/movie/${movie.id}`}
  //     exact
  //     render={() => <MovieDetails movie={movie} categories={categories} />}
  //     key={key}
  //   />
  // );
  //   }
  // });
  // });

  useEffect(() => {
    handleSubmit();
  }, []);

  // useEffect(() => {
  //   const movieData = localStorage.getItem("movies-list");
  //   const categoryData = localStorage.getItem("category");
  //   if (movieData || categoryData) {
  //     setMoviesList(JSON.parse(movieData));
  //     setCategory(categoryData);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("movies-list", JSON.stringify(moviesList));
  //   localStorage.setItem("category", category);
  // }, [moviesList, category]);

  if (location.pathname !== "/") {
    return (
      <div className="App">
        <Headline title="Movies App" />
        <Switch>{/* {currentRoutes} */}</Switch>
      </div>
    );
  } else {
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
          <ul className="movies-list">{moviesContainer}</ul>
        </div>
      </div>
    );
  }
}

export default App;
