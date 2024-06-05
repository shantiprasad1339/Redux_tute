import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [
   
   
  ],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter(user => user.id !== action.payload);
    },
    clearUser(state) {
      return [];
    }
  }
});

export const { addUser, deleteUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
