import React from 'react'
import { ActivityCard } from './ActivityCard';
import styles from "./styles/activities.module.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import fetchApi from '../../axios/axios';


export const Activities = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [activities, setActivities] = React.useState([]);
    
    React.useEffect(() => {    
        const getActivities = async () => {
          try {
            const { data } = await fetchApi({ method: 'get', url: '/activities' });
            setActivities(data);
          } catch (err) {
            console.log("Error en el get");        
          }  
        };
        getActivities();    
      }, []);


  return (
    <div className={styles.container}>

        <h2 className={styles.title}>Actividades</h2>
        <div className={styles.cards}>
        {
            activities.map( (el) => (
                <ActivityCard  key={el.id} {...el}/>
            ) )
        }
        </div>

    </div>
  )
}
