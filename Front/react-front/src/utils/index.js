import { notification } from 'antd';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import logos from '../assets/img/logo.jpg'

export function actionCreator(action, status) {
    switch (status) {
        case 'res':
            return `${action}_SUCCES`;
        case 'err':
            return `${action}_FAILED`;
        default:
            return action;
    }
}
// export const logo = 'http://cdn.teachhub.com/sites/default/files/field/image/back-to-school.jpg';
export const logo = logos;
export const API = 'http://localhost:5000/api';

export function openNotification(type, message) {
    notification[type]({
        message: message
      });
}

export const Cookie = new Cookies();

export function checkExpire() {
    const token = Cookie.get('token');
    if (!token) {
        return true;
    }
    const decoded = jwtDecode(token);
    const expireIn = new Date();
    expireIn.setSeconds(decoded.exp);

    if (decoded.exp < new Date().getTime() / 1000) {
        Cookie.remove('token');
        Cookie.remove('type');
        openNotification('error', 'Account has expired');
        return true;
    }
    return false;
}

export function nameLogo(lastName, firstName) {
    return  `${lastName.charAt(0)} ${firstName.charAt(0).toUpperCase()}`;
}