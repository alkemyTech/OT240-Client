import React, { useEffect } from 'react';
import { ActivityCard } from './ActivityCard';
import styles from "./styles/activities.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAcivities } from '../../redux/actions/activity.action';
import { Loader } from '../loader/Loader';


export const Activities = () => {
    
    const dispatch = useDispatch();
    const { entries, loading, error } = useSelector((state) => state.activity);
        
    React.useEffect(() => {    
      dispatch(fetchAcivities({method: 'get', url: '/activities' }));      
    }, [dispatch]);


  return (

      <div className={styles.container}>
          <h2 className={styles.title}>Actividades</h2>
          <div className={styles.cards}>  
              {
                  (loading)? 
                    <div className={styles.loaderContainer}>
                      <Loader />
                    </div>    
                    :        
                  entries.map( (el) => (
                      <ActivityCard  key={el.id} {...el}/>
                  ) )
              }          
          </div>
      </div>
  )
}
