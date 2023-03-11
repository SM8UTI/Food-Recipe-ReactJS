import React, { useEffect, useState } from "react";

const Categories = ({ categorySearch,setCategoryValue }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((data) => data.json())
      .then((data) => {
        setCategories(data.meals);
      });
  }, []);

  return (
    <div className="container">
      {categories.map((elem) => (
        <h4
          key={elem.strCategory}
          onClick={() => {categorySearch(elem.strCategory);setCategoryValue(elem.strCategory)}}
        >
          {elem.strCategory}
        </h4>
      ))}
    </div>
  );
};

export default Categories;
