import { createSlice } from "@reduxjs/toolkit";

interface userData {
  name: string;
  finalScore: number;
  nameShow: boolean;
  hangmanShow: boolean;
  scoreShow: boolean;
  users: any;
}

const initalState: userData = {
  name: "",
  finalScore: 0,
  nameShow: true,
  hangmanShow: false,
  scoreShow: false,
  users: [],
};

export const requestReducer = createSlice({
  name: "sender",
  initialState: initalState,
  reducers: {
    showName: (state) => {
      state.nameShow = !state.nameShow;
      state.hangmanShow = false;
      state.scoreShow = false;
    },

    showHangman: (state) => {
      state.nameShow = false;
      state.hangmanShow = !state.hangmanShow;
      state.scoreShow = false;
    },
    showScore: (state) => {
      state.nameShow = false;
      state.hangmanShow = false;
      state.scoreShow = true;
    },

    sendName: (state, action) => {
      state.name = action.payload;
    },
    sendScore: (state, action) => {
      const exists = state.users.find(
        (user: any) => user.finalscore === action.payload
      );
      if (!exists) {
        state.users.push({
          name: state.name,
          finalscore: action.payload,
        });
      }
    },
  },
});

export const { sendName, sendScore, showName, showHangman, showScore } =
  requestReducer.actions;

export default requestReducer;
