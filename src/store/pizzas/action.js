export const addPizza = (name, description) => ({
  type: "pizzas/add",
  payload: {
    name: name,
    description: description,
    id: Math.floor(Math.random() * 100000),
  },
});
