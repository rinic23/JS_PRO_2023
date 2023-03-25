import React from 'react';
import { Footer } from '../../Components/Commons/Footer';
import { Header } from '../../Components/Commons/Header';
import { PostCard } from '../../Components/Posts/PostCard';

export const PostsPage = () => {
  return (
    <div>
      <Header />
      <span>PostsPage</span>
      <PostCard />
      <Footer />
    </div>
  );
};
