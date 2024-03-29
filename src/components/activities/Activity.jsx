import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles/activity.module.scss';
import { loadActivity, cleanActivity } from '../../redux/actions/activity.action';
import { Loader } from '../loader/Loader';

export const Activity = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { activity, loading, error } = useSelector((state) => state.activity);

  React.useEffect(() => {
    dispatch(loadActivity({ method: 'get', url: `/activities/${id}` }));
    return () => {
      dispatch(cleanActivity({}));
    };
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={activity.loader}>
          <Loader />
        </div>
      ) : error ? (
        <p className={styles.error}>Error: no se encontró la actividad</p>
      ) : (
        <>
          <img src={activity.image} alt='actividad' className={styles.image} />
          <h2 className={styles.name}>{activity.name}</h2>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: activity.content } || ''}></div>
        </>
      )}
      <button onClick={() => navigate('/')}>Ir al inicio</button>
    </div>
  );
};
