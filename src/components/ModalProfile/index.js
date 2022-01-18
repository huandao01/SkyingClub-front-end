import fileProvider from "@src/data-access/file-provider";
import clientUtils from "@src/utils/client-utils";
import { getImg } from "@src/utils/common";
import { Button, Input, message, Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { connect, Provider } from "react-redux";
import { WrapperStyled } from "./styled";
import userProvider from "@src/data-access/user-provider";

const ModalProfile = ({ auth, _createOrEdit, onCancel, updateAuth , userInfor = [], getUserInfor}) => {
  const [state, _setState] = useState({
    isEdit: false,
  });

  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const handleSubmit = () => {
    const { fullName, email } = state;
    if (!fullName) {
      message.error("Vui lòng nhập tên tài khoản");
      return;
    }
    if (!email) {
      message.error("Vui lòng nhập email");
      return;
    }
    _createOrEdit({
      id: auth.userId,
      role: auth.userId[auth.userId.length - 1],
      email,
      avatar: auth.avatar,
      fullName,
    }).then((res) => {
      updateAuth({ email, avatar: auth.avatar, full_name: fullName });
      onCancel();
    });
  };

  useEffect(() => {
     getUserInfor(auth.userId);
  },[]); 

  console.log(userInfor.fullName);

  return (
    <Modal
      visible={true}
      title="Thông tin tài khoản"
      onCancel={onCancel}
      footer={
        <WrapperStyled>
          <div className="footer">
            {state.isEdit ? (
              <>
                <Button
                  onClick={() => {
                    setState({ isEdit: false });
                  }}
                >
                  Hủy
                </Button>
                <Button onClick={handleSubmit} type="primary">
                  Lưu
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setState({
                    isEdit: true,
                    fullName: auth.full_name,
                    email: auth.email,
                  });
                }}
                type="primary"
              >
                Chỉnh sửa
              </Button>
            )}
          </div>
        </WrapperStyled>
      }
    >
      <WrapperStyled>
        {state.isEdit ? (
          <>
            <div className="fullName">
              
              <Input
                value={state.fullName}
                onChange={(e) => setState({ fullName: e.target.value })}
                placeholder={auth.full_name}
              />
            </div>
            <div className="username">{auth.username }</div>
            <input
              id="avatar-id"
              type="file"
              onChange={(e) => {
                fileProvider.upload(e.target.files[0]).then((res) => {
                  if (res && res.code === 0) {
                    updateAuth({ avatar: res.data.filePath });
                  }
                });
              }}
              style={{ display: "none" }}
            />
            <Tooltip title="upload ảnh" placement="right">
              <label htmlFor="avatar-id">
                <img src={getImg(auth.avatar)} />
              </label>
            </Tooltip>
            <div className="email">
              <Input
                type={"email"}
                placeholder={auth.email}
                value={state.email}
                onChange={(e) => setState({ email: e.target.value })}
              />
            </div>
          </>
        ) : (
          <>
            <div className="fullName">{auth.full_name}</div>
            <div className="username">{auth.username}</div>
            <div className="avatar">
              <img src={getImg(auth.avatar)} />
            </div>
            <div className="email">{auth.email}</div>
            <div className="">Thời gian tham gia:  {userInfor.createdAt}</div>
            <div className="">Số điện thoại:  {userInfor.phoneNumber}</div>
            <div className="">Ngày sinh:  {userInfor.dateOfBirth}</div>
            <div className="">Sở thích:  {userInfor.interest}</div>
            <div className="">Điểm số:  {userInfor.score}</div>  
            <div className="">Số xu hiện có:  {userInfor.coin}</div>  
            <div className=""> Số giải đã tham gia:  {userInfor.eventName.length }</div>  

          </>
        )}
      </WrapperStyled>
    </Modal>
  );
};

export default connect(
  ({ auth: { auth }, rank: {_dataFilter : userInfor} }) => ({ auth, userInfor }),
  ({ account: { _createOrEdit }, auth: { updateAuth }, rank: {_detail : getUserInfor} }) => ({
    _createOrEdit,
    updateAuth,
    getUserInfor,
  })
)(ModalProfile);
