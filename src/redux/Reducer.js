import { GETCAISSE } from "./Actiontype";

const initialState = { users: [] };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETCAISSE:
      return { ...state, users: payload.all_caisses };

    default:
      return state;
  }
};
