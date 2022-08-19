import React, { useEffect } from 'react';
import { ActivityCard } from './ActivityCard';
import styles from './styles/activities.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchAcivities } from '../../redux/actions/activity.action';
import { useSelector, useDispatch } from 'react-redux';

export const Activities = () => {
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(fetchAcivities({ method: 'get', url: '/activities' }));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Actividades</h2>
      <div className={styles.cards}>
        {entries.map((el) => (
          <ActivityCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};
