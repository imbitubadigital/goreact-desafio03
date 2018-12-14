import { toast } from 'react-toastify';
/**
 * Types
 */

export const Types = {
  SUCCESS: toast.TYPE.SUCCESS,
  ERROR: toast.TYPE.ERROR,
  ALERT: toast.TYPE.ALERT,
  BUILD: 'toast/BUILD',
};

/**
 * ACTIONS
 */

export const Creators = {
  toastify: (message, type) => ({
    type: Types.BUILD,
    toast: { message, type },
  }),
};
