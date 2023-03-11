import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const FullDetails = () => {
  const { MealID } = useParams();
  const { loading, setLoading } = useState(true);
  const [item, setItem] = useState([]);

  if (MealID != "") {
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
        .then((data) => data.json())
        .then((data) => {
          setItem(data.meals[0]);
          setLoading(false);
        });
    }, []);
  }
  return (
    <>
      {loading ? (
        <h4 className="Warn">Loading...</h4>
      ) : (
        <div className="fullDetails">
          <button className="btn">
            <Link to="/">Back</Link>
          </button>
          <div className="banner">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h1 className="max">{item.strMeal}</h1>
          </div>
          <div className="container max">
            <div className="tag">
              <h4>{item.strCategory}</h4>
              <h4>{item.strArea}</h4>
            </div>
            <div className="desc">
              <h3>Directions</h3>
              <p>{item.strInstructions}</p>
            </div>
            <ul className="ingredients">
              <h3>Ingredients</h3>
              <li>
                {item.strIngredient1}: <span> {item.strMeasure1}</span>
              </li>
              <li>
                {item.strIngredient2}: <span> {item.strMeasure2}</span>
              </li>
              <li>
                {item.strIngredient3}: <span> {item.strMeasure3}</span>
              </li>
              <li>
                {item.strIngredient4}: <span> {item.strMeasure4}</span>
              </li>
              <li>
                {item.strIngredient5}: <span> {item.strMeasure5}</span>
              </li>
              <li>
                {item.strIngredient6}: <span> {item.strMeasure6}</span>
              </li>
              <li>
                {item.strIngredient7}: <span> {item.strMeasure7}</span>
              </li>
              <li>
                {item.strIngredient8}: <span> {item.strMeasure8}</span>
              </li>
            </ul>
          </div>
          <div className="copyright">
            Made by <a href="https://sm8uti-linktree.netlify.app/">@sm8uti</a>
          </div>
        </div>
      )}
    </>
  );
};

export default FullDetails;
