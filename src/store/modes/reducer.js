const initialState = {
  darkmode: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "modes/darkMode": {
      return {
        ...state,
        darkmode: action.payload,
      };
    }
    case "modes/lightMode": {
      return {
        ...state,
        darkmode: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
