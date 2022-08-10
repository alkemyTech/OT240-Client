import React from 'react';
import style from './styles/RedesIcons.module.scss';
import FacebookIcon from './assets/facebook.png';
import WhatsappIcon from './assets/whatsapp.png';
import InstagramIcon from './assets/instagram.png';
import MailIcon from './assets/gmail.png';
import { useEffect } from 'react';

const RedesIcons = () => {
  fetchSocialMediaLinks().then(console.log);
  useEffect(() => {});

  return (
    <div className={style.socialMedia}>
      <a href={'mailto:somosfundacionmas@gmail.com'}>
        <img src={MailIcon} alt='mail_icon' />
      </a>
      <a href={'https://www.instagram.com/SomosMas/'}>
        <img src={InstagramIcon} alt='instagram_icon' />
      </a>
      <a href={'https://www.facebook.com/Somos_Mas/'}>
        <img src={FacebookIcon} alt='facebook_icon' />
      </a>
      <a href={'https://wa.link/eb1d6x'}>
        <img src={WhatsappIcon} alt='whatsapp_icon' />{' '}
      </a>
    </div>
  );
};

//This fetch implementation should be replaced with corresponding Axios instance / API Service
async function fetchSocialMediaLinks() {
  try {
    const response = await fetch(`http://${window.location.hostname}:3000/api/organization/public`);
    const jsonResponse = await response.json();
    const { instagram, linkedin, facebook } = jsonResponse;
    return { instagram, linkedin, facebook };
  } catch (error) {
    console.log(error);
  }
}
export default RedesIcons;
