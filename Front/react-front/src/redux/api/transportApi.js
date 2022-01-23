import { get, del, post } from "../../utils/methode";
import { API } from "../../utils";

// G E T   A L L   T R A N S P O R T
export function getAllTransportApi(params, headers) {
    return get(`${API}/transport`, params, headers);
}
// D E L E T E   T R A N S P O R T
export function deleteTransportApi(id, headres) {
    return del(`${API}/transport/${id}`, headres);
  }
export function postTransportApi(payload, headres) {
  console.log(payload);
  
    return post(`${API}/transport`, payload, headres)
  }