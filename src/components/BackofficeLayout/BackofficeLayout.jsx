import React from 'react';
import style from './styles/BackofficeLayout.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import BackofficeNavBar from '../BackofficeNavBar/BackofficeNavBar';
import BackofficeLinks from './BackofficeLinks/BackofficeLinks';

const BackofficeLayout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={style.backofficeLayout}>
      <div
        className={menuIsOpen ? `${style.lateralBar} ${style.extended}` : `${style.lateralBar} `}>
        <Hamburger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <BackofficeNavBar />
      </div>
    </div>
  );
};

export default BackofficeLayout;
