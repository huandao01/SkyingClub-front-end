import { API } from "@src/constants";
import clientUtils from "@utils/client-utils";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  login(body) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("post", `${API.account}/login`, body)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  register(body) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("post", `${API.account}/register`, body)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
