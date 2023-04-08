/* eslint-disable multiline-ternary */
import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail, getUserToken } from '../../../store/userData/selectors';
import { resetUserData } from '../../../store/userData';

export const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const token = useSelector(getUserToken);

  const logOutHandler = () => dispatch(resetUserData());

  return (
    <header className={styles.header}>
      <Link to={routes.MAIN}>Main Page</Link>
      <Link to={routes.POSTS}>Posts Page</Link>
      <Link to={`${routes.POSTS}/23131`} state={'test state'}>
        One post Page
      </Link>
      <Link to={routes.PRODUCTS}>Products Page</Link>
      {email && <span>{email}</span>}
      {token ? (
        <button onClick={logOutHandler}>LogOut</button>
      ) : (
        <Link to={routes.AUTH}>Auth page</Link>
      )}
    </header>
  );
};
