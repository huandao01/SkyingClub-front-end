import { message } from "antd";
export default {
  state: {
    listAdd: [],
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    addProduct: (payload, state) => {
      dispatch.shop.updateData({
        listAdd: [payload, ...state.shop.listAdd],
      });
    },
  }),
};
