import { AUTH, DELETE_USER, LOGOUT, USER_INFO, USER_UPDATE_NAME } from '../constants/actions';

// handle user actions
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, errors: null };
    case LOGOUT:
      localStorage.removeItem('profile');
      return { ...state, authData: null, errors: null };
    case USER_INFO: