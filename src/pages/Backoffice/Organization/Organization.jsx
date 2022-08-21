import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import styles from './styles/Organization.module.scss';

import Form from '../../../components/Form/Form';

import fetchApi from '../../../axios/axios';
import { handleEdit } from '../../../utils/formsHandlers';
import { Loader } from '../../../components/loader/Loader';

const Organization = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [organization, setOrganization] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getOrganization = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/organization/public' });
        isMounted && setOrganization(data);
      } catch (err) {
        isMounted && setError(err.messsage);
      } finally {
        isMounted && setLoading(false);
      }
    };
    getOrganization();

    return () => (isMounted = false);
  }, []);

  const editHandler = async (tableRow) => {
    const { name, phone, address, welcomeText, facebook, linkedin, instagram, image } = tableRow;
    handleEdit(navigate, {
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
    });
  };

  return (
    <Routes>
      <Route path='/editar' element={<Form />} />
      <Route
        path='/'
        element={
          <OrganizationCard
            org={organization[0]}
            handleEdit={editHandler}
            error={error}
            loading={loading}
          />
        }
      />
    </Routes>
  );
};

function OrganizationCard({ org, handleEdit, error, loading }) {
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : org ? (
        <>
          <h1>Organización</h1>
          <div className={styles.body}>
            <article>
              <span className={styles.header}> Logo </span>
              <img className={styles.content} src={org?.image} alt='' />
              <span className={styles.header}> Nombre </span>
              <span className={styles.content}> {org?.name}</span>
              <span className={styles.header}> Descripción </span>
              <span className={styles.content}> {org?.welcomeText}</span>
              <span className={styles.header}> Dirección </span>
              <span className={styles.content}> {org?.address}</span>
              <span className={styles.header}> Teléfono </span>
              <span className={styles.content}> {org?.phone}</span>
              <span className={styles.header}> Intagram </span>
              <span className={styles.content}> {org?.instagram}</span>
              <span className={styles.header}> Facebook </span>
              <span className={styles.content}> {org?.facebook}</span>
              <span className={styles.header}> Linkedin </span>
              <span className={styles.content}> {org?.linkedin}</span>
            </article>
            <button className={styles.button} onClick={() => handleEdit(org)}>
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
