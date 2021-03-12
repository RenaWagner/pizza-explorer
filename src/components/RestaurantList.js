import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllPizzasPopularity } from "../store/pizzas/selectors";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";
// import { selectAllPizzasPopularity } from "../store/pizzas/selectors";
// import { selectAllRestaurants } from "../store/restaurants/selectors";
import {
  selectPizzasSoldByRestaurant,
  selectRestaurantsWithPizzas,
} from "../store/selectors"; //cross selector
import "./RestaurantList.scss";

export default function RestaurantList() {
  // const restaurants = useSelector(selectAllRestaurants);
  //   console.log(restaurants);
  const restaurantsWithPizzas = useSelector(selectRestaurantsWithPizzas);
  // console.log(typeof restaurantsWithPizzas);
  // console.log(restaurantsWithPizzas[0].map((restaurant) => restaurant.name));
  const pizzas = useSelector(selectAllPizzasPopularity);
  const [selectedPizza, setSelectedPizza] = useState(0);
  const [selectedRestaurant, setSelectedRestaurants] = useState("");
  const restaurantsThatSellSelectedPizza = useSelector(
    selectRestaurantsThatSellPizza(selectedPizza)
  );
  const pizzasSoldByRestaurant = useSelector(
    selectPizzasSoldByRestaurant(selectedRestaurant)
  );

  // console.log(pizzasSoldByRestaurant);
  // console.log(selectedRestaurant);

  return (
    <div className="listRestaurantContainer">
      <h3>
        What does{" "}
        <select
          onChange={(e) => setSelectedRestaurants(parseInt(e.target.value))}
        >
          <option value={""}>Select</option>
          {restaurantsWithPizzas[0].map((restaurant) => {
            return (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            );
          })}
        </select>{" "}
        sell?
      </h3>
      {pizzasSoldByRestaurant.map((pizza) => {
        return <li key={pizza.id}>{pizza.name}</li>;
      })}

      <h3>
        Who sells the pizza:{" "}
        <select onChange={(e) => setSelectedPizza(parseInt(e.target.value))}>
          <option value={""}>Select</option>
          {pizzas.map((pizza) => {
            return (
              <option value={pizza.id} key={pizza.id}>
                {pizza.name}
              </option>
            );
          })}
        </select>
      </h3>
      {restaurantsThatSellSelectedPizza ? (
        restaurantsThatSellSelectedPizza.map((restaurant) => {
          return <li key={restaurant.id}>{restaurant.name}</li>;
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}
