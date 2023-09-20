import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const combine = createAsyncThunk('combine/combineUsersWithQuotes', async () => {
    const usersResp = await fetch('https://api.github.com/users');
    const postsResp = await fetch('https://jsonplaceholder.typicode.com/posts');

    const users = await usersResp.json();
    let posts = await postsResp.json();
    posts = posts.slice(0, 30);

    const combinedData = [...users];

    for (let i = 0; i < 30; i++)
        combinedData[i].content = posts[i].title;

    return combinedData;
});

const initialState = {
    combinedData: []
}

const getDataSlice = createSlice({
    name: 'combine',
    initialState,
    extraReducers: builder => {
        builder.addCase(combine.fulfilled, (state, action) => {
            state.combinedData = action.payload;
        })
    }
});

export const { combineUsersWithQuotes } = getDataSlice.actions;
export default getDataSlice.reducer;
