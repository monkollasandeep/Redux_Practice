import { createSlice } from "@reduxjs/toolkit";


const initialState = { power : 0 };

const powerSlice = createSlice({
    name: "power",
    initialState,
    reducers: {
        addp(state) {
            state.power++;
        },
        subp(state) {
            state.power--;
        },
        boostp() {
        },
        fullchargep(state) {
            state.power = state.power + 10;
        },
    }
});
export const {addp, subp, boostp, fullchargep, powerup} = powerSlice.actions;

export default powerSlice.reducer;