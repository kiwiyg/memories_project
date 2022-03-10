import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData).catch((err) => {
      const { message } = err.response.data;
      alert(message);
    });

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData).catch((err) =>{
      const { message } = err.response.data;
      alert(message);
    });

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
