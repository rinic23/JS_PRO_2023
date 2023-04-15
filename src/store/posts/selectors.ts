import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getPostsState = (state: TState) => state.posts;

export const getPostListSelector = createSelector(getPostsState, ({ posts }) => posts.data);
export const getPostListIsError = createSelector(getPostsState, ({ posts }) => posts.isError);
export const getPostListIsSuccess = createSelector(getPostsState, ({ posts }) => posts.isSuccess);
export const getPostListIsLoading = createSelector(getPostsState, ({ posts }) => posts.isLoading);
