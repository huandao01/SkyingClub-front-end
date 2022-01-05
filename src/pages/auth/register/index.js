import React, { useState } from "react";
import { connect } from "react-redux";
import { WrapperStyled } from "./styled";
import { message } from "antd";

const Register = ({ _register }) => {
  const [state, _setState] = useState({});
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, fullName, password, password2 } = state;
    setState({ clickSubmit: true });
    if (!email) {
      message.error("Vui lòng nhập email");
      return;
    }
    if (!username) {
      message.error("Vui lòng nhập username");
      return;
    }
    if (!fullName) {
      message.error("Vui lòng nhập tên người dùng");
      return;
    }
    if (!password) {
      message.error("Vui lòng nhập password");
      return;
    }
    if (!password2) {
      message.error("Vui lòng nhập lại password");
      return;
    }
    if (password != password2) {
      message.error("password không đúng");
      return;
    }
    _register({ email, fullName, username, password }).then((res) => {
      if (res && res.code === 0) {
        message.success("Đăng ký thành công. Vui lòng đăng nhập vào hệ thống");

        setTimeout(() => {
          window.location.href = "/auth/login";
        }, 1000);
      } else {
        message.error(res.message);
      }
    });
  };

  return (
    <WrapperStyled>
      <div className="center-container">
        <div className="header-w3l">
          <h1>Online Sign in Form</h1>
        </div>
        <div className="main-content-agile">
          <div className="sub-main-w3">
            <div className="wthree-pro">
              <h2>Sign in Quick</h2>
            </div>
            <form action="#" method="post" className="form-auth">
              <div
                className={
                  state.clickSubmit && !state.email
                    ? "group-input invalid"
                    : "group-input"
                }
              >
                <input
                  placeholder="E-mail"
                  name="Name"
                  onChange={(e) => {
                    setState({ email: e.target.value });
                  }}
                  type="email"
                  required=""
                />
                <span className="icon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className={
                  state.clickSubmit && !state.username
                    ? "group-input invalid"
                    : "group-input"
                }
              >
                <input
                  placeholder="Username"
                  name="username"
                  onChange={(e) => {
                    setState({ username: e.target.value });
                  }}
                  type="text"
                  required=""
                />
                <span className="icon1">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className={
                  state.clickSubmit && !state.fullName
                    ? "group-input invalid"
                    : "group-input"
                }
              >
                <input
                  placeholder="Tên người dùng"
                  name="Name"
                  onChange={(e) => {
                    setState({ fullName: e.target.value });
                  }}
                  type="text"
                />
                <span className="icon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className={
                  state.clickSubmit && !state.password
                    ? "group-input invalid"
                    : "group-input"
                }
              >
                <input
                  placeholder="Password"
                  name="Password"
                  onChange={(e) => {
                    setState({ password: e.target.value });
                  }}
                  type="password"
                  required=""
                />
                <span className="icon2">
                  <i className="fa fa-unlock" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className={
                  state.clickSubmit && !state.password2
                    ? "invalid group-input"
                    : "group-input"
                }
              >
                <input
                  placeholder="Confirm Password"
                  name="Password"
                  onChange={(e) => {
                    setState({ password2: e.target.value });
                  }}
                  type="password"
                  required=""
                />
                <span className="icon2">
                  <i className="fa fa-unlock" aria-hidden="true"></i>
                </span>
              </div>
              <div className="sub-w3l">
                <div className="right-w3l" onClick={handleSubmit}>
                  <input type="submit" value="Sign in" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <p>&copy; Online Sign in Form | Design by Skyingclub</p>
        </div>
      </div>
    </WrapperStyled>
  );
};
export default connect(
  ({}) => ({}),
  ({ auth: { _register } }) => ({ _register })
)(Register);
