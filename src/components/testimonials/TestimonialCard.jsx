import React from 'react';
import styles from "./styles/testimonialCard.module.scss";


export const TestimonialCard = ({image, name, content}) => {
  return (

    <div className={styles.card}>
        <img src={image} alt="profile picture" className={styles.profilePic}/>
        <span>{name}</span>
        <p>{content}</p>

    </div>
  )
}
