import fetchApi from '../axios/axios';

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
  const confirmDelete = window.confirm(
    `Desea borrar la ${type} "${name}"?\nEsta operación no puede desacerse!`
  );
  if (confirmDelete) {
    try {
      const { data } = await fetchApi({ method: 'delete', url });
      window.location.reload();
    } catch (err) {
      window.alert(err);
    }
  }
};
