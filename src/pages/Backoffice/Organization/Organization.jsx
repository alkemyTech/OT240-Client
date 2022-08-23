import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import styles from './styles/Organization.module.scss';

import Form from '../../../components/Form/Form';

import fetchApi from '../../../axios/axios';
import { Loader } from '../../../components/loader/Loader';

const Organization = () => {
  return (
    <Routes>
      <Route path='editar' element={<Form />} />
      <Route path='/' element={<OrganizationCard />} />
    </Routes>
  );
};

function OrganizationCard() {
  const location = useLocation();
  const navigate = useNavigate();

  const [organization, setOrganization] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getOrganization = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/organization/public' });
        isMounted && setOrganization(data[0]);
      } catch (err) {
        isMounted && setError(err.messsage);
      } finally {
        isMounted && setLoading(false);
      }
    };

    getOrganization();

    return () => (isMounted = false);
  }, []);

  const handleEdit = async (organization) => {
    const { name, phone, address, welcomeText, facebook, linkedin, instagram, image } =
      organization;
    navigate('editar', {
      state: {
        title: 'Editar Organización',
        fields: {
          name,
          phone,
          address,
          welcomeText,
          facebook,
          linkedin,
          instagram,
          image,
        },
        options: { method: 'put', url: `/organization` },
        from: location,
      },
    });
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : organization ? (
        <>
          <h1>Organización</h1>
          <div className={styles.body}>
            <article>
              <span className={styles.header}> Logo </span>
              <img className={styles.content} src={organization?.image} alt='' />
              <span className={styles.header}> Nombre </span>
              <span className={styles.content}> {organization?.name}</span>
              <span className={styles.header}> Descripción </span>
              <span className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: organization?.welcomeText } || ''}></div>
              </span>
              <span className={styles.header}> Dirección </span>
              <span className={styles.content}> {organization?.address}</span>
              <span className={styles.header}> Teléfono </span>
              <span className={styles.content}> {organization?.phone}</span>
              <span className={styles.header}> Intagram </span>
              <span className={styles.content}> {organization?.instagram}</span>
              <span className={styles.header}> Facebook </span>
              <span className={styles.content}> {organization?.facebook}</span>
              <span className={styles.header}> Linkedin </span>
              <span className={styles.content}> {organization?.linkedin}</span>
            </article>
            <button className={styles.button} onClick={() => handleEdit(organization)}>
              Editar
            </button>
          </div>
        </>
      ) : (
        <div className={styles.empty}>No se encontro detalles de la organizacion</div>
      )}
    </div>
  );
}

export default Organization;
