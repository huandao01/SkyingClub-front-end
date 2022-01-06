import { Spin, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "./constant";
import { dataHistorySearch } from "./data";
import { WrapperStyled } from "./styled";

const Header = ({ auth, historySearch, saveHistory, _logout, getListPost }) => {
  const [state, _setState] = useState({
    openUserMenu: false,
    loading: false,
    showHistory: false,
    searchStr: "",
  });
  console.log(auth,'auth');

  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        e.target.className?.indexOf("header__navbar-user") === -1 &&
        e.target.nodeName != "A"
      ) {
        setState({ openUserMenu: false });
      }

      if (e.target.className?.indexOf("search-history-id") === -1) {
        setState({ showHistory: false });
      }
    });
  }, []);

  const handleSearch = (e, isDelete) => {
    if (e.charCode === 13 || typeof e === "string") {
      const value = e.charCode === 13 ? e?.target?.value : e;
      saveHistory({ value, isDelete });
      if (!isDelete) {
        setState({ loading: true });
        getListPost({
          content: `${value.replaceAll(" ", "%").toLowerCase()}`,
        }).finally(() => {
          setState({ loading: false });
        });
      }
    }
  };

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
                          <a href={child.path || "/"}>{child.title}</a>
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
                onKeyPress={handleSearch}
                onChange={(e) => setState({ searchStr: e.target.value })}
                onFocus={() => {
                  setState({ showHistory: true });
                }}
              />
              {state.loading && (
                <Spin
                  size="large"
                  style={{
                    position: "fixed",
                    top: 100,
                    left: "50%",
                    zIndex: 2,
                  }}
                />
              )}
              {state.showHistory && (
                <div className="header__search-history search-history-id">
                  <h3 className="header__search-history-heading search-history-id">
                    Lịch sử tìm kiếm
                  </h3>
                  <ul className="header__search-history-list search-history-id">
                    {historySearch
                      .filter(
                        (item) =>
                          item.indexOf(state.searchStr) != -1 ||
                          state.searchStr === ""
                      )
                      .filter((_, idx) => idx < 6) // chỉ lấy 6 lịch sử
                      .map((item, index) => (
                        <li
                          key={index}
                          className="header__search-history-item search-history-id"
                        >
                          <span
                            onClick={() => handleSearch(item)}
                            className="search-history-id"
                            style={{ width: "100%" }}
                          >
                            {item}
                          </span>
                          <Tooltip title="Xóa">
                            <i
                              className="fa fa-times search-history-id"
                              onClick={() => handleSearch(item, true)}
                            />
                          </Tooltip>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
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
  ({ auth: { auth }, cache: { historySearch } }) => ({ auth, historySearch }),
  ({
    auth: { _logout },
    cache: { saveHistory },
    post: { _getList: getListPost },
  }) => ({ _logout, saveHistory, getListPost })
)(Header);
