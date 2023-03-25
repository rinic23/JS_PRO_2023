import React from 'react';
import { Footer } from '../../Components/Commons/Footer';
import { Header } from '../../Components/Commons/Header';
import { PostCard } from '../../Components/Posts/PostCard';
import styles from './PostsPage.module.scss';

export const PostsPage = () => {
  return (
    <div className={styles.postPageWrapper}>
      <Header />
      <div className={styles.postList}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Footer />
    </div>
  );
};
