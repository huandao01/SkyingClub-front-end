import React from "react";
import { WrapperStyled } from "./styled";

const ModalCreatePost = ({ onClose = () => {} }) => {
  return (
    <WrapperStyled>
      <div class="modal js-modal">
        <div class="modal-container js-modal-container">
          <div class="modal-header">
            <span class="modal-container-text">Tạo bài viết</span>
          </div>
          <div class="modal-close js-modal-close" onClick={onClose}>
            <i class="fa fa-times"></i>
          </div>
          <div class="modal-container-avt">
            <img
              src="https://cf.shopee.vn/file/f00ff3ca6680edb907b53d0fad7d22e8_tn"
              alt=""
              class="modal-container-avt-img"
            />
            <span class="modal-container-avt-name">Duy Trường</span>
          </div>
          <textarea
            name="content"
            placeholder="Bạn đang nghĩ gì?"
            id=""
            cols="30"
            rows="10"
            class="modal-container-content"
          ></textarea>
          <div class="modal-container-footer">
            <div class="modal-container-select">
              <span class="modal-container-select-text">Thêm vào bài viết</span>
              <i class="modal-container-select-img fa fa-image"></i>
            </div>
            <div class="modal-container-post">
              <button class="modal-container-post-btn">Đăng bài</button>
            </div>
          </div>
        </div>
      </div>
    </WrapperStyled>
  );
};

export default ModalCreatePost;
