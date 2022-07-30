import Swal from 'sweetalert2';

const showAlert = ({ title, text, icon }) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};

export default showAlert;
