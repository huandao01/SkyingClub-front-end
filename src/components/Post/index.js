import clientUtils from "@src/utils/client-utils";
import { timeFromNow } from "@src/utils/common";
import { Tooltip } from "antd";
import moment from "moment";
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { WrapperStyled } from "./styled";

const Post = ({
  id,
  content,
  author,
  timestamp,
  createdAt,
  imgUrl,
  numberLike,
  numberComment,
  imgPath,
  createdBy,
  isLike,

  auth,
  onEdit,
  createLike,
  deleteLike,
  onLike,
  listUser = [],
}) => {
  const [state, _setstate] = useState({ showMenu: false });
  const setState = (data) => {
    _setstate((pre) => ({ ...pre, ...data }));
  };
  const refTimeout = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (e.target.className?.indexOf("post-menu-id") === -1) {
        setState({ showMenu: false });
      }
    });
  }, []);

  const handleLike = () => {
    onLike({ isLike: !isLike, postId: id });
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }

    refTimeout.current = setTimeout(() => {
      if (isLike) {
        deleteLike(id);
      } else {
        createLike(id);
      }
    }, 1000);
  };

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
            <label
              onClick={() => {
                setState({ showMenu: true });
              }}
            >
              <i className="container__body--main-frame-header-menu fa fa-ellipsis-h"></i>
            </label>

            {state.showMenu && (
              <div className="sidebar_menu post-menu-id">
                <ul className="sidebar_menu-list post-menu-id">
                  {auth.userId === createdBy && (
                    <li
                      onClick={onEdit}
                      className="sidebar_menu-item post-menu-id"
                    >
                      Sửa bài
                    </li>
                  )}
                  <li className="sidebar_menu-item post-menu-id">Xóa bài</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <p className="container__body--main-framepost-caption">{content}</p>
        <img
          src={`${clientUtils.serverApi}/files/${imgPath}`}
          alt=""
          className="container__body--main-framepost-img"
        />

        {/* <div className="container__body--main-framepost-text">
          <p className="container__body--main-framepost-dcs">Nhập đoạn text</p>
        </div> */}

        <div className="container__framepost-inf">
          <Tooltip
            title={
              <ul>
                {listUser.map((item) => (
                  <li key={item.id}>{item.fullName}</li>
                ))}
              </ul>
            }
          >
            <div className="container__framepost-inf-like">
              <i className="container__framepost-inf-like-icon fa fa-heart"></i>
              <span className="container__framepost-inf-like-q">
                {numberLike}
              </span>
            </div>
          </Tooltip>
          <div className="container__framepost-inf-cmt">
            <span className="container__framepost-inf-cmt-q">
              {numberComment}
            </span>
            <span className="container__framepost-inf-cmt-d">Bình luận</span>
          </div>
        </div>
        <div className="container__framepost-action">
          <div
            onClick={handleLike}
            className={`container__framepost-action-like ${
              isLike ? "container__framepost-action-liked" : ""
            }`}
          >
            <i className="container__framepost-action-like-icon fa fa-heart"></i>
            <span className="container__framepost-action-like-btn">
              Yêu thích
            </span>
          </div>
          <div className="container__framepost-action-cmt">
            <i className="container__framepost-action-cmt-icon fa fa-comments"></i>
            <span className="container__framepost-action-cmt-btn">
              Bình luận
            </span>
          </div>
        </div>
      </div>
    </WrapperStyled>
  );
};

export default connect(
  ({ auth: { auth }, account: { listUser } }) => ({
    auth,
    listUser,
  }),
  ({
    auth: { _logout },
    cache: { saveHistory },
    post: { _getList: getListPost, updatePost },
    like: { createLike, deleteLike, onLike },
  }) => ({
    _logout,
    saveHistory,
    getListPost,
    updatePost,
    createLike,
    deleteLike,
    onLike,
  })
)(Post);
