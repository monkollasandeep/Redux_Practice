import { put, takeEvery, all } from "redux-saga/effects";

import { addp, subp, boostp } from "../store/power";

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* boostpAsync() {
    yield put({ type: addp });
    yield delay(2000);
    yield put({ type: subp });
    yield delay(2000);
    yield put({ type: addp });
    yield delay(2000);
    yield put({ type: subp });
 }
 function* watchboostpAsync() {
    yield takeEvery(boostp, boostpAsync);
 }
 export function* rootSagas() {
    yield all([watchboostpAsync()]);
 }

