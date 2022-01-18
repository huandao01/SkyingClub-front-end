import { Button, Spin, Tooltip } from "antd";
import React, { Profiler, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ModalProfile from "../ModalProfile";
import { routes } from "./constant";
import { dataHistorySearch } from "./data";
import { WrapperStyled } from "./styled";
import clientUtils from "@utils/client-utils";
import ManagerMember from "../MemberManager";
import BillManager from "../BillManager";

const Header = ({ auth, historySearch, saveHistory, _logout, getListPost }) => {
  const [state, _setState] = useState({
    openUserMenu: false,
    loading: false,
    showHistory: false,
    showProfile: false,
    showMemberManager: false,
    searchStr: "",
    showBill: false,
  });

  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (typeof e.target.className === "string") {
        if (
          e.target.className?.indexOf("header__navbar-user") === -1 &&
          e.target.nodeName != "SPAN"
        ) {
          setState({ openUserMenu: false });
        }

        if (e.target.className?.indexOf("search-history-id") === -1) {
          setState({ showHistory: false });
        }
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
          content: `${value.toLowerCase()}`,
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
              <Link to="/skyingclub/home" className="header__navbar-fun-link">
              {/* <img height= "48px" src= "/logo.jpg" /> */}
                <i className="header__navbar-fun-home fas fa-home"></i>
                Skying Club
              </Link>
            </li>
            {routes.map((item, index) => {
              if (item.children && item.children?.length > 0) {
                return (
                  <li key={index} className="header__navbar-fun">
                    <Link
                      to={item.path || "#"}
                      className="header__navbar-fun-link"
                    >
                      {item.title}
                      <i className="header__navbar-fun-link-icon fas fa-chevron-down"></i>
                    </Link>
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
                  <Link
                    to={item.path || "#"}
                    className="header__navbar-fun-link"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="header__search">
            <div className="header__search-input-wrap">
              <div className="input-search">
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
                <div
                  className="btn-search"
                  onClick={() => handleSearch(state.searchStr)}
                >
                  Tìm kiếm
                </div>
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
                  src={
                    auth.avatar
                      ? `${clientUtils.serverApi}/files/${auth.avatar}`
                      : "https://cf.shopee.vn/file/f00ff3ca6680edb907b53d0fad7d22e8_tn"
                  }
                  alt=""
                  className="header__navbar-user-img"
                />
                <span className="header__navbar-user-name">
                  {auth.full_name || "Vô danh"}
                </span>
                {state.openUserMenu && (
                  <ul className="header__navbar-user-menu-list">
                    <li
                      className="header__navbar-user-menu-link"
                      onClick={() => {
                        setState({ showProfile: true });
                      }}
                    >
                      <span>Tài Khoản của tôi</span>
                    </li>

                    {(auth?.role === "ROLE_1") && (
                    <li
                      className="header__navbar-user-menu-link"
                      onClick={() => {
                        setState({ showMemberManager: true });
                      }}
                    >
                      <span>Xem DS thành viên</span>
                    </li>)}
                    
                    {(auth?.role === "ROLE_1") && (
                    <li
                      className="header__navbar-user-menu-link"
                      onClick={() => {
                        setState({ showBill: true });
                      }}
                    >
                      <span>Xem DS đặt hàng</span>
                    </li>)}

                    <li
                      className="header__navbar-user-menu-link"
                      onClick={_logout}
                    >
                      <span>Đăng xuất</span>
                    </li>
                    <li className="header__navbar-user-menu-link header__navbar-user-menu-link-help">
                      <span>Trợ giúp</span>
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
      {state.showMemberManager && (
        <ManagerMember
          onCancel={() => {
            setState({ showMemberManager: false });
          }}
        />
      )}

      {state.showProfile && (   
        <ModalProfile
          onCancel={() => {
            setState({ showProfile: false });
          }}
        />
      )}
      {state.showBill && (   
        <BillManager
          onCancel={() => {
            setState({ showBill: false });
          }}
        />
      )}
      
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
