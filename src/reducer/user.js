import { LOGIN } from "../constants";

const userReducer = (state = {}, action = {}) => {
  console.log("init reducer user");
  switch (action.type) {
    case LOGIN:
      break;

    default:
      break;
  }
};

export default userReducer;
