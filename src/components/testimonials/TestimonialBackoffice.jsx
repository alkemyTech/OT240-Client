import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles/testimonialBackoffice.module.scss';
import Table from '../Table/Table';
import { Loader } from '../loader/Loader';
import { fetchTestimonial } from '../../redux/actions/testimonial.action';
import showAlert from '../../services/alert';

export const TestimonialBackoffice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.testimonial);

  React.useEffect(() => {
    dispatch(fetchTestimonial({ url: '/testimonials' }));
  }, [dispatch]);

  const handleEdit = (fields) => {
    const { name, content, image, id } = fields;
    navigate('editar', {
      state: {
        id,
        title: 'Editar Testimonio',
        fields: { name, content, image },
        options: { method: 'put', url: `/testimonials/${id}` },
        from: location,
      },
    });
  };

  const handleDelete = async (fields) => {
    const result = await showAlert(
      {
        title: `Borrar el testimonio de "${fields.name}"?`,
        text: `Esta operación no puede deshacerse!`,
        icon: 'warning',
      },
      {
        showCancelButton: true,
        iconColor: 'red',
      }
    );
    if (result.isConfirmed) {
      dispatch(fetchTestimonial({ url: `/testimonials/${fields.id}`, method: 'delete' }));
    }
  };

  const handleAdd = () => {
    navigate('crear', {
      state: {
        title: 'Crear Testimonio',
        options: { method: 'post', url: `/testimonials` },
        from: location,
        fields: { name: '', image: '', content: '' },
      },
    });
  };

  return (
    <div className={styles.container}>
      <h1 className='backofficeTableHeader'>Administrar Testimonios</h1>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : entries.length ? (
        <Table
          title='Testimonios'
          tableHeader={['Titulo', 'Contenido']}
          tableRowsData={entries}
          tableRowsProperties={['name', 'content']}
          buttons={[
            { title: 'Editar', handler: handleEdit, className: 'white' },
            { title: 'Eliminar', handler: handleDelete, className: 'orange' },
          ]}
          loading={loading}
          addBtnHandler={handleAdd}
        />
      ) : (
        <p className={styles.empty}>No se encontraron testimonios </p>
      )}
      <button className='addEntry' onClick={handleAdd}>
        Agregar Testimonio
      </button>
    </div>
  );
};
