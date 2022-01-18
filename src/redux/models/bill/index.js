import fetchProvider from "@data-access/event-provider";
import baseStore from "../base-store";

export default {
  ...baseStore({
    fetchProvider,
    storeName: "bill",
    title: "Hoá đơn",    
  }),
};
