import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './styles/NewsDetail.module.scss';
import { getNew } from '../../../redux/actions/news.actions';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entrie, error, loading } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(getNew({ method: 'get', url: `/news/${id}` }));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <></>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <article className={style.container}>
          <img src={`${entrie.image}`} alt='' />
          <div>
            <h1>{entrie.name}</h1>
            <div
              className={style.content}
              dangerouslySetInnerHTML={{ __html: entrie.content }}></div>
            <button onClick={() => navigate('/')}>Ir al inicio</button>
          </div>
        </article>
      )}
    </>
  );
};

export default NewsDetail;
