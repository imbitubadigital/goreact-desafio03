import { toast } from 'react-toastify';

const toastMiddleware = () => next => (action) => {
  if (action.toast) {
    toast(action.toast.message, {
      type: action.toast.type,
      position: toast.POSITION.TOP_RIGTH,
    });
  }

  return next(action);
};

export default toastMiddleware;
