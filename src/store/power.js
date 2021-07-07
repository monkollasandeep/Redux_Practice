import { createSlice } from "@reduxjs/toolkit";


const initialState = { power : 0 };

const powerSlice = createSlice({
    name: "power",
    initialState,
    reducers: {
        addp(state) {
            return {...state, power : state.power + 1};
        },
        subp(state) {
            return {...state, power : state.power - 1};
        },
        boostp() {
        },
        fullchargep(state) {
            return {...state, power : state.power + 10};
        },
    }
});
export const {addp, subp, boostp, fullchargep, powerup} = powerSlice.actions;

export default powerSlice.reducer;