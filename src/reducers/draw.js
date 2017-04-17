import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  post: {
    status: 'INIT',
    error: -1
  }
};

export default function draw(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }

  switch(action.type) {
    /* DRAW_POST */
    case types.DRAW_POST:
      return update(state, {
        post: {
          status: { $set: 'WAITING' },
          error: { $set: -1 }
        }
      });
    case types.DRAW_POST_SUCCESS:
      return update(state, {
        post: {
          status: { $set: 'SUCCESS' }
        }
      });
    case types.DRAW_POST_FAILURE:
      return update(state, {
        post: {
          status: { $set: 'FAILURE' },
          error: { $set: action.error }
        }
      });
    default:
      return state;
  }
}