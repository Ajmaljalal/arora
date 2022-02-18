import { createAction } from "@reduxjs/toolkit"
export const changePage = createAction<string>('nav/changePage')
export const closeNav = createAction<boolean>('nav/closeNav')
export const incrementByAmount = createAction<number>('nav/incrementByAmount')