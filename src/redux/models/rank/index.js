import fetchProvider from "@data-access/rank-provider";
import baseStore from "../base-store";

export default {
  ...baseStore({
    fetchProvider,
    storeName: "rank",
    title: "BXH",
      
  }),
};
