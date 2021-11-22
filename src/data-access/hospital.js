import { combineUrlParams } from "../utils/common";
import clientUtils from "../utils/client-utils";
import baseAccess from "./base-access";

const api = "/isofhcare/hospital";

export default {
  ...baseAccess({ url: api }),
  searchTopFacility({ page = 0, size = 10, ...param }) {
    const url = api + "/get-hospital-by-locate";
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("get", combineUrlParams(url, { page, size, ...param }), {})
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  },
};
