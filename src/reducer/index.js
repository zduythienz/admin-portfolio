import { LOGIN } from "../constants";
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => state;

const user = (state = {}, action = {}) => {
  console.log("init reducer user");
  switch (action.type) {
    case LOGIN:
      break;

    default:
      break;
  }
};

export default rootReducer;
