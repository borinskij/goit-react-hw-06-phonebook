import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    phoneSetContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    phoneDeleteContact(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { phoneSetContact, phoneDeleteContact, phoneFilterContact } =
  phonebookSlice.actions;
export default phonebookSlice.reducer;
