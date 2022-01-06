import { timeFromNow } from "@src/utils/common";
import moment from "moment";
import React, { useEffect } from "react";
import { WrapperStyled } from "./styled";

const Post = ({
  content,
  author,
  timestamp,
  createdAt,
  imgUrl,
  numberLike,
  numberComment,
}) => {
  return (
    <WrapperStyled>
      <div className="container__body--main-framepost">
        <div className="container__body--main-framepost-header">
          <div className="container__body--main-frame-header">
            <img
              src="https://cf.shopee.vn/file/f00ff3ca6680edb907b53d0fad7d22e8_tn"
              alt=""
              className="frame-header-avt"
            />
            <ul className="container__body--main-frame-headerNT">
              <li className="frame-header-name">{author}</li>
              <li className="frame-header-time">{timeFromNow(createdAt)}</li>
            </ul>
          </div>
          <div className="sidebar">
            <label htmlFor="toggle_sidebar">
              <i className="container__body--main-frame-header-menu fa fa-ellipsis-h"></i>
            </label>
            <input type="checkbox" id="toggle_sidebar" />
            <div className="sidebar_menu">
              <ul className="sidebar_menu-list">
                <li className="sidebar_menu-item">
                  <a href="">Xóa bài</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="container__body--main-framepost-caption">{content}</p>
        <img src={imgUrl} alt="" className="container__body--main-framepost-img" />

        {/* <div className="container__body--main-framepost-text">
          <p className="container__body--main-framepost-dcs">Nhập đoạn text</p>
        </div> */}

        <div className="container__framepost-inf">
          <div className="container__framepost-inf-like">
            <i className="container__framepost-inf-like-icon fa fa-heart"></i>
            <span className="container__framepost-inf-like-q">{numberLike}</span>
          </div>
          <div className="container__framepost-inf-cmt">
            <span className="container__framepost-inf-cmt-q">{numberComment}</span>
            <span className="container__framepost-inf-cmt-d">Bình luận</span>
          </div>
        </div>
        <div className="container__framepost-action">
          <div className="container__framepost-action-like">
            <i className="container__framepost-action-like-icon fa fa-heart"></i>
            <span className="container__framepost-action-like-btn">Yêu thích</span>
          </div>
          <div className="container__framepost-action-cmt">
            <i className="container__framepost-action-cmt-icon fa fa-comments"></i>
            <span className="container__framepost-action-cmt-btn">Bình luận</span>
          </div>
        </div>
      </div>
    </WrapperStyled>
  );
};

export default Post;
