import React, { useState } from "react";

function CategorySelect({ title, categories }) {
  const [selectedCategory, setSelectedCategory] = useState({
    category: categories[0],
  });

  const categoriesList = categories.map((category, key) => (
    <option value={category} key={key}>
      {category}
    </option>
  ));

  const handleCategoryChange = (e) => {
    setSelectedCategory({ category: e.target.value });
  };

  return (
    <>
      <div className="categories">
        <h3 className="categories__headline">{title}</h3>
        <select
          name="categories"
          className="categories__selection"
          onChange={(e) => handleCategoryChange(e)}
        >
          {categoriesList}
        </select>
      </div>
    </>
  );
}

export default CategorySelect;
