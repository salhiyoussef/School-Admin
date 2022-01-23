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
  POST_SECTION,
  // =============  T Y P E S   F O R   A D D   S T U D E N T S  // ===========
  GET_ALL_STUDENTS,
  POST_STUDENTS,
  PUT_STUDENT,
  SET_DATA_STUDENT_IN_EDIT,
  DELETE_STUDENT,
  SET_PAGINATE,
  SET_EMAIL_STUDENT_DETAIL,

  GET_PAIEMENT,
  SHOW_MODAL_PAIEMENT,
  CLOSE_MODAL_PAIEMENT,
  POST_PAIEMENT
} from "../types/studentType";
import { actionCreator } from "../../utils";

export function resetFormStudent() {
  return {
    type: RESET_FORM_STUDENTS
  };
}

// ======================  A C T I O N S   F O R   A D D   S T U D E N T S  // ======================

// A C T I O N S   F O R   L E V E L
export function showModalLevel() {
  return {
    type: SHOW_MODAL_LEVEL
  };
}

export function closeModalLevel() {
  return {
    type: CLOSE_MODAL_LEVEL
  };
}

export function getLevel() {
  return {
    type: GET_LEVEL
  };
}

export function getLevelRes(payload) {
  return {
    type: actionCreator(GET_LEVEL, "res"),
    payload
  };
}

export function getLevelErr() {
  return {
    type: actionCreator(GET_LEVEL, "err")
  };
}

export function postLevel(payload) {
  return {
    type: POST_LEVEL,
    payload
  };
}

export function postLevelRes(payload) {
  return {
    type: actionCreator(POST_LEVEL, "res"),
    payload
  };
}
// A C T I O N S   F O R   P A I E M E N T

export function showModalPaiement() {
  return {
    type: SHOW_MODAL_PAIEMENT
  };
}

export function closeModalPaiement() {
  return {
    type: CLOSE_MODAL_PAIEMENT
  };
}

export function getPaiement(studentID) {
  return {
    type: GET_PAIEMENT,
    studentID
  };
}

export function getPaiementRes(payload) {
  return {
    type: actionCreator(GET_PAIEMENT, "res"),
    payload
  };
}

export function getPaiementErr() {
  return {
    type: actionCreator(GET_PAIEMENT, "err")
  };
}
export function postPaiement(payload) {
  return {
    type: POST_PAIEMENT,
    payload
  };
}
export function postPaiementRes(payload) {
  return {
    type: actionCreator(POST_PAIEMENT, "res"),
    payload
  };
}

// A C T I O N S   F O R   C L A S S
export function showModalClass() {
  return {
    type: SHOW_MODAL_CLASS
  };
}

export function closeModalClass() {
  return {
    type: CLOSE_MODAL_CLASS
  };
}

export function getClass(levelID) {
  return {
    type: GET_CLASS,
    levelID
  };
}

export function getClassRes(payload) {
  return {
    type: actionCreator(GET_CLASS, "res"),
    payload
  };
}

export function getClassErr() {
  return {
    type: actionCreator(GET_CLASS, "err")
  };
}
export function postClass(payload) {
  return {
    type: POST_CLASS,
    payload
  };
}
export function postClassRes(payload) {
  return {
    type: actionCreator(POST_CLASS, "res"),
    payload
  };
}
// A C T I O N S   F O R    C L A S S

// A C T I O N S   F O R   S E C T I O N
export function getSection(id) {
  return {
    type: GET_SECTION,
    id
  };
}

export function getSectionRes(payload) {
  return {
    type: actionCreator(GET_SECTION, "res"),
    payload
  };
}

export function getSectionErr() {
  return {
    type: actionCreator(GET_SECTION, "err")
  };
}
export function postSection(payload) {
  return {
    type: POST_SECTION,
    payload
  };
}
export function postSectionRes(payload) {
  return {
    type: actionCreator(POST_SECTION, "res"),
    payload
  };
}
export function showModalSection() {
  return {
    type: SHOW_MODAL_SECTION
  };
}

export function closeModalSection() {
  return {
    type: CLOSE_MODAL_SECTION
  };
}
// A C T I O N S   F O R   S E C T I O N

// ======================  A C T I O N S   F O R   A D D   S T U D E N T S  // ======================


// P A G I N A T E   S U D E N T S
export function setPaginate(page) {
  return {
    type: SET_PAGINATE,
    page
  };
}

// D E L E T E   S U D E N T S
export function deleteStudent(id) {
  return {
    type: DELETE_STUDENT,
    id
  };
}

// G E T   A L L   S U D E N T S
export function getAllStudents() {
  return {
    type: GET_ALL_STUDENTS
  };
}

export function getAllStudentsRes(payload) {
  return {
    type: actionCreator(GET_ALL_STUDENTS, "res"),
    payload
  };
}

export function getAllStudentsErr() {
  return {
    type: actionCreator(GET_ALL_STUDENTS, "err")
  };
}
export function postStudents(payload) {
  return {
    type: POST_STUDENTS,
    payload
  };
}

export function postStudentsRes() {
  return {
    type: actionCreator(POST_STUDENTS, "res")
  };
}

export function postStudentsErr() {
  return {
    type: actionCreator(POST_STUDENTS, "err")
  };
}
export function setDateStudentEdit(payload) {
  return {
    type: SET_DATA_STUDENT_IN_EDIT,
    payload
  };
}
export function putStudent(payload) {
  return {
      type: PUT_STUDENT,
      payload,
  }
}

export function putStudentRes() {
  return {
      type: actionCreator(PUT_STUDENT, 'res')
  }
}

export function putStudentErr() {
  return {
      type: actionCreator(PUT_STUDENT, 'err')
  }
}

export function setEmailStudentDetail(email) {
  return {
    type: SET_EMAIL_STUDENT_DETAIL,
    email
  };
}

export function setEmailStudentDetailRes(payload) {
  return {
    type: actionCreator(SET_EMAIL_STUDENT_DETAIL, "res"),
    payload
  };
}

export function setEmailStudentDetailErr() {
  return {
    type: actionCreator(SET_EMAIL_STUDENT_DETAIL, "err")
  };
}
// P O S T   M I N I   S T U D E  N T S

export function postMiniStudents(payload) {
  return {
    type: POST_STUDENTS,
    payload
  };
}
