import {
  SET_INDEX_PAGE_CURRENT,
  SET_PAGE_CURRENT,
  SET_COLLAPSED,
  SET_SUB_MENU_CURRENT,
  POST_NEW_USERS,
  POST_NEW_USERS_DATA,
  LOGIN_USERS,
  SET_TOKEN_USER,
  SET_ERROR_LOGIN,
  LOGOUT_USER,
  RESET_LAYOUT
} from "../types/layoutType";

export function setPageCurrent(pages) {
  return {
    type: SET_PAGE_CURRENT,
    pages
  };
}

export function setIndexPageCurrent(index) {
  return {
    type: SET_INDEX_PAGE_CURRENT,
    index
  };
}

export function setCollapsed() {
  return {
    type: SET_COLLAPSED
  };
}

export function setSubMenuActive(menu) {
  return {
    type: SET_SUB_MENU_CURRENT,
    menu
  };
}

export function postNewUsers(value) {
  return {
    type: POST_NEW_USERS,
    value
  };
}

export function postNewUsersData(user) {
  return {
    type: POST_NEW_USERS_DATA,
    user
  };
}

export function loginUser(value) {
  return {
    type: LOGIN_USERS,
    value
  };
}

export function setTokenUser(payload) {
  return {
    type: SET_TOKEN_USER,
    payload
  };
}

export function setErrorLogin() {
  return {
    type: SET_ERROR_LOGIN
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

export function restLayout() {
  return {
    type: RESET_LAYOUT
  };
}
