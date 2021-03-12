import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPizzasPopularity,
  selectListOfPizzas,
  selectSortedPizzas,
} from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/user/action";
import { selectUser } from "../store/user/selectors";
import "./PizzaList.scss";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const allPizzas = useSelector(selectListOfPizzas);
  const pizzasByPopularity = useSelector(selectAllPizzasPopularity);

  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("name");
  const sortedPizza = useSelector(selectSortedPizzas(sortBy));

  //   console.log(allPizzas);
  //   console.log(typeof allPizzas);
  // console.log(sortedPizza);

  const clickedFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const changeSorting = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="pizzaListContainer">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>
      </p>
      <p>Total pizzas: {allPizzas.length}</p>
      <p>
        Sort by:{" "}
        <select onChange={changeSorting} value={sortBy}>
          <option value="name">By Name</option>
          <option value="popularity">Popularity</option>
        </select>
      </p>
      <ul className="pizzaContainer">
        {sortedPizza.map((pizza) => (
          <div key={pizza.id}>
            <li
              className="pizzaList"
              style={{ backgroundImage: `url(${pizza.image})` }}
            >
              <button
                onClick={() => clickedFavorite(pizza.id)}
                className={`toggle ${
                  user.favorites.includes(pizza.id) ? "fav" : ""
                }`}
              >
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
              <div className="overlay">
                <strong>{pizza.name} </strong>
                {pizza.description}
                <br></br>
                Bought: <strong>{pizza.bought} times</strong>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
