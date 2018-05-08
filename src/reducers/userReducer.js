const initialStateUser = {
    name: "Adhish",
    age: 20,
    lastValues: []
};

const userReducer = (state = initialStateUser, action) => {
  switch(action.type)
  {
    case "NAME":
      state = {
        ...state,
        name: action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;

      case "AGE":
        state = {
          ...state,
          age: action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;

    default:
  }
  return state;
};

export default userReducer;
