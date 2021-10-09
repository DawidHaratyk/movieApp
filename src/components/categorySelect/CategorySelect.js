import React from "react";

function CategorySelect({ title, categories, category, setCategory }) {
  const categoriesList = categories.map((category, key) => (
    <option value={category.id} key={key}>
      {category.name}
    </option>
  ));

  const handleCategoryChange = (e) => {
    const currentId = e.target.value;
    setCategory(currentId);
  };

  return (
    <>
      <div className="categories">
        <h3 className="categories__headline">{title}</h3>
        <select
          name="categories"
          value={category}
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
