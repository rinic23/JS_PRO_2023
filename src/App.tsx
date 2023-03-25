import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Components/Commons/Layouts';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import { PostsPage } from './Containers/PostsPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts">
            <Route element={<PostsPage />} index />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
