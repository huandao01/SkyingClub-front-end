import fetchProvider from "@data-access/event-provider";
import baseStore from "../base-store";

export default {
  ...baseStore({
    fetchProvider,
    storeName: "event",
    title: "Giải thể thao",
      
  }),
};
