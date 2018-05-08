const initialStateMath = {
    result: 0,
    lastValues: []
};

const mathReducer = (state = initialStateMath, action) => {
  switch(action.type)
  {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }

      break;
    case "SUB":
    state = {
      ...state,
      result: state.result - action.payload,
      lastValues: [...state.lastValues, action.payload]
    }

        break;

        case "RESET":
        state = {
          ...state,
          result: action.payload,
          lastValues: []
        }

            break;


    default:


  }
  return state;
};

export default mathReducer;
