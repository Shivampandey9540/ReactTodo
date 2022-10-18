import {
  ADD_TODONE,
  REMOVE_TODONE,
  ADD_TODOS,
  REMOVE_TODO,
} from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return [...state, action.payload];
    //   break;
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    //   break;
    case ADD_TODONE:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
      break;
  }
};
