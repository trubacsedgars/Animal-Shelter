import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer as animalsReducer } from './animalsSlice';
import { reducer as languageReducer } from './languageSlice';

const store = configureStore({
  reducer: {
    animals: animalsReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
