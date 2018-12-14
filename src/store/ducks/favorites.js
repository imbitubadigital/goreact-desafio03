/**
 * Types
 */
export const Types = { 
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  statusModal: false,
  data: [
    {
      id: 1,
      latitude: -23.5439948,
      longitude: -46.6065452,
      name: 'Outro do Dev',
      login: 'esselogin234',
      image: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
    },
    {
      id: 1,
      latitude: -24.5439948,
      longitude: -46.6065452,
      name: 'Nome do Dev',
      login: 'esselogin234',
      image: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
    },
  ],
  error: null,
};
export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };

    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}
/**
 * Actions
 */
export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
