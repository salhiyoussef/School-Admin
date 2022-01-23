/* eslint-disable no-irregular-whitespace */
import axios from 'axios';
import queryString from 'query-string';
import { forEach } from 'lodash';
import { Cookie } from './index';
/**
 * Get token from cookie and set inside headers
 * @param {*} headers
 */
function getToken(headers) {
    if (!Cookie.get('token')) {
        return {
            ...headers,
        };
    }
    return {
        Authorization: `${Cookie.get('type')} ${Cookie.get('token')}`,
        ...headers,
    };
}

/**
 * Return Axios of method GET
 * @param {string} url Url of ajax
 * @param {object} data Params of ajax
 * @author SOUADI Yassine
 */
/* export function get(url, data, headers) {
    return fetch(`${url}?${queryString.stringify(data)}`, {
        method: 'GET',
        headers: getToken(headers || { 'Content-Type': 'application/json' }),
        mode: 'cors',
    });
} */
export function get(url, data, headers) {
    return axios({
        url: `${url}${data ? `?${queryString.stringify(data)}` : ''}`,
        method: 'get',
        headers: getToken(headers || { 'Content-Type': 'application/json' }),
        // headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: Authorizations,
        // },
    });
}

export function postAxios(url, data, headers) {
    return axios({
        url: url,
        method: 'post',
        headers: getToken(headers || { 'Content-Type': 'application/json' }),
        // headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: Authorizations,
        // },
        data: JSON.stringify(data),
    });
}

/* GET WITH FILTER */
export function getFilter(url, headers) {
    return fetch(`${url}`, {
        method: 'GET',
        headers: getToken(headers || { 'Content-Type': 'application/json' }),
        mode: 'cors',
    });
}

/**
 * Return Fetch of method POST
 * @param {string} url Url of ajax
 * @param {object} data Params of ajax
 * @author SOUADI Yassine
 */
export function post(url, data, headers, mode = 'cors') {
    return fetch(url, {
        method: 'POST',
        headers: getToken(headers || { 'Content-Type': 'application/json' }),
        // headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: Authorizations,
        // },
        mode,
        body: JSON.stringify(data),
    });
}

/**
 * Return Fetch of method POST
 * @param {string} url Url of ajax
 * @param {object} data Params of ajax
 * @author SOUADI Yassine
 */
export function postForm(url, data, headers) {
    return fetch(url, {
        method: 'POST',
        headers: getToken(headers),
        body: data,
    });
}

/**
 * Return Fetch of method POST
 * @param {string} url Url of ajax
 * @param {object} data Params of ajax
 * @author SOUADI Yassine
 */
export function putForm(url, data, headers) {
    return fetch(url, {
        method: 'PUT',
        headers,
        mode: 'cors',
        body: data,
    });
}

/**
 * Return Fetch of method POST, it send data in FormDATA with credentials include
 * @param {string} method Method of ajax (post | put)
 * @param {string} url Url of ajax
 * @param {object} data Params of ajax
 * @author SOUADI Yassine
 */
export function postFormData(url, data, headers) {
    const formData = new FormData();

    forEach(data, (value, key) => {
        formData.append(key, value);
    });

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: getToken(headers),
        body: formData,
    });
}

/**
 * Return Fetch of method PUT
 * @param {string} url Url of ajax
 * @param {object} data Params of ajax
 * @author SOUADI Yassine
 */
export function put(url, data, headers) {
    return fetch(url, {
        method: 'PUT',
        headers: getToken(headers || { 'Content-Type': 'application/json' }),
        mode: 'cors',
        body: JSON.stringify(data),
    });
}

export function putFormData(url, data, headers) {
    const formData = new FormData();

    forEach(data, (value, key) => {
        formData.append(key, value);
    });

    return fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: getToken(headers),
        body: formData,
    });
}


/**
 * Return Fetch of method DELETE
 * @param {string} url Url of ajax
 * @param {object} data Params of ajax
 * @author SOUADI Yassine
 */
export function del(url, data, headers) {
    return fetch(url, {
        method: 'DELETE',
        headers: getToken(headers || { 'Content-Type': 'application/json' }),
        mode: 'cors',
        body: JSON.stringify(data),
    });
}