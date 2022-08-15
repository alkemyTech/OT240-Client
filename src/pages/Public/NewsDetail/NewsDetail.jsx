import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import style from './styles/NewsDetail.module.scss';

import fetchApi from '../../../axios/axios';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentNew, setCurrentNew] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;
    const getNew = async (id) => {
      setLoading(true);
      try {
        const { data } = await fetchApi({ method: 'get', url: `/news/${id}` });
        isMounted && setCurrentNew(data);
      } catch (err) {
        isMounted && setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getNew(id);

    return () => (isMounted = false);
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <article className={style.container}>
          <img src={`${currentNew.image}`} alt='' />
          <div>
            <h1>{currentNew.name}</h1>
            <div
              className={style.content}
              dangerouslySetInnerHTML={{ __html: currentNew.content }}></div>
            <button onClick={() => navigate('/')}>Ir al inicio</button>
          </div>
        </article>
      )}
    </>
  );
};

export default NewsDetail;
