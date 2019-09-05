import * as types from '../ActionTypes'

export const addGrocery = (payload) => ({
  type: types.ADD_GROCERY,
  payload
})

export const groceryReceived = (payload) => ({
    type: types.GROCERIES_RECEIVED,
    payload
  })