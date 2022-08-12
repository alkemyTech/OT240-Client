import React from 'react';
import style from './styles/RedesIcons.module.scss';
import FacebookIcon from './assets/facebook.png';
import WhatsappIcon from './assets/whatsapp.png';
import InstagramIcon from './assets/instagram.png';
import MailIcon from './assets/gmail.png';

const RedesIcons = ({ socialMediaLinks }) => {
  const { facebook, instagram, linkedin } = socialMediaLinks;
  return (
    <div className={style.socialMedia}>
      <a href={'mailto:somosfundacionmas@gmail.com'}>
        <img src={MailIcon} alt='mail_icon' />
      </a>
      <a href={instagram || 'https://www.instagram.com/SomosMas/'}>
        <img src={InstagramIcon} alt='instagram_icon' />
      </a>
      <a href={facebook || 'https://www.facebook.com/Somos_Mas/'}>
        <img src={FacebookIcon} alt='facebook_icon' />
      </a>
      <a href={linkedin || 'https://wa.link/eb1d6x'}>
        <img src={WhatsappIcon} alt='whatsapp_icon' />{' '}
      </a>
    </div>
  );
};

export default RedesIcons;
