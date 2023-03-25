import React from 'react';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { MainInfo } from '../../Components/Main/MainInfo';
import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={style.mainPageWrapper}>
      <Header />
      <div>
        <span>MainPage</span>
        <MainInfo />
      </div>
      <Footer />
    </div>
  );
};
