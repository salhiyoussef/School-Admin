import { get, del, postAxios, put } from "../../utils/methode";
import { API } from "../../utils";

export function getAllUsersApi(prams, headers) {
  return get(`${API}/users`, prams, headers);
}

export function getUserEmail(email, headers) {
  return get(`${API}/users/${email}`, headers);
}

export function deleteUserApi(id, headers) {
    return del(`${API}/users/${id}`, headers);
}

export function postNewUsersApi(value, headers) {
    return postAxios(`${API}/users`, value, headers)
}

export function putUserApi(params, data, headers){
    const {id} = params;
    return put(`${API}/users/${id}`, data, headers);
}