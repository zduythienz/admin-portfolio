import { LOGIN } from "../constants";

export const userAction = {
  login
};

const login = user => ({
  payload: user,
  type: LOGIN
});
