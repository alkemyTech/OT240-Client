import React from 'react';
import style from './styles/Home.module.scss';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import NewsSlider from '../../../components/NewsSlider/NewsSlider';
import { Testimonials } from '../../../components/testimonials/Testimonials';
import NewsList from '../../../components/NewsList/NewsList';
import Members from '../Members/Members';
const Home = () => {
  return (
    <div>
      <NewsSlider />
      <div className={style.members}>
        <Members quantity={5} />
      </div>
      <div className={style.testimonials}>
        <Testimonials quantity={5} />
      </div>
      <div className={style.news}>
        <div className={style.newsHeader}>
          <h2 className={style.title}>Novedades</h2>
          <Link to='/novedades'>{`Ver mas >`}</Link>
        </div>
        <NewsList quantity={3} />
      </div>
    </div>
  );
};

export default Home;
