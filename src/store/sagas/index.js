import { all, takeLatest } from 'redux-saga/effects';
import { Types as UsersGit } from '../ducks/usersGit';
import {
  addUser, removeUser, questionRemove, cancelQuestionDelUser,
} from './usersGit';

export default function* rootSaga() {
  yield all([takeLatest(UsersGit.ADD_REQUEST, addUser)]);
  yield all([takeLatest(UsersGit.QUESTION_REMOVE_USER, questionRemove)]);
  yield all([takeLatest(UsersGit.CANCEL_QUESTION_REMOVE_USER, cancelQuestionDelUser)]);
  yield all([takeLatest(UsersGit.REMOVE_USER, removeUser)]);
}
