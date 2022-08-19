import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./styles/activityCard.module.scss"


export const ActivityCard = ({image, name, content, id}) => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`${id}`);
    }


  return (
    <div className={styles.card}>

        <img src={image} alt="actividad" className={styles.image}/>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.content}>{content}</p>
        <button className={styles.button} onClick={()=>handleClick()}>Ver Actividad</button>

    </div>
  )
}
