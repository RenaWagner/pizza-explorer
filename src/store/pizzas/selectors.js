export const selectListOfPizzas = (reduxState) => reduxState.pizzas.allPizzas;

export const selectAllPizzasPopularity = (reduxState) => {
  const clonedPizzas = [...reduxState.pizzas.allPizzas];

  return clonedPizzas.sort((pizza_a, pizza_b) => {
    return pizza_b.bought - pizza_a.bought;
  });
};

export const selectAllIngredients = (reduxState) => {
  const clonedPizzas = [...reduxState.pizzas.allPizzas];
  const ingredients = clonedPizzas.map((pizza) => {
    return pizza.ingredients.map((item) => {
      return item;
    });
  });

  const ingredientList = ingredients
    .flat()
    .filter((x, i, self) => self.indexOf(x) === i);
  return ingredientList;
};

// selectedIngredients == {tomatoes: false, mozzarella: true}
export const selectedIngredientsPizzas = (selectedIngredients) => (
  reduxState
) => {
  const clonedPizzas = [...reduxState.pizzas.allPizzas];
  const ingredients = Object.keys(selectedIngredients).filter(
    (e) => selectedIngredients[e]
  );
  // console.log("ingredients", ingredients);

  const ingredientsPizza = clonedPizzas.filter((pizza) => {
    return ingredients.every((item) => {
      return pizza.ingredients.includes(item);
    });
  });
  return ingredientsPizza;
};

export const selectSortedPizzas = (sortOption) => (reduxState) => {
  const clonedPizzas = [...reduxState.pizzas.allPizzas];
  if (sortOption === "name") {
    clonedPizzas.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sortOption === "popularity") {
    clonedPizzas.sort((pizza_a, pizza_b) => {
      return pizza_b.bought - pizza_a.bought;
    });
  }
  return clonedPizzas;
};
