import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import layout from './layoutReducer';
import users from './usersReducer';
import students from './studentReducer';
import drivers from './driverReducer';
import transport from './transportReducer';
import paiement from './paiementReducer'

const rootReducers = combineReducers({
    layout,
    users,
    students,
    drivers,
    transport,
    paiement,
    form: formReducer,
    routing: routerReducer
});

export default rootReducers;