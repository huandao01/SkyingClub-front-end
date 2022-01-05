import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "./constant";
import { dataHistorySearch } from "./data";
import { WrapperStyled } from "./styled";

const Header = ({ auth, _logout }) => {
  const [state, _setState] = useState({
    openUserMenu: false,
  });

  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      console.log(e,'e');
      if (
        e.target.className?.indexOf("header__navbar-user") === -1 &&
        e.target.nodeName != "A"
      ) {
        setState({ openUserMenu: false });
      }
    });
  }, []);

  return (
    <WrapperStyled>
      <header className="header">
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-fun">
              <Link href="/home" className="header__navbar-fun-link">
                <i className="header__navbar-fun-home fas fa-home"></i>
                Skying Club
              </Link>
            </li>
            {routes.map((item, index) => {
              if (item.children && item.children?.length > 0) {
                return (
                  <li key={index} className="header__navbar-fun">
                    <a href="#" className="header__navbar-fun-link">
                      {item.title}
                      <i className="header__navbar-fun-link-icon fas fa-chevron-down"></i>
                    </a>
                    <ul className="header__navbar-fun-list">
                      {item.children?.map((child, idx) => (
                        <li key={idx} className="header__navbar-fun-list-link">
                          <a href={child.path || ""}>{child.title}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={index} className="header__navbar-fun">
                  <a href="" className="header__navbar-fun-link">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="header__search">
            <div className="header__search-input-wrap">
              <input
                type="text"
                className="header__search-input"
                placeholder="Nhập để tìm kiếm"
              />
              <div className="header__search-history">
                <h3 className="header__search-history-heading">
                  Lịch sử tìm kiếm
                </h3>
                <ul className="header__search-history-list">
                  {dataHistorySearch.map((item, index) => (
                    <li key={index} className="header__search-history-item">
                      <a href="" className="">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="header__navbar-user">
            {auth ? (
              <div
                className="header__navbar-user-all"
                onClick={() => {
                  setState({ openUserMenu: !state.openUserMenu });
                }}
              >
                <img
                  src="https://cf.shopee.vn/file/f00ff3ca6680edb907b53d0fad7d22e8_tn"
                  alt=""
                  className="header__navbar-user-img"
                />
                <span className="header__navbar-user-name">
                  {auth.full_name || "Vô danh"}
                </span>
                {state.openUserMenu && (
                  <ul className="header__navbar-user-menu-list">
                    <li className="header__navbar-user-menu-link">
                      <a href="">Tài Khoản của tôi</a>
                    </li>
                    <li
                      className="header__navbar-user-menu-link"
                      onClick={_logout}
                    >
                      <a href="">Đăng xuất</a>
                    </li>
                    <li className="header__navbar-user-menu-link header__navbar-user-menu-link-help">
                      <a href="">Trợ giúp</a>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <ul className="header__navbar-nologin">
                <li className="header__navbar-nologin-link">
                  <Link to={"/auth/register"}>Đăng ký</Link>
                </li>
                <li className="header__navbar-nologin-link">
                  <Link to={"/auth/login"}>Đăng nhập</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </WrapperStyled>
  );
};

export default connect(
  ({ auth: { auth } }) => ({ auth }),
  ({ auth: { _logout } }) => ({ _logout })
)(Header);
