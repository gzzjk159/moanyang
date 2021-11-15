import {all, fork} from "redux-saga";

import compSaga from "./compotition.Saga";
export default function* rootSaga() {
  yield all([
    fork(compSaga)
  ]);
}