import { put, takeEvery, all } from "redux-saga/effects";

import { boostp, fullchargep } from "../store/power";

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* boostpAsync() {
    yield delay(5000);
    yield put({ type: fullchargep });
 }
 function* watchboostpAsync() {
    yield takeEvery(boostp, boostpAsync);
 }
 export function* rootSagas() {
    yield all([watchboostpAsync()]);
 }

