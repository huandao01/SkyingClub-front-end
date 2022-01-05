import fetchProvider from "@data-access/post-provider";
import baseStore from "../base-store";

export default {
  ...baseStore({
    fetchProvider,
    storeName: "post",
    title: "Bài viết",
  }),
};
