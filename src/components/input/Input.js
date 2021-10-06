import React, { useRef, useEffect } from "react";

function Input({
  min,
  max,
  title,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  id,
}) {
  const spaceRef = useRef(null);

  useEffect(() => {
    if (title === "Rating") {
      spaceRef.current.style.left = `${minValue[id] * 10}%`;
      spaceRef.current.style.width = `${(maxValue[id] - minValue[id]) * 10}%`;
    } else if (title === "Runtime") {
      spaceRef.current.style.left = `${minValue[id] / 3}%`;
      spaceRef.current.style.width = `${(maxValue[id] - minValue[id]) / 3}%`;
    } else if (title === "Year") {
      const stepInPercent = 3.22;
      spaceRef.current.style.left = `${(minValue[id] - min) * stepInPercent}%`;
      spaceRef.current.style.width = `${
        (maxValue[id] - minValue[id]) * stepInPercent
      }%`;
    }
  }, [minValue, maxValue, title, min, id]);

  return (
    <div className="search">
      <input
        type="range"
        min={min}
        max={max}
        value={minValue[id]}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxValue[id] - 1);
          const newArray = minValue.map((item, key) => {
            if (key === id) {
              return value;
            } else {
              return item;
            }
          });
          setMinValue(newArray);
        }}
        className="search__thumb search__thumb--left"
        data-value="100"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue[id]}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minValue[id] + 1);
          const newArray = maxValue.map((item, key) => {
            if (key === id) {
              return value;
            } else {
              return item;
            }
          });
          setMaxValue(newArray);
        }}
        className="search__thumb search__thumb--right"
        data-value="280"
      />

      <div className="slider">
        <h3 className="slider__headline">{title}</h3>
        <span className="slider__current-value">{`${minValue[id]} - ${maxValue[id]}`}</span>
        <div className="slider__line">
          <div className="slider__space" ref={spaceRef} />
        </div>
        <div className="slider__values-container">
          <span className="slider__min-value">{min}</span>
          <span className="slider__max-value">{max}</span>
        </div>
      </div>
    </div>
  );
}

export default Input;
