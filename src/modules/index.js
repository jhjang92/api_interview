import { combineReducers } from 'redux';
import write, { writeSaga } from './write';
import listBoard, { listSaga } from './listBoard';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  write,
  loading,
  listBoard,
});

export function* rootSaga() {
  yield all([writeSaga(), listSaga()]);
}

export default rootReducer;
