import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (state, action) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resp.json();
    const slicedPosts = posts.slice(0, 30);

    return slicedPosts;
});

const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
});

export default postsSlice.reducer;