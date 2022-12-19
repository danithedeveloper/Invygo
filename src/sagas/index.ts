import {all, fork} from 'redux-saga/effects';
import register from './register';

export default function* rootSaga() {
  yield all([fork(register)]);
}
