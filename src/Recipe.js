import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.header}>{title}</h1>
      <p>
        <h3>Calories: {calories}</h3>
      </p>
      <img className={style.image} src={image} alt="" />
      <div className={style.ingredient}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
