import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllIngredients,
  selectAllPizzasPopularity,
  selectedIngredientsPizzas,
} from "../store/pizzas/selectors";
import "./Ingredients.scss";

export default function Ingredients() {
  const ingredients = useSelector(selectAllIngredients);
  const [filter, setFilter] = useState({});

  //   console.log("ingredients", ingredients);
  // console.log("filter", filter);

  const ingredientsPizzas = useSelector(selectedIngredientsPizzas(filter));
  //   console.log("ingredientsPizzas", ingredientsPizzas);

  function settingFilter(item) {
    if (!filter[item]) {
      setFilter({ ...filter, [item]: true });
    } else {
      setFilter({ ...filter, [item]: false });
    }
  }

  return (
    <div className="ingredientsContainer">
      <p>You can choose pizzas that include ingredients:</p>
      {ingredients.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => settingFilter(item)}
            className={filter[item] ? "selectedBtn" : "nonSelectedBtn"}
          >
            {item}
          </button>
        );
      })}
      <br></br>
      {ingredientsPizzas.map((pizza) => {
        return <li key={pizza.id}>{pizza.name}</li>;
      })}
    </div>
  );
}
