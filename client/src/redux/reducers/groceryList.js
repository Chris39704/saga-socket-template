import { Map } from 'immutable';
import * as types from '../ActionTypes';

const initialState = Map();

export default(state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GROCERIES_RECEIVED:
        return state.mergeDeep({ [payload.id]: payload });
      // case types.ADD_GROCERY:
      //   return state.merge(payload);
      default:
        return state
    }
  }
