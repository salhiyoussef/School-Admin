import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from '../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['layout'],
    // transforms: [saveSubsetFilter],
};

export default function configureStore(initialState) {
    const persistedReducer = persistReducer(persistConfig, rootReducers);
    const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
            module.hot.accept('../reducers', () => {
                const nextRootReducer = require('../reducers');
                store.replaceReducer(nextRootReducer);
            });
        }
    
    return {store, persistor } ;
}

const { store, persistor } = configureStore();

export {
    store,
    history,
    persistor,
};