import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';
import { useSelector } from 'react-redux';
import { getUserEmail, getUserToken } from '../../../store/userData/selectors';

export const Header = () => {
  const email = useSelector(getUserEmail);
  const token = useSelector(getUserToken);

  return (
    <header className={styles.header}>
      <Link to={routes.MAIN}>Main Page</Link>
      <Link to={routes.POSTS}>Posts Page</Link>
      <Link to={`${routes.POSTS}/23131`} state={'test state'}>
        One post Page
      </Link>
      <Link to={routes.PRODUCTS}>Products Page</Link>
      {email && <span>{email}</span>}
      {token ? <button>LogOut</button> : <Link to={routes.AUTH}>Auth page</Link>}
    </header>
  );
};
