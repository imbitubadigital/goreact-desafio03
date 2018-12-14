import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';
import toastMiddleware from '../middlaware/index';

const middleware = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);
middleware.push(toastMiddleware);

const createAproprieteStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAproprieteStore(reducers, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(sagas);
export default store;
