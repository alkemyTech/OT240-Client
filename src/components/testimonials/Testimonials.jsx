import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./styles/testimonials.module.scss";
import { TestimonialCard } from './TestimonialCard';




export const Testimonials = () => {

    const navigate = useNavigate();

    let data = [
        {
            id: 1,
            image: "/images/author-01.png",
            name: "Juan Pérez",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, enim temporibus totam amet deserunt repellendus ipsam cumque fuga ex, dignissimos at voluptatum! Esse, nam."
        },
        {
            id: 1,
            image: "/images/author-01.png",
            name: "Juan Pérez",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, enim temporibus totam amet deserunt repellendus ipsam cumque fuga ex, dignissimos at voluptatum! Esse, nam."
        },
        {
            id: 1,
            image: "/images/author-01.png",
            name: "Juan Pérez",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, enim temporibus totam amet deserunt repellendus ipsam cumque fuga ex, dignissimos at voluptatum! Esse, nam."
        }
    ];

    


  return (
    <div className={styles.container}>
        <div>
            <h2 className={styles.title}>Testimonios</h2>
        </div>
        <div className={styles.cards}>
            {
                data.map( (el)=> (
                    <TestimonialCard key={el.id} {...el}/>
                ) )
            }            
        </div>
        <div className={styles.buttons}>
            <div >
                <button className={styles.button1}>¡Agregar mi testimonio!</button>
            </div>
            <div >
                <button className={styles.button2} onClick={()=> navigate("/")}>Ir al inicio</button>
            </div>
        </div>
    </div>
  )
}
