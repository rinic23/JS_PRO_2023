import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Components/Commons/Layouts';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import { PostsPage } from './Containers/PostsPage';
import { ProductsPage } from './Containers/ProductsPage';
import { routes } from './utils/constants/routes';
import { AuthPage } from './Containers/AuthPage';
import { CheckAuth } from './Components/Commons/CheckAuth';

function App() {
  return (
    <div className={styles.wrapper}>
      <Layout>
        <Routes>
          <Route
            path={routes.MAIN}
            element={
              <CheckAuth>
                <MainPage />
              </CheckAuth>
            }
          />
          <Route
            path={routes.PRODUCTS}
            element={
              <CheckAuth>
                <ProductsPage />
              </CheckAuth>
            }
          />
          <Route path={routes.AUTH} element={<AuthPage />} />
          <Route path={routes.POSTS}>
            <Route
              element={
                <CheckAuth>
                  <PostsPage />
                </CheckAuth>
              }
              index
            />
            <Route
              path=":id"
              element={
                <CheckAuth>
                  <PostPage />
                </CheckAuth>
              }
            />
          </Route>
          <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
