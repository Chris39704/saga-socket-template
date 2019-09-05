// import * as types from '../ActionTypes'
import { groceryReceived } from '../actions'
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { SOCKET_CHANNEL, TOPIC_OUTBOUND } from '../../utils/constants';

const setupSocket = (dispatch) => {
  const socket = new SockJS(SOCKET_CHANNEL);
  const stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      stompClient.subscribe(TOPIC_OUTBOUND, function (msg) {
        dispatch(groceryReceived(JSON.parse(msg.body).content));
      });
  });
  return stompClient
}

export default setupSocket