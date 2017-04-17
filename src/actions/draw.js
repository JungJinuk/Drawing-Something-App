import {
  DRAW_POST,
  DRAW_POST_SUCCESS,
  DRAW_POST_FAILURE,
  DRAW_LIST,
  DRAW_LIST_SUCCESS,
  DRAW_LIST_FAILURE
} from './ActionTypes';
import axios from 'axios';

/* Draw POST */
export function drawPostRequest(url) {
  return (dispatch) => {
    dispatch(drawPost());

    return axios.post('/api/draw/', { url })
    .then((response) => {
      dispatch(drawPostSuccess());
    }).catch((error) => {
      dispatch(drawPostFailure(error.response.data.code));
    });
  };
}

export function drawPost() {
  return {
    type: DRAW_POST
  };
}

export function drawPostSuccess() {
  return {
    type: DRAW_POST_SUCCESS
  };
}

export function drawPostFailure(error) {
  return {
    type: DRAW_POST_FAILURE,
    error
  };
}