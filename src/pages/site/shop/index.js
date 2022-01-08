import React from "react";
import { connect } from "react-redux";
import Product from "./component/product";
import { data } from "./data";
import { WrapperStyled } from "./styled";

const Shop = ({ listAdd = [] }) => {
  return (
    <WrapperStyled>
      <div className="app">
        {/* <header className="header">
          <div className="grid wide">
            <input
              type="checkbox"
              hidden
              className="nav__input"
              id="nav-mobile-input"
            ></input>

            <div className="header-with-search">
              <label for="nav-mobile-input" className="mobile__menu-btn">
                <i className="mobile__menu-icon fas fa-bars"></i>
              </label>
              <label
                for="mobile-search-checkbox"
                className="header__mobile-search"
              >
                <i className="header__mobile-search-icon fas fa-search"></i>
              </label>
              <input
                type="checkbox"
                hidden
                className="header__search-checkbox"
                id="mobile-search-checkbox"
              />

              <div className="header__logo hide-on-tablet">
                <a href="" className="header__logo-link">
                  <img src="Images/logo.png" className="header__logo-img" />
                </a>
              </div>
              <div className="header__search">
                <div className="header__search-input-wrap">
                  <input
                    id="search_input"
                    type="text"
                    className="header__search-input"
                    placeholder="Nhập để tìm kiếm"
                  ></input>
                  <div className="header__search-history">
                    <div className="header__search-history-heading">
                      Lịch sử tìm kiếm
                    </div>
                    <ul className="header__search-history-list">
                      <li className="header__search-history-item">
                        <a href="#">Đồ chơi</a>
                      </li>
                      <li className="header__search-history-item">
                        <a href="#">Cặp sách</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <button className="header__search-btn" id="search_btn">
                  <i className="header__search-btn-icon fas fa-search"></i>
                </button>
              </div>

              <div className="header__cart">
                <div className="header__cart-wrap">
                  <i className="header__cart-icon fas fa-shopping-cart"></i>
                  <span
                    className="header__cart-wrap-notice"
                    id="number_select"
                  ></span>
                  <div className="header__cart-list">
                    <img
                      src="Images/sellout.png"
                      className="header__cart-no-card-img"
                    ></img>
                    <span className="header__cart-list-no-card-msg">
                      Chưa có sản phẩm
                    </span>

                    <div className="header__cart-heading">Sản phẩm đã thêm</div>
                    <ul
                      className="header__cart-list-item"
                      id="list_select"
                    ></ul>

                    <button
                      className="header__cart-view-cart btn btn--primary"
                      id="xem_gio_hang"
                    >
                      Xem giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="header__sort-bar">
            <li className="header__sort-item">
              <a href="" className="header__sort-link">
                Liên quan
              </a>
            </li>
            <li className="header__sort-item header__sort-item--active">
              <a href="" className="header__sort-link">
                Mới nhất
              </a>
            </li>
            <li className="header__sort-item">
              <a href="" className="header__sort-link">
                Bán chạy
              </a>
            </li>
            <li className="header__sort-item">
              <a href="" className="header__sort-link">
                Giá
              </a>
            </li>
          </ul>
        </header> */}

        <div className="container">
          <div className="grid wide">
            <div className="row sm-gutter app__content">
              <div className="col l-2 m-0 c-0">
                <div className="category-pc">
                  <nav className="category">
                    <div className="category__heading-wrapper">
                      <i className="category__heading-icon fas fa-th-large"></i>
                      <div className="category__heading">Danh Mục</div>
                    </div>

                    <ul className="category-list"></ul>
                  </nav>
                </div>
              </div>

              <div className="col l-10 m-12 c-12">
                <div className="home-filter hide-on-mobile-tablet">
                  <span className="home-filter__label">Sắp xếp theo</span>
                  <button className="home-filter__btn btn">Phổ biến</button>
                  <button className="home-filter__btn btn btn--primary">
                    Mới nhất
                  </button>
                  <button className="home-filter__btn btn">Bán chạy</button>

                  <div className="select-input">
                    <span className="select-input__label">Giá</span>
                    <i className="select-input__icon fas fa-angle-down"></i>
                    <ul className="select-input__list">
                      <li className="select-input__item">Giá: Thấp đến cao</li>
                      <li className="select-input__item">Giá: Cao đến thấp</li>
                    </ul>
                  </div>

                  <div className="home-filter__page">
                    <span className="home-filter__page-num">
                      <span className="home-filter__page-current">1</span>/14
                    </span>

                    <div className="home-filter__page-control">
                      <a
                        href=""
                        className="home-filter__page-btn home-filter__page-btn-disabled"
                      >
                        <i className="home-filter__page-icon fas fa-angle-left"></i>
                      </a>
                      <a href="" className="home-filter__page-btn">
                        <i className="home-filter__page-icon fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <nav className="mobile-category">
                  <ul className="mobile-category__list">
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Hộp bút chì màu
                      </a>
                    </li>
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Áo phông Skeleton
                      </a>
                    </li>
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Bộ lắp ghép ngôi nhà bí ẩn
                      </a>
                    </li>
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Xe chiến đấu Ender
                      </a>
                    </li>

                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Villager Lego
                      </a>
                    </li>
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Lợn nhồi bông Pigy
                      </a>
                    </li>
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Bóng ném in hình Alex
                      </a>
                    </li>
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Bình giữ nhiệt mùa đông
                      </a>
                    </li>
                    <li className="mobile-category__item">
                      <a href="" className="mobile-category__link">
                        Túi giữ ẩm cho gia đình
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="home-product">
                  <div className="row sm-gutter">
                    {data.map((item, idx) => (
                      <Product key={idx} data={item} />
                    ))}
                  </div>
                </div>

                <ul className="pagination home-product__pagination">
                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      <i className="pagination-item__icon fas fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="pagination-item pagination-item--active">
                    <a href="" className="pagination-item__link">
                      1
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      2
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      3
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      4
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      5
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      ...
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      14
                    </a>
                  </li>

                  <li className="pagination-item">
                    <a href="" className="pagination-item__link">
                      <i className="pagination-item__icon fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="grid wide footer__content">
            <div className="row">
              <div className="col l-2-3 m-3 c-6">
                <div className="footer__heading">Chăm sóc khách hàng</div>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Trung tâm trợ giúp
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Skying Club Shop
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Hướng dẫn mua hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-3 m-3 c-6">
                <div className="footer__heading">Giới thiệu</div>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Giới thiệu
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Tuyển dụng
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Điều khoản
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-3 m-3 c-6">
                <div className="footer__heading">Danh mục</div>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Đồ chơi
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Xe đua
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      Gấu bông
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-3 m-3 c-6">
                <div className="footer__heading">Theo dõi chúng tôi</div>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <i className="footer-item__icon fab fa-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <i className="footer-item__icon fab fa-instagram"></i>
                      Instagram
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <i className="footer-item__icon fab fa-twitter-square"></i>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="grid wide">
              <p className="footer__text">
                © 2022 - Bản quyền thuộc về Skying Club Shop
              </p>
            </div>
          </div>
        </footer>
      </div>

      <div className="modal">
        <div className="modal__overlay"></div>

        <div className="modal__body">
          <form id="register-form" className="auth-form fm">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <div className="auth-form__heading">Đăng ký</div>
              </div>

              <div className="auth-form__groups">
                <div className="auth-form__group">
                  <input
                    id="email"
                    rule="email"
                    type="text"
                    className="auth-form__input"
                    placeholder="Email của bạn"
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    id="password"
                    rule="password"
                    type="password"
                    className="auth-form__input"
                    placeholder="Mật khẩu của bạn"
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    id="password_confirmation"
                    rule="password_confirmation"
                    type="password"
                    className="auth-form__input"
                    placeholder="Nhập lại mật khẩu của bạn"
                  />
                  <span className="auth-form__message"></span>
                </div>
              </div>

              <div className="auth-form__aside">
                <p className="auth-form__policy-text">
                  Bằng việc đăng ký, bạn đã đồng ý với Minecraft Shop
                  <a href="" className="auth-form__text-link">
                    Điều khoản dịch vụ
                  </a>{" "}
                  &
                  <a href="" className="auth-form__text-link">
                    Chính sách bảo mật
                  </a>
                </p>

                <div className="auth-form__switch-wrapper">
                  <span className="auth-form__switch-text">
                    Bạn đã có tài khoản?
                  </span>
                  <span className="auth-form__switch-btn">Đăng nhập</span>
                </div>
              </div>

              <div className="auth-form__controls">
                <button className="btn auth-form__controls-back">
                  TRỞ LẠI
                </button>
                <button className="btn btn--primary">ĐĂNG KÝ</button>
              </div>
            </div>

            <div className="auth-form__socials">
              <a
                href=""
                className="auth-form__socials--facebook btn btn--size-s btn--with-icon"
              >
                <i className="auth-form__socials-icon fab fa-facebook-square"></i>
                <span className="auth-form__socials-title">
                  Kết nối với Facebook
                </span>
              </a>
              <a
                href=""
                className="auth-form__socials--google btn btn--size-s btn--with-icon"
              >
                <i className="auth-form__socials-icon fab fa-google"></i>
                <span className="auth-form__socials-title">
                  Kết nối với Google
                </span>
              </a>
            </div>
          </form>

          <form id="login-form" className="auth-form fm">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <div className="auth-form__heading">Đăng nhập</div>
              </div>

              <div className="auth-form__groups">
                <div className="auth-form__group">
                  <input
                    id="login-username-input"
                    rule="email"
                    type="text"
                    className="auth-form__input"
                    placeholder="Email của bạn"
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    id="login-password-input"
                    rule="password"
                    type="password"
                    className="auth-form__input"
                    placeholder="Mật khẩu của bạn"
                  />
                </div>
              </div>

              <div className="auth-form__aside">
                <div className="auth-form__help">
                  <a
                    href=""
                    className="auth-form__help-link auth-form__help-forgot"
                  >
                    Quên mật khẩu
                  </a>
                  <span className="auth-form__help-separate"></span>
                  <a href="" className="auth-form__help-link">
                    Cần trợ giúp?
                  </a>
                </div>
              </div>

              <div className="auth-form__controls">
                <button className="btn auth-form__controls-back">
                  TRỞ LẠI
                </button>
                <button id="btn-login" className="btn btn--primary">
                  ĐĂNG NHẬP
                </button>
              </div>

              <div className="auth-form__switch-wrapper">
                <span className="auth-form__switch-text">
                  Bạn chưa có tài khoản?
                </span>
                <span className="auth-form__switch-btn">Đăng ký</span>
              </div>
            </div>

            <div className="auth-form__socials">
              <a
                href=""
                className="auth-form__socials--facebook btn btn--size-s btn--with-icon"
              >
                <i className="auth-form__socials-icon fab fa-facebook-square"></i>
                <span className="auth-form__socials-title">
                  Kết nối với Facebook
                </span>
              </a>
              <a
                href=""
                className="auth-form__socials--google btn btn--size-s btn--with-icon"
              >
                <i className="auth-form__socials-icon fab fa-google"></i>
                <span className="auth-form__socials-title">
                  Kết nối với Google
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="buy-bottom">
        <div className="card-fixed">
          <i className="header__cart-icon fas fa-shopping-cart"></i>
          <span className="header__cart-wrap-notice" id="number_select">
            {listAdd.length}
          </span>
        </div>
      </div>
    </WrapperStyled>
  );
};

export default connect(({ shop: { listAdd } }) => ({ listAdd }))(Shop);
