import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  foo: true
}

const slice = createSlice({
  initialState,
  name: `slice`,
  reducers: {
    add() {}
  }
})

export const { add } = slice.actions

const { reducer } = slice

export default reducer
