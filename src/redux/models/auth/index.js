import { message } from "antd";
import authProvider from "@data-access/auth-provider";
export default {
  state: {
    auth: (() => {
      try {
        let data = localStorage.getItem("auth") || "";
        if (data) return JSON.parse(data);
      } catch (error) {
        console.log(error);
      }
      return null;
    })(),
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    _register: (payload) => {
      dispatch.auth.updateData({
        auth: null,
      });
      return new Promise((resolve, reject) => {
        authProvider
          .register(payload)
          .then((s) => {
            localStorage.setItem("auth", JSON.stringify(s?.data));
            dispatch.auth.updateData({
              auth: s?.data,
            });
            resolve(s);
          })
          .catch((e) => {
            message.error(e?.message || "Đăng ký không thành công");
            reject(e);
          });
      });
    },
    _login: ({ username, password }) => {
      dispatch.auth.updateData({
        auth: null,
      });
      return new Promise((resolve, reject) => {
        authProvider
          .login({
            username,
            password,
          })
          .then((s) => {
            localStorage.setItem("auth", JSON.stringify(s?.data));
            dispatch.auth.updateData({
              auth: s?.data,
            });
            resolve(s);
          })
          .catch((e) => {
            message.error(e?.message || "Đăng nhập không thành công");
            reject(e);
          });
      });
    },
    _logout: () => {
      localStorage.removeItem("auth");
      dispatch.auth.updateData({
        auth: null,
      });
      window.location.href = "/auth/login";
    },
  }),
};
