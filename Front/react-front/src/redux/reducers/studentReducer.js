import {
  RESET_FORM_STUDENTS,
  // =============  T Y P E S   F O R   A D D   S T U D E N T S  // ===========
  GET_LEVEL,
  SHOW_MODAL_LEVEL,
  CLOSE_MODAL_LEVEL,
  POST_LEVEL,
  GET_CLASS,
  SHOW_MODAL_CLASS,
  CLOSE_MODAL_CLASS,
  POST_CLASS,
  GET_SECTION,
  SHOW_MODAL_SECTION,
  CLOSE_MODAL_SECTION,
  SET_DATA_STUDENT_IN_EDIT,
  POST_SECTION,
  // =============  T Y P E S   F O R   A D D   S T U D E N T S  // ===========
  GET_ALL_STUDENTS,
  PUT_STUDENT,
  SET_PAGINATE,
  SET_EMAIL_STUDENT_DETAIL,
  
} from "../types/studentType";
import { actionCreator } from "../../utils";

const initState = {
  level: {
    data: null,
    loading: false,
    error: false,
    visible: false,
    dataNewLevel: null
  },
  classSchool: {
    data: null,
    loading: false,
    error: false,
    visible: false,
    dataNewClass: null
  },
  section: {
    data: null,
    loading: false,
    error: false,
    visible: false,
    dataNewSection: null
  },
  detail: {
    student: null,
    loading: false,
    error: false
  },
  editStudent: {
    data: null,
    loading: false,
    error: false
  },
  data: null,
  loading: false,
  error: false,
  limit: 10,
  offset: 1
};

export default function StudentReducer(state = initState, action) {
  switch (action.type) {
    case RESET_FORM_STUDENTS:
      return {
        ...state,
        level: {
          ...state.level,
          dataNewLevel: null
        },
        classSchool: {
          ...state.classSchool,
          dataNewClass: null
        },
        section: {
          ...state.section,
          dataNewSection: null
        }
      };
    // ======================  R E D U C E R S   F O R   A D D   S T U D E N T S  // ======================

    // R E D U C E R S   F O R   L E V E L
    case SHOW_MODAL_LEVEL:
      return {
        ...state,
        level: {
          ...state.level,
          visible: true
        }
      };
    case CLOSE_MODAL_LEVEL:
      return {
        ...state,
        level: {
          ...state.level,
          visible: false
        }
      };
    case GET_LEVEL:
      return {
        ...state,
        level: {
          ...state.level,
          loading: true
        }
      };
    case actionCreator(GET_LEVEL, "res"):
      return {
        ...state,
        level: {
          ...state.level,
          loading: false,
          error: false,
          data: action.payload
        }
      };
    case actionCreator(GET_LEVEL, "err"):
      return {
        ...state,
        level: {
          ...state.level,
          loading: false,
          visible: false,
          error: true,
          data: null
        }
      };
    case actionCreator(POST_LEVEL, "res"):
      return {
        ...state,
        level: {
          ...state.level,
          dataNewLevel: action.payload,
          visible: false
        }
      };
    // R E D U C E R S   F O R   L E V E L

    // R E D U C E R S   F O R  C L A S S
    case actionCreator(POST_CLASS, "res"):
      return {
        ...state,
        classSchool: {
          ...state.classSchool,
          dataNewClass: action.payload,
          visible: false
        }
      };
    case SHOW_MODAL_CLASS:
      return {
        ...state,
        classSchool: {
          ...state.classSchool,
          visible: true
        }
      };
    case CLOSE_MODAL_CLASS:
      return {
        ...state,
        classSchool: {
          ...state.classSchool,
          visible: false
        }
      };
    case GET_CLASS:
      return {
        ...state,
        classSchool: {
          ...state.classSchool,
          loading: true
        }
      };
    case actionCreator(GET_CLASS, "res"):
      return {
        ...state,
        classSchool: {
          ...state.classSchool,
          loading: false,
          error: false,
          data: action.payload
        }
      };
    case actionCreator(GET_CLASS, "err"):
      return {
        ...state,
        classSchool: {
          ...state.classSchool,
          loading: false,
          error: true,
          dataNewClass: null
        }
      };
      
    // R E D U C E R S   F O R  C L A S S

    // R E D U C E R S   F O R  S E C T I O N
    case GET_SECTION:
      return {
        ...state,
        section: {
          ...state.section,
          loading: true
        }
      };
    case actionCreator(GET_SECTION, "res"):
      return {
        ...state,
        section: {
          ...state.section,
          loading: false,
          error: false,
          data: action.payload
        }
      };
    case actionCreator(GET_SECTION, "err"):
      return {
        ...state,
        section: {
          ...state.section,
          loading: false,
          error: true,
          dataNewSection: null
        }
      };
      case SHOW_MODAL_SECTION:
      return {
        ...state,
        section: {
          ...state.section,
          visible: true
        }
      };
    case CLOSE_MODAL_SECTION:
      return {
        ...state,
        section: {
          ...state.section,
          visible: false
        }
      };
      case actionCreator(POST_SECTION, "res"):
      return {
        ...state,
        section: {
          ...state.section,
          dataNewSection: action.payload,
          visible: false
        }
      };
    // R E D U C E R S   F O R  S E C T I O N
    // ======================  R E D U C E R S   F O R   A D D   S T U D E N T S  // ======================
    case SET_PAGINATE:
      return {
        ...state,
        offset: action.page
      };

    // G E T   A L L   S T U D E N T S
    case GET_ALL_STUDENTS:
      return {
        ...state,
        loading: true
      };

    case actionCreator(GET_ALL_STUDENTS, "res"):
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case actionCreator(GET_ALL_STUDENTS, "err"):
      return {
        ...state,
        loading: false,
        error: false,
        data: null
      };

    // case DELETE_USER:
    //   return {
    //     ...state,
    //     detail: {
    //       ...state.detail,
    //       user: null,
    //       loading: true
    //     }
    //   };

    case SET_DATA_STUDENT_IN_EDIT:
      return {
        ...state,
        editStudent: {
          ...state.editStudent,
          data: action.payload
        }
      };
    case PUT_STUDENT:
        return {
            ...state,
            editStudent: {
                ...state.editStudent,
                loading: true,
            }
        }
    case actionCreator(PUT_STUDENT, 'res'):
        return {
            ...state,
            editStudent: {
                ...state.editStudent,
                loading: false,
            }
        } 

    case SET_EMAIL_STUDENT_DETAIL:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true
        }
      };
    case actionCreator(SET_EMAIL_STUDENT_DETAIL, "res"):
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          student: action.payload,
          error: false
        }
      };
    case actionCreator(SET_EMAIL_STUDENT_DETAIL, "err"):
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          student: null,
          error: true
        }
      };
    default:
      return state;
  }
}
