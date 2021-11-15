import {all, takeEvery} from "redux-saga";


import axios from "axios";
import { call } from "react-native-reanimated";
import { put } from "../../back/routes/page";


// thpe
const COMP_REQUEST = "COMP_REQUEST";
const COMP_RESPONSE = "COMP_RESPONSE";
const COMP_ERROR = "COMP_ERROR";

const comp_API = (data) => {
  return axios.get("http://localhost:3002/compitition");
}

function* comp() {
  try {
    const {data} = yield call(comp_API);
    yield put({
      type:COMP_RESPONSE,
      payload:data
    })
  }catch {
    yield put({
      type:COMP_ERROR,
      error: "요청에 실패했습니다."
    })
  }
}


function* watchComp() {
  yield takeEvery(COMP_REQUEST, comp);
}

export default function*  compSaga() {
  yield all([
    fork(watchComp),
  ])
}