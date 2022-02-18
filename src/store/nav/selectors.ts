import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectNav = (state: RootState) => state.navbar.currentPage;

export const navSelector = createSelector(selectNav, state => state);