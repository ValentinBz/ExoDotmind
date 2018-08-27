import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';
import App from './components/App';
import reducers from './reducers';
import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/sagaTotalList";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['HistoryTab'],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
let persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
      <PersistGate persistor={persistor}>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
      </PersistGate>
    , document.querySelector('#root'));
