import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/NewsDetail.module.scss';
import { getNew, cleanNew } from '../../../redux/actions/news.actions';
import { Loader } from '../../../components/loader/Loader';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entrie, error, loading } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(getNew({ method: 'get', url: `/news/${id}` }));
    return () => {
      dispatch(cleanNew({}));
    };
  }, [dispatch, id]);

  return (
    <article className={style.container}>
      {loading ? (
        <div className={style.loader}>
          <Loader />
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <img src={`${entrie.image}`} alt='' />
          <div>
            <h1>{entrie.name}</h1>
            <div
              className={style.content}
              dangerouslySetInnerHTML={{ __html: entrie.content }}></div>
            <button onClick={() => navigate('/')}>Ir al inicio</button>
          </div>
        </>
      )}
    </article>
  );
};

export default NewsDetail;
