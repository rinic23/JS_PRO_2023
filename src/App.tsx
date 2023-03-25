import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import { PostsPage } from './Containers/PostsPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts">
          <Route element={<PostsPage />} index />
          <Route path="one-post" element={<PostPage />} />
        </Route>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
