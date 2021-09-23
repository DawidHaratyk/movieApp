import React, { useState } from "react";
import Input from "./components/input/Input";
import Headline from "./components/headline/Headline";
import CategorySelect from "./components/categorySelect/CategorySelect";
import categories from "./data";
import MovieCard from "./components/movieCard/MovieCard";
import { image, searchData } from "./data";
import SubmitBtn from "./components/submitBtn/SubmitBtn";

function App() {
  const [minValue, setMinValue] = useState([1990, 0, 0]);
  const [maxValue, setMaxValue] = useState([2021, 10, 300]);

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

  return (
    <div className="App">
      <Headline title="Movies App" />
      <div className="movies-content">
        <div className="movies-filter">
          <CategorySelect title="Genre" categories={categories} />
          {inputsList}
          <SubmitBtn />
        </div>
        <div className="movies-list">
          <MovieCard image={image} name="Harry Potter (więzień askabanu)" />
          <MovieCard image={image} name="Harry Potter (więzień askabanu)" />
          <MovieCard image={image} name="Harry Potter (więzień askabanu)" />
          <MovieCard image={image} name="Harry Potter (więzień askabanu)" />
        </div>
      </div>
    </div>
  );
}

export default App;
