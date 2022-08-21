import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles/MembersTable.module.scss';
import { deleteMember } from '../../../../redux/actions/member.actions';
import Table from '../../../../components/Table/Table';
import { Loader } from '../../../../components/loader/Loader';
import { loadMembers } from '../../../../redux/actions/member.actions';
import showAlert from '../../../../services/alert';

const MembersTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { members, loading, error } = useSelector((state) => state.members);

  const handleDelete = async (fields) => {
    const result = await showAlert(
      {
        title: `Borrar miembro "${fields.name}"?`,
        text: `Esta operación no puede deshacerse!`,
        icon: 'warning',
      },
      {
        showCancelButton: true,
        iconColor: 'red',
      }
    );
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

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : members.length ? (
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
      ) : (
        <div className={styles.empty}>No se encontraron miembros</div>
      )}
    </div>
  );
};

export default MembersTable;
