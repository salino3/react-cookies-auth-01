import { All_Actions, StateApp } from ".";

export const ReducerApp = (state: StateApp, action: All_Actions) => {
  switch (action.type) {
    case "UPDATE_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
