/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
  OPEN_MODAL: 'favorites/OPEN_MODAL',
  CLOSE_MODAL: 'favorites/CLOSE_MODAL',
  REMOVE_USER: 'favorites/REMOVE_USER',
  QUESTION_REMOVE_USER: 'favorites/QUESTION_REMOVE_USER',
  QUESTION_REMOVE_USER_SHOW: 'favorites/QUESTION_REMOVE_USER_SHOW',
  CANCEL_QUESTION_REMOVE_USER: 'favorites/CANCEL_QUESTION_REMOVE_USER',
  REMOVE_SUCCESS: 'favorites/REMOVE_SUCCESS',
  EMPTY_ERROR: 'favorites/EMPTY_ERROR',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  modalIsOpen: false,
  showDel: false,
  data: [],
  error: null,
};
export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };

    case Types.OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: action.payload.openIsModal,
      };

    case Types.CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: action.payload.openIsModal,
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        modalIsOpen: false,
        error: null,
        data: [...state.data, action.payload.data],
      };

    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalIsOpen: false,
        error: null,
        data: action.payload.data,
      };

    case Types.QUESTION_REMOVE_USER_SHOW:
      return { ...state, data: action.payload.data };

    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.REMOVE_USER:
      return { ...state, loading: true };

    case Types.EMPTY_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
}
/**
 * Actions
 */
export const Creators = {
  addUserGit: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
    // chama a função ADD_REQUEST do no index do Saga chamando a função addUser do userGit do Saga
  }),

  openModal: () => ({
    type: Types.CLOSE_MODAL,
    payload: { openIsModal: true },
  }),

  emptyError: () => ({
    type: Types.EMPTY_ERROR,
  }),

  closeModal: () => ({
    type: Types.OPEN_MODAL,
    payload: { openIsModal: false },
  }),

  addUserGitSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  removeUserGitSuccess: data => ({
    type: Types.QUESTION_REMOVE_USER_SHOW,
    payload: { data },
  }),

  questionRemoveShow: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data },
  }),

  addUserGitFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  /** chama a função midlleware do saga ( questionRemove ) */
  questionDelUser: id => ({
    type: Types.QUESTION_REMOVE_USER,
    payload: { id },
  }),

  /** chama a função midlleware do saga ( cancelQuestionDelUser ) */
  cancelQuestionDelUser: id => ({
    type: Types.CANCEL_QUESTION_REMOVE_USER,
    payload: { id },
  }),
  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id },
  }),
};
