import fetchApi from '../axios/axios';
import showAlert from '../services/alert';

export const handleEdit = async (navigate, state) => {
  navigate('editar', {
    state,
  });
};

export const handleCreate = async (navigate, state) => {
  navigate('crear', {
    state,
  });
};

export const handleDelete = async (navigate, { type, id, name, url }) => {
  showAlert(
    {
      title: `Desea borrar "${name}" de ${type}?`,
      text: `Esta operación no puede deshacerse!`,
      icon: 'warning',
    },
    {
      showCancelButton: true,
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      iconColor: 'red',
      // toast: true
    }
  ).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const { data } = await fetchApi({ method: 'delete', url });
        if (type === 'usuario') {
          sessionStorage.removeItem('token');
        }
        window.location.reload();
      } catch (err) {
        window.alert(err);
      }
    }
  });
};
