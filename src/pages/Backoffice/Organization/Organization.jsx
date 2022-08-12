import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
        element={
          <Table
            title='Organización'
            tableHeader={[
              'Nombre',
              'Teléfono',
              'Dirección',
              'Texto de Bienvenida',
              'Facebook',
              'Linkedin',
              'Instagram',
              'Imagen',
            ]}
            tableRowsData={organization}
            tableRowsProperties={[
              'name',
              'phone',
              'address',
              'welcomeText',
              'facebook',
              'linkedin',
              'instagram',
              'image',
            ]}
            buttons={[{ title: 'Editar', handler: editHandler, className: 'orange' }]}
            loading={loading}
            isOrganization={location.pathname.includes('organizacion')}
          />
        }
      />
    </Routes>
  );
};

export default Organization;
