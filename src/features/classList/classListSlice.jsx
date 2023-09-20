import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: 'block' 
}

const classListSlice = createSlice({
    name: 'classList',
    initialState,
    reducers: {
        changeDisplayToBlock(state, action) {
            state.display = 'block';
        },
        changeDisplayToGrid(state, action) {
            state.display = 'grid';
        }
    }
});

export const { changeDisplayToBlock, changeDisplayToGrid } = classListSlice.actions;
export default classListSlice.reducer;