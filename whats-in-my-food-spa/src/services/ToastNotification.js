import { toast } from 'material-react-toastify';

class ToastNotification {

    static showInfoMessage = (position, message) => {
        toast.info(message, {
            position: position,
            autoClose: 3000,
            closeOnClick: true
          });
    }

    static showSuccessMessage = (position, message) => {
        toast.success(message, {
            position: position,
            autoClose: 3000,
            closeOnClick: true
          });
    }

    static showWarningMessage = (position, message) => {
        toast.warn(message, {
            position: position,
            autoClose: 3000,
            closeOnClick: true
          });
    }

    static showErrorMessage = (position, message) => {
        toast.error(message, {
            position: position,
            autoClose: 3000,
            closeOnClick: true
          });
    }

    static showDarkMessage = (position, message) => {
        toast.dark(message, {
            position: position,
            autoClose: 3000,
            closeOnClick: true
          });
    }
}

export default ToastNotification;
