import React from "react";
import { WrapperStyled } from "./styled";

const Post = ({
  content,
  author,
  timestamp,
  imgUrl,
  numberLike,
  numberComment,
}) => {
  return (
    <WrapperStyled>
      <div class="container__body--main-framepost">
        <div class="container__body--main-framepost-header">
          <div class="container__body--main-frame-header">
            <img
              src="https://cf.shopee.vn/file/f00ff3ca6680edb907b53d0fad7d22e8_tn"
              alt=""
              class="frame-header-avt"
            />
            <ul class="container__body--main-frame-headerNT">
              <li class="frame-header-name">{author}</li>
              <li class="frame-header-time">{timestamp}</li>
            </ul>
          </div>
          <div class="sidebar">
            <label for="toggle_sidebar">
              <i class="container__body--main-frame-header-menu fa fa-ellipsis-h"></i>
            </label>
            <input type="checkbox" id="toggle_sidebar" />
            <div class="sidebar_menu">
              <ul class="sidebar_menu-list">
                <li class="sidebar_menu-item">
                  <a href="">Xóa bài</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="container__body--main-framepost-caption">{content}</p>
        <img src={imgUrl} alt="" class="container__body--main-framepost-img" />

        {/* <div class="container__body--main-framepost-text">
          <p class="container__body--main-framepost-dcs">Nhập đoạn text</p>
        </div> */}

        <div class="container__framepost-inf">
          <div class="container__framepost-inf-like">
            <i class="container__framepost-inf-like-icon fa fa-heart"></i>
            <span class="container__framepost-inf-like-q">{numberLike}</span>
          </div>
          <div class="container__framepost-inf-cmt">
            <span class="container__framepost-inf-cmt-q">{numberComment}</span>
            <span class="container__framepost-inf-cmt-d">Bình luận</span>
          </div>
        </div>
        <div class="container__framepost-action">
          <div class="container__framepost-action-like">
            <i class="container__framepost-action-like-icon fa fa-heart"></i>
            <span class="container__framepost-action-like-btn">Yêu thích</span>
          </div>
          <div class="container__framepost-action-cmt">
            <i class="container__framepost-action-cmt-icon fa fa-comments"></i>
            <span class="container__framepost-action-cmt-btn">Bình luận</span>
          </div>
        </div>
      </div>
    </WrapperStyled>
  );
};

export default Post;
