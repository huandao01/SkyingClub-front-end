import React, { useState } from "react";
import { connect } from "react-redux";
import { WrapperStyled } from "./styled";
import { message } from "antd";

const ModalCreatePost = ({
  auth,
  _createOrEdit = () => {},
  onClose = () => {},
  afterPost = () => {},
}) => {
  const [state, _setState] = useState({});
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const handleSubmit = () => {
    const { content } = state;
    if (!content) {
      message.error("Hãy viết nội dung gì đó");
      return;
    }

    _createOrEdit({ content }).then((res) => {
      if (res && res.code === 0) {
        message.success("Đăng bài viết thành công");
        afterPost();
      } else {
        message.error(res.message);
      }
    });
  };

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
            <span class="modal-container-avt-name">{auth.full_name}</span>
          </div>
          <textarea
            name="content"
            placeholder="Bạn đang nghĩ gì?"
            id=""
            cols="30"
            rows="10"
            value={state.content}
            onChange={(e) => {
              setState({ content: e.target.value });
            }}
            class="modal-container-content"
          ></textarea>
          <div class="modal-container-footer">
            <div class="modal-container-select">
              <span class="modal-container-select-text">Thêm vào bài viết</span>
              <i class="modal-container-select-img fa fa-image"></i>
            </div>
            <div class="modal-container-post">
              <button class="modal-container-post-btn" onClick={handleSubmit}>
                Đăng bài
              </button>
            </div>
          </div>
        </div>
      </div>
    </WrapperStyled>
  );
};

export default connect(
  ({ auth: { auth } }) => ({ auth }),
  ({ post: { _createOrEdit } }) => ({ _createOrEdit })
)(ModalCreatePost);
