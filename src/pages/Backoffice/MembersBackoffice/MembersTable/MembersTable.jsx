import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMember } from '../../../../redux/actions/member.actions';
import Table from '../../../../components/Table/Table';
import { loadMembers } from '../../../../redux/actions/member.actions';
import Swal from 'sweetalert2';

const MembersTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { members, loading, error } = useSelector((state) => state.members);

  const handleDelete = async (fields) => {
    const result = await Swal.fire({
      title: `Borrar miembro ${fields.name.replace(/\W/, '')}?`,
      text: `Esta operación no puede deshacerse!`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      iconColor: 'red',
    });
    if (result.isConfirmed) {
      dispatch(deleteMember({ url: `/members/${fields.id}`, method: 'delete' }));
    }
  };

  const handleEdit = async (fields) => {
    const { name, image, id } = fields;
    navigate('editar', {
      state: {
        title: 'Editar Miembro',
        fields: { name, image },
        options: { method: 'put', url: `/members/${id}` },
        from: location,
      },
    });
  };

  const handleCreate = async () => {
    navigate('crear', {
      state: {
        title: 'Ingresar Miembro',
        options: { method: 'post', url: `/members` },
        from: location,
        fields: { name: '', image: '' },
      },
    });
  };

  useEffect(() => {
    dispatch(loadMembers({ method: 'get', url: '/members' }));
  }, [dispatch]);

  return error ? (
    <p>Algo salió mal..</p>
  ) : (
    <Table
      title='Miembros'
      tableHeader={['Nombre']}
      tableRowsData={members}
      tableRowsProperties={['name']}
      buttons={[
        { title: 'Editar', handler: handleEdit, className: 'white' },
        { title: 'Eliminar', handler: handleDelete, className: 'orange' },
      ]}
      loading={loading}
      addBtnHandler={handleCreate}
    />
  );
};

export default MembersTable;
