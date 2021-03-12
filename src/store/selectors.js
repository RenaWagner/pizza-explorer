export const selectRestaurantsWithPizzas = (reduxState) => {
  const clonedRestaurants = [...reduxState.restaurants.allRestaurants];
  const clonedPizzas = [...reduxState.pizzas.allPizzas];
  const restaurantsPizzaId = [
    clonedRestaurants.map((restaurant) => {
      return {
        ...restaurant,
        pizzas: restaurant.pizzas.map((pizzaId) => {
          return clonedPizzas.find((pizza) => {
            return pizzaId === pizza.id;
          });
        }),
      };
    }),
  ];

  restaurantsPizzaId[0].sort((res_a, res_b) => {
    return res_a.name.localeCompare(res_b.name);
  });

  return restaurantsPizzaId;
};

export const selectPizzasSoldByRestaurant = (restaurantId) => (reduxState) => {
  const clonedRestaurants = [...reduxState.restaurants.allRestaurants];
  const clonedPizzas = [...reduxState.pizzas.allPizzas];

  const selectedRestaurant = clonedRestaurants.find((restaurant) => {
    return restaurant.id === restaurantId;
  });

  if (!selectedRestaurant) {
    return [];
  }

  const pizzasSoldByRestaurant = selectedRestaurant.pizzas.map((pizzaId) => {
    return clonedPizzas.find((pizza) => {
      return pizza.id === pizzaId;
    });
  });

  return pizzasSoldByRestaurant;
};
