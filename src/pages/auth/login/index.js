import { message } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { WrapperStyled } from "./styled";

const Login = ({ _login, history }) => {
  const [state, _setState] = useState({});
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = state;
    setState({ clickSubmit: true });
    if (!username) {
      message.error("Vui lòng nhập username");
      return;
    }
    if (!password) {
      message.error("Vui lòng nhập password");
      return;
    }
    _login({ username, password }).then((res) => {
      if (res && res.code === 0) {
        message.success("Đăng nhập thành công");

        setTimeout(() => {
          window.location.href = "/skyingclub/home";
        }, 1000);
      } else {
        message.error(res.message);
      }
    });
  };

  return (
    <WrapperStyled>
      <div class="center-container">
        <div class="header-w3l">
          <h1>Online Login Form</h1>
        </div>
        <div class="main-content-agile">
          <div class="sub-main-w3">
            <div class="wthree-pro">
              <h2>Login Quick</h2>
            </div>
            <form action="#" method="post" className="form-auth">
              <div
                className={
                  state.clickSubmit && !state.username
                    ? "group-input invalid"
                    : "group-input"
                }
              >
                <input
                  placeholder="username"
                  name="username"
                  class="user"
                  type="text"
                  onChange={(e) => {
                    setState({ username: e.target.value });
                  }}
                />
                <span class="icon1">
                  <i class="fa fa-user" aria-hidden="true"></i>
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
                  class="pass"
                  type="password"
                  onChange={(e) => {
                    setState({ password: e.target.value });
                  }}
                />
                <span class="icon2">
                  <i class="fa fa-unlock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="sub-w3l">
                <h6>
                  <a href="#">Forgot Password?</a>
                </h6>
                <div class="right-w3l" onClick={handleSubmit}>
                  <input type="submit" value="Login" />
                </div>
                <div
                  class="right-w3l"
                  onClick={() => {
                    history.push("/auth/register");
                  }}
                >
                  <input type="submit" value="Register" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="footer">
          <p>&copy; Online Login Form | Design by Skyingclub</p>
        </div>
      </div>
    </WrapperStyled>
  );
};
export default connect(
  () => ({}),
  ({ auth: { _login } }) => ({ _login })
)(Login);
