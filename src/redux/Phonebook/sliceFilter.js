import { createSlice } from '@reduxjs/toolkit';

const filterState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'phoneFilter',
  initialState: filterState,
  reducer: {
    phoneFilterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { phoneFilterContact } = filterSlice.actions;
export default filterSlice.reducer;
