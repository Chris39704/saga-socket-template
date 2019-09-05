import { combineReducers } from 'redux'
import groceryList from './groceryList'

const rootReducer = combineReducers({
groceries: groceryList
})

export default rootReducer