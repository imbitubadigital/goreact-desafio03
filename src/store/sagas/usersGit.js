import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/usersGit';
import { Creators as ToastActions, Types as ToastTypes } from '../ducks/toast';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `users/${action.payload.user.inputText}`);

    const isDuplicated = yield select(state => state.usersGit.data.find(g => g.id === data.id));

    if (isDuplicated) {
      yield put(UsersActions.addUserGitFailure('Usuário duplicado'));
    } else {
      const usersData = {
        id: data.id,
        login: data.login,
        name: data.name,
        url: data.html_url,
        latitude: action.payload.user.longitude,
        longitude: action.payload.user.latitude,
        avatar_url: data.avatar_url,
        isDel: false,
      };
      yield put(UsersActions.addUserGitSuccess(usersData));
      yield put(ToastActions.toastify('Usuário adicionado com sucesso!', ToastTypes.SUCCESS));
    }
  } catch (err) {
    yield put(UsersActions.addUserGitFailure('Erro ao adicionar usuário'));
  }
}

export function* questionRemove(action) {
  try {
    const usersData = yield select(state => (
      state.usersGit.data.map(s => (
        s.id === action.payload.id ? { ...s, isDel: true } : { ...s }))));
    yield put(UsersActions.questionRemoveShow(usersData));
  } catch (err) {
    yield put(UsersActions.addUserGitFailure('Erro ao adicionar usuário'));
  }
}

export function* cancelQuestionDelUser(action) {
  try {
    const usersData = yield select(state => (
      state.usersGit.data.map(s => (
        s.id === action.payload.id ? { ...s, isDel: false } : { ...s }))));
    yield put(UsersActions.questionRemoveShow(usersData));
  } catch (err) {
    yield put(UsersActions.addUserGitFailure('Erro ao adicionar usuário'));
  }
}


export function* removeUser(action) {
  try {
    const usersData = yield select(state => (
      state.usersGit.data.filter(g => g.id !== action.payload.id)));
    yield put(UsersActions.removeUserGitSuccess(usersData));
  } catch (err) {
    yield put(UsersActions.addUserGitFailure('Erro ao adicionar usuário'));
  }
}
