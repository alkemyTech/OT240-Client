import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import styles from './styles/testimonialBackoffice.module.scss';
import Table from '../Table/Table';
import { Loader } from '../loader/Loader';
import { fetchTestimonial } from '../../redux/actions/testimonial.action';

export const TestimonialBackoffice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //const [testimonials, setTestimonials] = React.useState([]);
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
    const result = await Swal.fire({
      title: `Borrar testimonio ${fields.name.replace(/\W/, '')}?`,
      text: `Esta operación no puede deshacerse!`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      iconColor: 'red',
    });
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
    </div>
  );
};
