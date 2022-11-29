import { EMPTY_MAIL, DELETE_MAIL } from "./constant";

let initialState = {
  mails: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MAIL:
      console.warn("REMOVE_FROM_MAIL condition ", action);
      // data.length = data.length ? data.length - 1 : [];
      return {
        ...state,
        mails: state.mails.filter((mail, index) => index !== action.payload),
      };
    case EMPTY_MAIL:
      console.warn("EMPTY MAIL condition ", action);
      return [...mail];
    default:
      return mails;
  }
};

export const deleteMail = (index) => {
  dispatch({
    type: DELETE_MAIL,
    payload: index,
  });
};
