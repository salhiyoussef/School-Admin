import {
  SET_INDEX_PAGE_CURRENT,
  SET_COLLAPSED,
  SET_SUB_MENU_CURRENT,
  POST_NEW_USERS_DATA,
  SET_TOKEN_USER,
  LOGIN_USERS,
  SET_ERROR_LOGIN,
  LOGOUT_USER,
  RESET_LAYOUT,
} from "../types/layoutType";

const initState = {
  defaultSelectedKeys: 1,
  collapsed: false,
  defaultOpenKeys: null,
  postUser: null,
  login: {
    token: null,
    loading: false,
    user: null
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case SET_COLLAPSED:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    case SET_INDEX_PAGE_CURRENT:
      return {
        ...state,
        defaultSelectedKeys: action.index
      };
    case SET_SUB_MENU_CURRENT:
      return {
        ...state,
        defaultOpenKeys: action.menu
      };
    case POST_NEW_USERS_DATA:
      return {
        ...state,
        postUser: action.user
      };
    case LOGIN_USERS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true
        }
      };
    case SET_TOKEN_USER:
      const {payload:{tokenData:{token, type}, user}} = action;
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          token: `${type} ${token}`,
          user: user,
        }
      };
    case SET_ERROR_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false
        }
      };
    case LOGOUT_USER:
      return {
        ...state,
        login: {
          token: null,
          user: null,
        }
      }
    case RESET_LAYOUT:
      return {
        ...initState
      }
    default:
      return state;
  }
}
