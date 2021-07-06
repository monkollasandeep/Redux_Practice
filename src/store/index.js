import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSagas }   from "../sagas/saga";

import counterReducer from "./counter";
import authReducer from "./auth";
import powerReducer from "./power";

const reducer = combineReducers({
    counter: counterReducer, 
    auth: authReducer, 
    power: powerReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(rootSagas);

export default store;




// const counterReducer = (state= initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }
//     if (action.type === "reset") {
//         return {
//             counter: 0,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "toggle") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         };
//     }

//     return state;
// };