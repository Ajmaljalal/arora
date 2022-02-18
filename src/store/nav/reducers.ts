import { createReducer } from '@reduxjs/toolkit';
import {
  changePage
} from './actions';

type NavbarState = {
  currentPage: string;
};

const initialState: NavbarState = {
  currentPage: 'Home',
};

export const navbarReducer = createReducer(initialState, builder => {
  builder
    .addCase(changePage, (state, action) => {
      state.currentPage = action.payload;
    })
  // .addCase(incrementByAmount, (state, action) => {
  //   state.value += action.payload;
  // });
});