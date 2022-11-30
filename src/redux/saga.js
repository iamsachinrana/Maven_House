import { select, put, takeLatest, all } from 'redux-saga/effects';

function* actionWatcher() {
  
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}