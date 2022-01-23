import { get, postAxios, post, del, put } from "../../utils/methode";
import { API } from "../../utils";

// ======================  A P I   F O R   A D D   S T U D E N T S  // ======================

// A P I   F O R   L E V E L
export function getLevelApi(headers) {
  return get(`${API}/schoolLevel`, headers);
}

export function postLevelApi(data, headers) {
  return postAxios(`${API}/schoolLevel`, data, headers);
}
// A P I   F O R   L E V E L

// A P I   F O R   C L A S S
export function getClassApi(id, headers) {
  return get(`${API}/class/${id}`, headers);
}
export function postClassApi(data, headers) {
  return postAxios(`${API}/class`, data, headers);
}
// A P I   F O R   C L A S S

// A P I   F O R   S E C T I O N
export function getSectionApi(id, headers) {
  return get(`${API}/section/${id}`, headers);
}
export function postSectionApi(data, headers) {
  return postAxios(`${API}/section`, data, headers);
}
// ======================  A P I   F O R   A D D   S T U D E N T S  // ======================

// G E T   A L L   S T U D E N T S
export function getAllStudentsApi(params, headers) {
  return get(`${API}/student`, params, headers);
}

export function getStudentEmail(email, headers) {
  return get(`${API}/student/${email}`, headers);
}
// P O S T   S T U D E N T S
export function postStudentsApi(data, headers) {
  return post(`${API}/student`, data, headers);
}
// D E L E T E   S T U D E N T
export function deleteStudentApi(id,headers){
  return del(`${API}/student/${id}`,headers)
}
// U P D A T E   S T U D E N T
export function putStudentApi(params, data, headers){
  const {id} = params;
  return put(`${API}/student/${id}`, data, headers);
}