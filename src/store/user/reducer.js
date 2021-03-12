const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite": {
      const id = action.payload;
      const favorites = state.favorites.includes(id)
        ? state.favorites.filter((favorite) => favorite !== id)
        : [...state.favorites, id];
      return {
        ...state,
        favorites, // stateの中のfavorites (Array)
      };
    }
    default: {
      return state;
    }
  }
}
