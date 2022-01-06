import fetchProvider from "@data-access/comment-provider";
import baseStore from "../base-store";

export default {
  ...baseStore({
    fetchProvider,
    storeName: "comment",
    title: "Bình luận",
  }),
};
