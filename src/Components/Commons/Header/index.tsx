import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">Main Page</Link>
      <Link to="/posts">Posts Page</Link>
      <Link to="/posts/213123" state={'test state'}>
        One post Page
      </Link>
    </header>
  );
};
