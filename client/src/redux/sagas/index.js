import { takeEvery } from 'redux-saga/effects'
import * as types from '../ActionTypes'
import { TOPIC_INBOUND } from '../../utils/constants'

const handleNewGrocery = function* handleNewGrocery(socket) {
  yield takeEvery(types.ADD_GROCERY, (action) => {
    socket.send(TOPIC_INBOUND,  {}, JSON.stringify(action.payload))
  })
}

export default handleNewGrocery