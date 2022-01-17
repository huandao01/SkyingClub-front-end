import fetchProvider from "@data-access/product-provider";
import baseStore from "../base-store";

export default {
  ...baseStore({
    fetchProvider,
    storeName: "product",
    title: "Sản phẩm",   
  }),
};
