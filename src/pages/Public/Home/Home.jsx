import React from 'react';
import style from './styles/Home.module.scss';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Slider from '../../../components/Slider';
import { Testimonials } from '../../../components/testimonials/Testimonials';
import NewsList from '../../../components/NewsList/NewsList';
import slidesMock from '../../../slides.mock';
import Members from '../Members/Members';
const Home = () => {
  return (
    <div>
      <Slider slides={slidesMock} />
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
