import Swal from 'sweetalert2';

/**
 * Fires a Swal alert.
 *
 * @param {{
 *    title: string,
 *    text: string,
 *    icon: 'success' | 'error'	| 'warning'	| 'info' | 'question'
 *  }} config -

 * @param {object} extraParams - Any valid sweetalert2 fire() arguments.
 */

const showAlert = ({ title, text, icon }, extraParams = {}) => {
  Swal.fire({
    title,
    text,
    icon,
    ...extraParams,
  });
};

export default showAlert;
