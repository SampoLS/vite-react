import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
    const resp = await fetch('http://quotable.io/random');
    const quotes = await resp.json();
    return quotes;
})

const initialState = {
    quotes: []
}

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.quotes = action.payload;
        })
    }
});

export default quotesSlice.reducer;