import { get, del, post } from "../../utils/methode";
import { API } from "../../utils";

// G E T   D R I V E R  A P I
export function getDriversApi(params, headres) {
  return get(`${API}/driver`, params, headres);
}

// D E L E T E   D R I V E R  A P I
export function deleteDriverApi(id, headres) {
  return del(`${API}/driver/${id}`, headres);
}

// P O S T  D R I V E R  A P I
export function postDriverApi(payload, headres) {
  return post(`${API}/driver`, payload, headres)
}