import React from 'react';
import { useParams } from 'react-router';
import styles from './styles/activity.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { loadActivity } from '../../redux/actions/activity.action';

export const Activity = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { activity, loading, error } = useSelector((state) => state.activity);

  React.useEffect(() => {
    dispatch(loadActivity({ method: 'get', url: `/activities/${id}` }));
  }, []);

  return (
    <div className={styles.container}>
      {activity != undefined ? (
        <>
          <img src={activity.image} alt='actividad' className={styles.image} />
          <h2 className={styles.name}>{activity.name}</h2>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: activity.content } || ''}></div>
        </>
      ) : (
        <p className={styles.error}>Error: no se encontró la actividad</p>
      )}
    </div>
  );
};
