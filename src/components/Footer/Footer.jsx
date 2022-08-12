import React, { useEffect, useState } from 'react';
import style from './styles/Footer.module.scss';
import LogoFooter from '../LogoFooter/LogoFooter';
import Links from '../Links/Links';
import RedesIcons from '../RedesIcons/RedesIcons';
import fetchApi from '../FetchApi/FetchApi';

const Footer = () => {
  const [navigationItems, setNavigationItems] = useState([]);
  //Initializing the object with empty socialMediaLinks
  const [socialMediaLinks, setSocialMediaLinks] = useState({
    facebook: null,
    linkedin: null,
    instagram: null,
  });

  useEffect(() => {
    //obtener links desde endpoint de datos públicos o de algun store de redux y que se cargue al principio
    setNavigationItems([
      { text: 'Inicio', route: '/' },
      { text: 'Nosotros', route: '/nosotros' },
      { text: 'Novedades', route: '/news' },
      { text: 'Testimonios', route: '/testimonios' },
      { text: 'Contacto', route: '/contacto' },
      { text: 'Contribuye', route: '/contribuye' },
    ]);
    //Doing the socialMediaLinks fetching and storing it in the state
    (async () => {
      const socialMediaLinks = await fetchSocialMediaLinks();
      if (socialMediaLinks) setSocialMediaLinks(socialMediaLinks);
    })();
  }, []);

  return (
    <footer className={style.footer}>
      <LogoFooter />
      <Links navigationItems={navigationItems} />
      <RedesIcons socialMediaLinks={socialMediaLinks} />
      <p>2022 by Alkemy. All Rights Reserved.</p>
    </footer>
  );
};

//Fetches public organization data for social media links
async function fetchSocialMediaLinks() {
  try {
    const response = await fetchApi('/organization/public');
    const { instagram, linkedin, facebook } = response.data;
    return { instagram, linkedin, facebook };
  } catch (error) {
    console.log(error);
  }
}

export default Footer;
