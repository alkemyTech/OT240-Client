import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/Banner.module.scss';

const Banner = ({ data }) => {
  //member tiene name, image
  return (
    <div className={style.container}>
      <div className={style.description}>
        <h2 className={style.title}>{data.name}</h2>
        <p>
          Somos Mas trabaja en más de 190 países y territorios para salvar las vidas de los niños.
          Para defender sus derechos. Para ayudarles a alcanzar su máximo potencial, de la infancia
          a la adolescencia. Y nunca nos rendimos.
        </p>
        <Link to='/' className={style.link}>
          ¡Quiero ser parte!
        </Link>
      </div>
      <div className={style.image} style={{ backgroundImage: `url(${data.image})` }}></div>
    </div>
  );
};

export default Banner;