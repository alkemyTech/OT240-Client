import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAcivities } from '../../redux/actions/activity.action';
import Swal from 'sweetalert2';

export const ActivitiesBackoffice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //const [activities, setActivities] = React.useState([]);
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.activity);

  React.useEffect(() => {
    dispatch(fetchAcivities({ url: '/activities' }));
  }, [dispatch]);

  const handleEdit = (fields) => {
    const { name, content, image, id } = fields;
    navigate('editar', {
      state: {
        id,
        title: 'Editar Actividad',
        fields: { name, content, image },
        options: { method: 'put', url: `/activities/${id}` },
        from: location,
      },
    });
  };

  const handleDelete = async (fields) => {
    const result = await Swal.fire({
      title: `Borrar actividad ${fields.name.replace(/\W/, '')}?`,
      text: `Esta operación no puede deshacerse!`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      iconColor: 'red',
    });
    if (result.isConfirmed) {
      dispatch(fetchAcivities({ url: `/activities/${fields.id}`, method: 'delete' }));
    }
  };

  const handleAdd = () => {
    navigate('crear', {
      state: {
        title: 'Crear Actividad',
        options: { method: 'post', url: `/activities` },
        from: location,
        fields: { name: '', image: '', content: '' },
      },
    });
  };

  return (
    <Table
      title='Actividades'
      tableHeader={['Titulo', 'Fecha']}
      tableRowsData={entries}
      tableRowsProperties={['name', 'createdAt']}
      buttons={[
        { title: 'Editar', handler: handleEdit, className: 'white' },
        { title: 'Eliminar', handler: handleDelete, className: 'orange' },
      ]}
      loading={loading}
      addBtnHandler={handleAdd}
    />
  );
};
