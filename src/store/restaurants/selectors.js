export const selectAllRestaurants = (reduxState) => {
  const clonedRestaurants = [...reduxState.restaurants.allRestaurants];

  return clonedRestaurants.sort((restaurant_a, restaurant_b) => {
    return restaurant_a.name.localeCompare(restaurant_b.name);
  });
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  const clonedRestaurants = [...reduxState.restaurants.allRestaurants];

  const restaurantsSellSelectedPizza = clonedRestaurants.filter(
    (restaurant) => {
      return restaurant.pizzas.includes(pizzaId);
    }
  );

  return restaurantsSellSelectedPizza;
};
