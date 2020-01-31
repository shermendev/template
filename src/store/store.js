import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducer from '~store/slices/slice'

export const store = configureStore({
  devTools: process.env.NODE_ENV !== `production`,
  middleware: [thunk],
  reducer: {
    reducer
  }
})
