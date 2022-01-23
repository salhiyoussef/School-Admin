import {
  GET_ALL_USERS,
  SET_EMAIL_USER_DETAIL,
  DELETE_USER,
  SWITCH_USER_ACTIF,
  SET_PAGINATE_NUMBER,
  SET_DATA_USER_IN_EDIT,
  PUT_USER
} from "../types/usersType";
import { actionCreator } from "../../utils";

const initState = {
  data: null,
  loading: false,
  error: false,
  total: 0,
  limit: 10,
  offset: 1,
  detail: {
    user: null,
    loading: false,
    error: false
  },
  editUser: {
    data: null,
    loading: false,
    error: false
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true
      };
    case actionCreator(GET_ALL_USERS, "res"):
      const {
        payload: { result, total }
      } = action;
      return {
        ...state,
        loading: false,
        error: false,
        data: result,
        total: total
      };
    case actionCreator(GET_ALL_USERS, "err"):
      return {
        ...state,
        loading: false,
        error: true,
        data: null,
        total: 0
      };
    case SET_EMAIL_USER_DETAIL:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true
        }
      };
    case actionCreator(SET_EMAIL_USER_DETAIL, "res"):
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          user: action.payload,
          error: false
        }
      };
    case actionCreator(SET_EMAIL_USER_DETAIL, "err"):
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          user: null,
          error: true
        }
      };
    case DELETE_USER:
      return {
        ...state,
        detail: {
          ...state.detail,
          user: null,
          loading: true
        }
      };
    case SWITCH_USER_ACTIF:
      return {
        ...state,
        detail: {
          ...state.detail,
          user: action.payload,
          loading: false
        }
      };
    case SET_PAGINATE_NUMBER:
      return {
        ...state,
        offset: action.page
      };
    case SET_DATA_USER_IN_EDIT:
      return {
        ...state,
        editUser: {
          ...state.editUser,
          data: action.payload
        }
      };
    case PUT_USER:
        return {
            ...state,
            editUser: {
                ...state.editUser,
                loading: true,
            }
        }
    case actionCreator(PUT_USER, 'res'):
        return {
            ...state,
            editUser: {
                ...state.editUser,
                loading: false,
            }
        }
    default:
      return state;
  }
}
