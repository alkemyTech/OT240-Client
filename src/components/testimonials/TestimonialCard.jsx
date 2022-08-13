import React from 'react';
import styles from './styles/testimonialCard.module.scss';

export const TestimonialCard = ({ image, name, content }) => {
  return (
    <div className={styles.card}>
      <img
        src={image || './assets/placeholder.jpg'}
        alt='profile picture'
        className={styles.profilePic}
      />
      <span className={styles.span}>{name}</span>
      <p className={styles.p}>{content}</p>
    </div>
  );
};
