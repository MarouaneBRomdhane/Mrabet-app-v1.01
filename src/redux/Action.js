import { GETCAISSE } from "./Actiontype";

import axios from "axios";

export const Getcaisses = () => async (dispatch) => {
  try {
    await axios.get("/caisse/find").then((res) => {
      dispatch({ type: GETCAISSE, payload: res.data });
      // dispatch({ type: GETUSER, payload: res.data.all_users }); to bring the users without the other informations
    });
  } catch (error) {
    console.log("Get users error: ", error);
  }
};
export const Createcaisse = (data) => async (dispatch) => {
  try {
    
    // Dispatch action to get users (assuming Getusers is defined)
    dispatch(Createcaisse());
  } catch (error) {
    console.error("Create user error: ", error);
  }
};