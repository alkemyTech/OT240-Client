import Swal from 'sweetalert2';

const showAlert = () => {
  Swal.fire({
    title: 'Estás seguro?',
    text: "Esta es una alerta de confirmación.",
    icon: 'info',
    showCancelButton: true,
  });
};

export default showAlert;
