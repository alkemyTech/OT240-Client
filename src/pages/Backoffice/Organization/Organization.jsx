import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import style from './styles/Organization.module.scss';

import Form from '../../../components/Form/Form';
import Table from '../../../components/Table/Table';

import fetchApi from '../../../axios/axios';
import { handleEdit, handleDelete, handleCreate } from '../../../utils/formsHandlers';

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
        element={<OrganizationCard org={organization[0]} handleEdit={editHandler} />}
      />
    </Routes>
  );
};

function OrganizationCard({ org, handleEdit }) {
  return (
    <div className={style.container}>
      <div>
        <article>
          <span className={style.header}> Logo </span>
          <img className={style.content} src={org?.image} alt='' />
          <span className={style.header}> Organización </span>
          <span className={style.content}> {org?.name}</span>
          <span className={style.header}> Descripción </span>
          <span className={style.content}> {org?.welcomeText}</span>
          <span className={style.header}> Dirección </span>
          <span className={style.content}> {org?.address}</span>
          <span className={style.header}> Teléfono </span>
          <span className={style.content}> {org?.phone}</span>
          <span className={style.header}> Intagram </span>
          <span className={style.content}> {org?.instagram}</span>
          <span className={style.header}> Facebook </span>
          <span className={style.content}> {org?.facebook}</span>
          <span className={style.header}> Linkedin </span>
          <span className={style.content}> {org?.linkedin}</span>
        </article>
        <button className={style.button} onClick={handleEdit}>
          Editar
        </button>
      </div>
    </div>
  );
}

export default Organization;
