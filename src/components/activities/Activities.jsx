import React from 'react'
import { ActivityCard } from './ActivityCard';
import styles from "./styles/activities.module.scss"

export const Activities = () => {

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


  return (
    <div className={styles.container}>

        <h2 className={styles.title}>Actividades</h2>
        <div className={styles.cards}>
        {
            data.map( (el) => (
                <ActivityCard  key={el.id} {...el}/>
            ) )
        }
        </div>

    </div>
  )
}
