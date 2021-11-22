import { combineUrlParams } from "../utils/common";
import clientUtils from "../utils/client-utils";

export default ({ url }) => ({
  search({ page = 0, size = 10, ...param }) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("get", combineUrlParams(url, { page, size, ...param }), {})
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  },
  detail(id) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("get", url + "/" + id, {})
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  create(body) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("post", url, body)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  update(id, body) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("put", url + "/" + id, body)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  delete(id) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("delete", url + "/" + id, {})
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
});
