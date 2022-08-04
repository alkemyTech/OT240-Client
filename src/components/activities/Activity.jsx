import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router';
import styles from "./styles/activity.module.scss"


export const Activity = () => {

    const {id} = useParams();    

    let data = [
        {
            id: 1,
            name: "Actividad 1",
            image: "/images/journal-01.jpg",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ex optio laboriosam! Dolorem impedit temporibus facere eos ex quidem recusandae necessitatibus fugiat doloribus perferendis, mollitia, quam autem sapiente cumque dolore?"
        },{
            id: 2,
            name: "Actividad 2",
            image: "/images/journal-02.jpg",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ex optio laboriosam! Dolorem impedit temporibus facere eos ex quidem recusandae necessitatibus fugiat doloribus perferendis, mollitia, quam autem sapiente cumque dolore?"
        },{
            id: 3,
            name: "Actividad 3",
            image: "/images/journal-03.jpg",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ex optio laboriosam! Dolorem impedit temporibus facere eos ex quidem recusandae necessitatibus fugiat doloribus perferendis, mollitia, quam autem sapiente cumque dolore?"
        },
    ];  
    
    let actividad = data.find((el) => el.id==id);       
      
  return (
    <div className={styles.container}>  
        {
            (actividad!=undefined) ? 
                <>
                    <img src={actividad.image} alt='actividad' className={styles.image} /> 
                    <h2>{actividad.name}</h2> 
                    <p>{actividad.content}</p> 
                </>
                : <p>`Error: no se encontró la actividad`</p>                
            }             
    </div>
  )
  
}
