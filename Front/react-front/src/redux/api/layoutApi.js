import {postAxios} from '../../utils/methode';
import {API} from '../../utils';


export function postNewUsersApi(value, headers) {
    return postAxios(`${API}/users`, value, headers)
}

export function loginUserApi(value) {
    return postAxios(`${API}/users/login`, value);
}