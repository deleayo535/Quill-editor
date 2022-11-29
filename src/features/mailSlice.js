import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   mails: [],
// };

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    mails: [],
    selectedMail: null,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },

    // addToTrash: (state, action) => {},

    deleteMessage: (state, action) => {
      console.log(state.mails);

      const { id } = action.payload;
      console.log(id);

      state.mails = state.mails.filter((mail) => mail.id !== id);
    },
  },
});

export const { selectMail, deleteMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
// export const removeMessage = (state) => state.mail.deleteMessage;

export default mailSlice.reducer;
