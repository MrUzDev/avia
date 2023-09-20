import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: localStorage.getItem('access'),
  value: 0
}

export const slice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
      incremented: state => {
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })
  
  export const { incremented, decremented } = slice.actions

  export default slice.reducer 