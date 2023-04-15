import React from 'react';
import styles from './PostCard.module.scss';

interface TProps {
  title: string;
  id: number;
  body: string;
}

export const PostCard = ({ title, body, id }: TProps) => {
  return (
    <div className={styles.cardWrapper}>
      <span className={styles.label}>{title}</span>
      <p className={styles.content}>{body}</p>
    </div>
  );
};
