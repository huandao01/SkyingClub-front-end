import fetchProvider from "@data-access/bill-provider";
import baseStore from "../base-store";

export default {
  ...baseStore({
    fetchProvider,
    storeName: "bill",
    title: "Hoá đơn",    
  }),
};
