import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOpenEye: false,
  createOpenEye1: false,
  createOpenEye2: false,
  loginInputEmail: "",
  loginInputPassword: "",
  createAccInputName: "",
  createAccInputSurname: "",
  createAccInputEmail: "",
  createAccInputPassword1: "",
  createAccInputPassword2: "",
  forgotPassInputEmail: "",
  littleDetActOperator: null,
  littleDetActLang: null,
};

export const stateSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setLoginOpenEye: (state, action) => {
      state.loginOpenEye = action.payload;
    },
    setCreateOpenEye1: (state, action) => {
      state.createOpenEye1 = action.payload;
    },
    setCreateOpenEye2: (state, action) => {
      state.createOpenEye2 = action.payload;
    },
    setLittleDetActOperator: (state, action) => {
      state.littleDetActOperator = action.payload;
    },
    setLittleDetActLang: (state, action) => {
      state.littleDetActLang = action.payload;
    },
  },
});

export const {
  setLoginOpenEye,
  setCreateOpenEye1,
  setCreateOpenEye2,
  setLittleDetActOperator,
  setLittleDetActLang,
} = stateSlice.actions;
export default stateSlice.reducer;