import { getState } from "@src/redux";
import clientUtils from "./client-utils";

const combineUrlParams = (url = "", params = {}) => {
  const keys = Object.keys(params);
  const paramUrl = keys
    .reduce(
      (result, key) =>
        params[key] !== undefined && params[key] !== null && params[key] !== ""
          ? [...result, `${key}=${params[key]}`]
          : [...result],
      []
    )
    .join("&");
  return `${url}?${paramUrl}`;
};

const timeFromNow = (fromDate, format) => {
  const date = new Date(fromDate);
  const fy = date.getFullYear();
  const fM = date.getMonth();
  const fd = date.getDay();
  const fh = date.getHours();
  const fm = date.getMinutes();
  const fs = date.getSeconds();

  const now = new Date();
  const ny = now.getFullYear();
  const nM = now.getMonth();
  const nd = now.getDay();
  const nh = now.getHours();
  const nm = now.getMinutes();
  const ns = now.getSeconds();

  if (ny - fy > 0) return `${ny - fy} năm trước`;
  if (nM - fM > 0) return `${nM - fM} tháng trước`;
  if (nd - fd > 0) return `${nd - fd} ngày trước`;
  if (nh - fh > 0) return `${nh - fh} giờ trước`;
  if (nm - fm > 0) return `${nm - fm} phút trước`;
  if (ns - fs > 0) return `${ns - fs} giây trước`;
};

export const getImg = (avatar) => {
  return avatar
    ? `${clientUtils.serverApi}/files/${avatar}`
    : "https://cf.shopee.vn/file/f00ff3ca6680edb907b53d0fad7d22e8_tn";
};

Number.prototype.formatPrice = function () {
  return this.toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    .replace(".00", "")
    .replace(/,/g, ".");
};
String.prototype.formatPrice = function () {
  try {
    return parseInt(this)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      .replace(".00", "")
      .replace(/,/g, ".");
  } catch (error) {}
  return this;
};

export { combineUrlParams, timeFromNow };
