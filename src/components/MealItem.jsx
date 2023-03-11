import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const MealItem = ({ item, categoryValue }) => {
  let navigate = useNavigate();

  return (
    <>
      {!item ? (
        <h4 className="Warn">Not Found!</h4>
      ) : (
        item.map((elem) => (
          <div
            className="mealCard"
            key={elem.idMeal}
            onClick={() => {
              navigate(`/Meal/${elem.idMeal}`);
            }}
          >
            <div>
              <GiHotMeal className="op-ico" />
              <img src={elem.strMealThumb} alt={elem.strMeal} />
            </div>
            <h3>{elem.strMeal}</h3>
            <h4>{elem.strCategory || categoryValue}</h4>
          </div>
        ))
      )}
    </>
  );
};

export default MealItem;
