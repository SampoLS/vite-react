import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users/usersSlice';
import quotesReducer from '../features/quotes/quotesSlice';
import postsReducer from '../features/posts/postsSlice';
import combineReducers from '../features/combine/getDataSlice';
import classListReducer from '../features/classList/classListSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        quotes: quotesReducer,
        posts: postsReducer,
        combine: combineReducers,
        classList: classListReducer
    }
});
