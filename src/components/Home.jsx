import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import Search from "./Search";
import IndexPart from "./IndexPart";
import Categories from "./Categories";
// import axios from "axios";

const Home = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryValue, setCategoryValue] = useState();

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setItem(data.meals);
        setLoading(false);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setLoading(true);
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchUrl = (value) => {
    event.preventDefault();
    setLoading(true);
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
  };

  const categorySearch = (value) => {
    setLoading(true);
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
  };

  return (
    <main className="max">
      <div className="header">
        <div className="heading">
          <h1>What would you like to Cook today?</h1>
        </div>
        <div>
          <Search searchUrl={searchUrl} />
        </div>
      </div>
      <div className="categories max">
        <Categories
          categorySearch={categorySearch}
          setCategoryValue={setCategoryValue}
        />
      </div>
      <div className="body">
        <div className="container">
          {loading ? (
            <h4 className="Warn">Loading...</h4>
          ) : (
            <MealItem item={item} categoryValue={categoryValue} />
          )}
        </div>
      </div>
      <div className="index">
        <IndexPart setIndex={setIndex} />
      </div>
      <div className="copyright">
        Made by <a href="https://sm8uti-linktree.netlify.app/">@sm8uti</a>
      </div>
    </main>
  );
};

export default Home;
