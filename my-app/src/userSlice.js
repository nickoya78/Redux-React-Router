import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [
      {
        id: "1",
        name: "Mark Wallace",
        email: "wallace24@gmail.com",
      },
      {
        id: "2",
        name: "Peter Parker",
        email: "parker55@aol.com",
      },
      {
        id: "3",
        name: "John Travolta",
        email: "travolta303@yahoo.com",
      },
    ],
  },
  reducers: {},
});

export default usersSlice.reducer;
