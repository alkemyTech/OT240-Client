import Swal from 'sweetalert2';
import styles from './alert.module.scss';

/**
 * Fires a Swal alert.
 *
 * @param {{
 *    title: string,
 *    text: string,
 *    icon: 'success' | 'error'	| 'warning'	| 'info' | 'question'
 *  }} config -

 * @param {object} extraConfig - Object with any valid sweetalert2 fire() arguments.
 */

const showAlert = ({ title, text, icon }, extraParams = {}) => {
  return Swal.fire({
    title,
    text,
    icon,
    customClass: {
      cancelButton: styles.cancelButton,
      confirmButton: styles.confirmButton,
      title: styles.title,
      container: styles.container,
    },
    buttonsStyling: false,
    ...extraParams,
  });
};

export default showAlert;
