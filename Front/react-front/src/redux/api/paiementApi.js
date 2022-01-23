import { get, del, post, put } from "../../utils/methode";
import { API } from "../../utils";

// G E T   P A I E M E N T  A P I
export function getPaiementApi(params, headres) {
  return get(`${API}/paiement`, params, headres);
}
// P O S T  P A I E M E N T  A P I
export function postPaiementApi(data,headers){
  console.log(data);
    return post(`${API}/paiement`,data,headers);
}

// D E L E T E   P A I E M E N T  A P I
export function deletePaiementApi(id, headres) {
  return del(`${API}/paiement/${id}`, headres);
}

// P U T  P A I E M E N T  A P I
export function putPaiementApi(params, data, headres) {
  const {id} = params
  return put(`${API}/paiement/${id}`, data, headres)
}

// P U T  V A L I D A T E   P A I E M E N T  A P I

export function putValidatePaiementApi(params,data, headres) {
  const {id} = params
  return put(`${API}/paiement/${id}`, data, headres)
}