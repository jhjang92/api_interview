import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as boardsApi from '../lib/api/boards';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const [WRITE_BOARD, WRITE_BOARD_SUCCESS, WRITE_BOARD_FAILURE] = createRequestActionTypes('write/WRITE_BOARD');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const m_writeBoard = createAction(WRITE_BOARD, ({ nickName, content }) => ({
  nickName,
  content,
}));

// 사가 생성
const writeBoardSaga = createRequestSaga(WRITE_BOARD, boardsApi.writeBoard);
export function* writeSaga() {
  yield takeLatest(WRITE_BOARD, writeBoardSaga);
}

const initialState = {
  nickName: '',
  content: '',
  board: null,
  boardError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_BOARD]: (state) => ({
      ...state,
      board: null,
      boardError: null,
    }),
    [WRITE_BOARD_SUCCESS]: (state, { payload: board }) => ({
      ...state,
      board,
    }),
    [WRITE_BOARD_FAILURE]: (state, { payload: boardError }) => ({
      ...state,
      boardError,
    }),
  },
  initialState,
);

export default write;
