import React, { useEffect } from 'react';
import { PostCard } from '../../Components/Posts/PostCard';
import styles from './PostsPage.module.scss';
import { useDispatch } from 'react-redux';
import { getPostList } from '../../store/posts/effects';

export const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  return (
    <div className={styles.postList}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
