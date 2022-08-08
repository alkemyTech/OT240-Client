import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import style from './styles/NewsDetail.module.scss';

import fetchApi from '../../../axios/axios';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentNew, setCurrentNew] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let isMounted = true;
    const getNew = async (id) => {
      try {
        const { data } = await fetchApi({ method: 'get', url: `/news/${id}` });
        isMounted && setCurrentNew(data);
      } catch (err) {
        isMounted && setError(err.message);
      }
    };

    getNew(id);

    return () => (isMounted = false);
  }, []);

  return (
    <>
      {currentNew && (
        <article className={style.container}>
          <img src={`http://localhost:3000/img/news/${currentNew.image}`} alt='' />
          <div>
            <h1>{currentNew.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: currentNew.content }}></p>
            <button onClick={() => navigate('/')}>Ir al inicio</button>
          </div>
        </article>
      )}
    </>
  );
};

export default NewsDetail;
