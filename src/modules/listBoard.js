import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as boardsAPI from '../lib/api/boards';
import { takeLatest } from 'redux-saga/effects';

const [LIST_BOARD, LIST_BOARD_SUCCESS, LIST_BOARD_FAILURE] = createRequestActionTypes('boards/LIST_BOARD');

export const m_listBoard = createAction(LIST_BOARD);

const listBoardSaga = createRequestSaga(LIST_BOARD, boardsAPI.listBoards);
export function* listSaga() {
  yield takeLatest(LIST_BOARD, listBoardSaga);
}

const initialState = {
  datas: null,
  error: null,
};

const listBoard = handleActions(
  {
    [LIST_BOARD_SUCCESS]: (state, { payload: datas }) => ({
      ...state,
      datas,
    }),
    [LIST_BOARD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default listBoard;
