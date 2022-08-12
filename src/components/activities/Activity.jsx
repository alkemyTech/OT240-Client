import React from 'react';
import { useParams } from 'react-router';
import fetchApi from '../../axios/axios';
import styles from "./styles/activity.module.scss"


export const Activity = () => {

    const {id} = useParams();    
    const [activity, setActivity] = React.useState([]);

    React.useEffect(() => {    
        const getActivity = async () => {
          try {
            const { data } = await fetchApi({ method: 'get', url: `/activities/${id}` });
            console.log(data)
            setActivity(data);
          } catch (err) {
            console.log("Error en el get");        
          }  
        };
        getActivity();    
      }, []);      
    
    //let actividad = data.find((el) => el.id==id);       
      
  return (
    <div className={styles.container}>  
        {
            (activity!=undefined) ? 
                <>
                    <img src={activity.image} alt='actividad' className={styles.image} /> 
                    <h2 className={styles.name}>{activity.name}</h2> 
                    <p className={styles.content}>{activity.content}</p> 
                </>
                : <p className={styles.error}>Error: no se encontró la actividad</p>                
            }             
    </div>
  )
  
}
