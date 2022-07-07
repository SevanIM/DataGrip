import axios from "axios";
import { API } from "../utils/constants";

const SEARCH_API = `${API.SERVER_API}/search`;

export const search = (type, value, recaptchaResponse) => {
  return axios
    .post(SEARCH_API, {
      record_type: type,
      value,
      recaptchaResponse,
    })
    .catch((e) => {
      console.log(e);
    });
};

export default {
  search,
};
