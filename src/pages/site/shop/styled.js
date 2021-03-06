import styled from "styled-components";

export const WrapperStyled = styled.div`
  /* Button Style */
  font-size: 14px;
  .btn {
    min-width: 40px;
    height: 34px;
    border: none;
    border-radius: 2px;
    font-size: 14px;
    padding: 0 12px;
    cursor: pointer;
    color: var(--text-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    line-height: 2rem;
  }

  .btn.btn--size-s {
    height: 32px;
    font-size: 14px;
    padding: 0 10px;
  }

  .btn.btn--primary {
    color: white;
    background-color: var(--var-color);
  }

  .btn.btn--primary:hover {
    background-color: #f8642e;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes growth {
    from {
      transform: scale(0.7);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes headerNotifyGrowth {
    from {
      transform: scale(0);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Responsive */
  .grid__row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
  }

  /* Test */
  .grid__column-2 {
    padding-left: 5px;
    padding-right: 5px;
    width: 16.6667%;
  }

  .grid__column-2-4 {
    padding-left: 5px;
    padding-right: 5px;
    width: 20%;
  }

  .grid__column-10 {
    padding-left: 5px;
    padding-right: 5px;
    width: 83.3334%;
  }

  /* Selection */
  .select-input {
    position: relative;
    min-width: 200px;
    height: 34px;
    padding: 0 12px;
    border-radius: 2px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .select-input::after {
    position: absolute;
    content: "";
    right: 0;
    top: 33px;
    height: 4px;
    width: 100%;
  }

  .select-input__label {
    font-size: 14px;
  }

  .select-input__icon {
    color: #b3b3b3;
    position: relative;
    top: 1px;
    font-size: 14px;
  }

  .select-input:hover .select-input__list {
    display: block;
  }

  .select-input__list {
    position: absolute;
    left: 0;
    right: 0;
    top: 21px;
    border-radius: 2px;
    background-color: white;
    padding: 4px 16px;
    list-style: none;
    display: none;
    z-index: 1;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  .select-input__item {
    font-size: 14px;
    color: var(--text-color);
    display: block;
    padding: 12px 0;
    text-decoration: none;
    cursor: pointer;
  }

  .select-input__item:hover {
    color: var(--var-color);
  }

  /* Pagination */
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  .pagination-item {
    margin: 0 15px;
  }

  .pagination-item--active .pagination-item__link {
    color: white;
    background-color: var(--var-color);
  }

  .pagination-item--active .pagination-item__link:hover {
    background-color: #f8642e;
  }

  .pagination-item__link {
    --height: 30px;
    display: block;
    text-decoration: none;
    font-size: 1.3rem;
    color: #939393;
    min-width: 40px;
    height: var(--height);
    line-height: var(--height);
    text-align: center;
    border-radius: 2px;
  }

  .container_poster {
    border: 1px solid #ddd;
    height: auto;
    margin-top: 0;
    display: flex;
    flex-direction: row;
  }

  #item1 {
    margin-left: 10%;
    flex-basis: 20%;
    height: auto;
  }
  #item2 {
    flex-basis: 40%;
    height: auto;
  }
  #item4 {
    flex-basis: 20%;
    height: auto;
  }

  /* .container {
  border: 1px solid #ddd;
  background-color: white;
  height: auto;
  margin: 30px 20% 0 20%;
} */

  body {
    margin: 0px;
    font-family: Arial;
    position: relative;
  }

  * {
    box-sizing: inherit;
  }

  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  input[type="checkbox"] {
    margin: 0;
  }

  input {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: 0;
  }

  .app {
    /* overflow: hidden; */
    background-color: #f5f5f5;
    position: absolute;
    /* z-index: -999; */
    width: 100%;
    margin-top: 40px;
  }

  .header {
    background-image: linear-gradient(
        rgb(255 50 31 / 90%),
        rgb(243 123 83 / 80%)
      ),
      url(../Images/grass.png);
    background-repeat: repeat-x;
    background-size: 20%;
    height: var(--header-height);
  }

  .header__navbar {
    display: flex;
    justify-content: space-between;
    height: var(--navbar-height);
  }

  .header__navbar-list {
    list-style: none;
    padding-left: 0px;
    margin: 10px 0 0 0;
    display: flex;
  }

  .header__navbar-item {
    margin: 0px 8px;
    position: relative;
  }

  .header__navbar-user {
    position: relative;
  }

  .header__navbar-user::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    right: 0;
    top: 13px;
    display: block;
  }

  .header__navbar-user-img {
    width: 22px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .header__navbar-user-name {
    margin-left: 4px;
    font-size: 0.9rem;
  }

  .header__navbar-user:hover .header__navbar-user-menu {
    display: block;
  }

  .header__navbar-user-menu {
    position: absolute;
    z-index: 9;
    padding-left: 0;
    top: 100%;
    right: 0;
    border-radius: 2px;
    background-color: white;
    width: 160px;
    list-style: none;
    box-shadow: 1px 1px 2px #c3c1c1;
    display: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  .header__navbar-user-menu::before {
    content: "";
    border-style: solid;
    border-width: 20px 25px;
    border-color: transparent transparent white transparent;
    position: absolute;
    right: 15px;
    top: -30px;
  }

  .header__navbar-user-item--separate {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .header__navbar-user-item a {
    font-size: 0.9rem;
    padding: 8px 16px;
    display: block;
    color: var(--text-color);
  }

  .header__navbar-user-item a:hover {
    background-color: #fafafa;
  }

  .header__navbar-user-item a:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  .header__navbar-user-item a:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .header__navbar-item-has-qr:hover .header__qr {
    display: flex;
  }

  .header__navbar-item,
  .header__navbar-item-link {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: white;
    z-index: 1;
    cursor: pointer;
  }

  .header__navbar-icon-link {
    color: white;
  }

  .header__navbar-item:hover,
  .header__navbar-icon-link:hover,
  .header__navbar-item-link:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    z-index: 2;
  }

  .header__navbar-item-separate::after {
    content: "";
    display: block;
    position: absolute;
    border-right: 2px solid #ffffff38;
    height: 15px;
    right: -10px;
    top: 17%;
  }

  .header__navbar-icon {
    font-size: 1.1rem;
    margin: 0px 4px;
  }

  .header__navbar-title--no-pointer {
    cursor: text;
    color: white;
    margin: 0px 4px 0px 0px;
  }

  /* Header QR code */

  .header__qr {
    width: 186px;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    left: 0;
    top: 140%;
    padding: 8px 8px 0 8px;
    border-radius: 2px;
    display: none;
    box-shadow: 1px 2px 3px -2px rgba(0, 0, 0, 0.8);
    z-index: 8;
  }

  .header__qr::before {
    position: absolute;
    left: 0;
    top: -16px;
    width: 100%;
    height: 20px;
    content: "";
  }

  .header__qr-img {
    width: 90%;
    align-self: center;
  }

  .header__qr-apps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
  }

  .header__qr-link:nth-child(1) {
    margin-left: 7px;
  }

  .header__qr-link:nth-child(2) {
    margin-right: 7px;
  }

  .header__qr-dowload-img {
    width: 74px;
    object-fit: contain;
  }

  /* Header Notification */
  .header__notify {
    position: absolute;
    top: 127%;
    right: 0;
    width: 404px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    user-select: none;
    cursor: pointer;
    transform-origin: calc(100% - 48px) top;
    opacity: 0;
    transform: scale(0) translateZ(0);
    transition: all 0.25s ease;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .header__navbar-item--has-notify:hover .header__notify {
    opacity: 1;
    transform: scale(1);
  }

  .header__notify::before {
    content: "";
    border-style: solid;
    border-width: 21px 26px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    position: absolute;
    right: 23px;
    top: -30px;
  }

  .header__notify::after {
    content: "";
    position: absolute;
    display: block;
    right: 0;
    top: -10px;
    width: 90px;
    height: 20px;
    background: transparent;
  }

  .header__notify-header {
    height: 38px;
    line-height: 38px;
    color: rgba(0, 0, 0, 0.4);
    background-color: white;
    text-transform: capitalize;
    padding-left: 10px;
    font-size: 0.875rem;
  }

  .header__notify-header h3 {
    color: #acaaaa;
    margin: 0 0 0 12px;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 40px;
  }

  .header__notify-list {
    padding-left: 0;
  }

  .header__notify-item {
    display: flex;
  }

  .header__notify-item:hover {
    background-color: #f8f8f8;
  }

  .header__notify-item--viewed {
    background-color: #fff2ee;
  }

  .header__notify-link {
    display: flex;
    padding: 12px;
  }

  .header__notify-img {
    width: 48px;
    object-fit: contain;
    background-position: center;
  }

  .header__notify-info {
    margin-left: 12px;
  }

  .header__notify-name {
    display: block;
    font-size: 0.875rem;
    color: var(--text-color);
    line-height: 1.3rem;
  }

  .header__notify-description {
    display: block;
    font-size: 0.78rem;
    color: #616161;
    line-height: 1.5rem;
  }

  .header__notify-footer {
    display: flex;
  }
  .header__notify-footer-btn {
    color: var(--text-color);
    padding: 8px 0;
    width: 100%;
    font-size: 0.87rem;
    text-align: center;
  }

  /* Modal layout */
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    animation: fadeIn ease 0.1s;
  }

  .modal__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal__body {
    margin: auto;
    position: relative;
    z-index: 1;
    animation: growth ease-out 0.2s;
  }

  #register-form {
    display: block;
  }

  #login-form {
    display: none;
    z-index: 10000;
  }

  #login-form .auth-form__switch-wrapper {
    margin-top: 15px;
  }

  /* Authen Modal */
  .auth-form {
    width: 450px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden; /* Hidden Children*/
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  }

  .auth-form__container {
    padding: 0 32px;
  }

  .auth-form__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0 15px 0;
  }

  .auth-form__heading {
    font-size: 14px;
    text-transform: capitalize;
  }

  .auth-form__switch-btn {
    font-size: 0.9rem;
    color: var(--var-color);
    text-transform: capitalize;
    cursor: pointer;
  }

  .auth-form__switch-btn:hover {
    color: #f8642e;
  }

  .auth-form__group {
    padding-bottom: 12px;
  }

  .auth-form__group input[type="text"],
  input[type="password"] {
    font-size: 0.93rem;
  }

  .auth-form__label {
    font-weight: 700;
  }

  .auth-form__input {
    width: 100%;
    height: 45px;
    margin: 8px 0 2px;
    padding: 0 12px;
    border: 1px solid #8d8d8d;
    font-size: 1.1rem;
    border-radius: 2px;
  }

  .auth-form__input:hover {
    border-color: var(--var-color);
  }

  .auth-form__input:focus {
    border-color: #595959;
  }

  .auth-form__policy-text {
    font-size: 0.9rem;
    text-align: center;
    padding: 0 12px;
  }

  .auth-form__text-link {
    color: var(--var-color);
  }

  .auth-form__text-link:hover {
    color: #f8642e;
  }

  .auth-form__switch-wrapper {
    text-align: center;
    padding-top: 10px;
  }

  .auth-form__switch-text {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.26);
  }

  .auth-form__controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 35px;
  }

  .auth-form__controls > button {
    height: 36px;
    line-height: 36px;
  }

  .auth-form__controls > .btn--primary {
    font-size: 0.9rem;
  }

  .auth-form__controls-back {
    background-color: transparent;
    margin-right: 8px;
    border: 1px solid #8d8d8d;
    color: #8d8d8d;
    font-size: 0.9rem;
  }

  .auth-form__socials {
    padding: 20px 36px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .auth-form__socials-icon {
    font-size: 1.1rem;
  }

  .auth-form__socials--facebook {
    color: white;
    background-color: #1877f2;
    min-width: 180px;
  }

  .auth-form__socials--facebook:hover {
    background-color: #166fe5;
  }

  .auth-form__socials--google {
    color: white;
    background-color: #e94235;
    min-width: 180px;
  }

  .auth-form__socials--google:hover {
    background-color: #df2f23ef;
  }

  .auth-form__socials-title {
    font-size: 0.875rem;
    margin: 0 5px 0 12px;
  }

  .auth-form__aside {
    margin-top: 20px;
  }

  .auth-form__help {
    display: flex;
    justify-content: flex-end;
    /* font-size: 1000px; */
  }

  .auth-form__help-link {
    color: #9b9b9b;
    font-size: 0.9rem;
  }

  .auth-form__help-separate {
    display: block;
    height: 22px;
    margin: -2px 16px 0;
    border-left: 1px solid #c8c7c7;
  }

  .auth-form__help-forgot {
    color: var(--var-color);
  }

  /* Nav mobile*/
  .nav__mobile {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 320px;
    max-width: 100%;
    background-color: white;
    z-index: 12;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform linear 0.2s, opacity ease 0.2s;
    display: none;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  }

  .nav__mobile-list {
    padding-left: 0;
  }

  .nav__link {
    color: #333;
    display: block;
  }

  .nav__mobile-close--icon {
    font-size: 2rem;
    color: #666;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .nav__input:checked ~ .nav__overlay {
    display: block;
  }

  .nav__input:checked ~ .nav__mobile {
    transform: translateX(0%);
    opacity: 1;
    display: block;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Header with search */
  .header-with-search {
    height: var(--header-with-search-height);
    display: flex;
    align-items: center;
    margin: 0 8px;
    position: relative;
  }

  .mobile__menu-btn {
    display: none;
  }

  .mobile__menu-link {
    display: block;
  }

  .mobile__menu-icon {
    color: white;
    font-size: 2.2rem;
    position: relative;
    left: 4px;
  }

  .nav__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 11;
    display: none;
    animation: fadeIn ease 0.2s;
  }

  .header__mobile-search {
    padding: 0 12px;
    display: none;
    position: absolute;
    left: 39px;
    top: 23px;
  }

  .header__mobile-search-icon {
    font-size: 1.3rem;
    color: white;
  }

  .header__logo {
    width: 200px;
  }

  /* Some web no support */
  .header__logo-link {
    color: transparent;
    display: block;
    line-height: 0;
    width: 160px;
    height: 91px;
  }

  .header__search-checkbox:checked ~ .header__search {
    display: flex;
  }

  .header__logo-img {
    position: relative;
    top: -5px;
    left: 11px;
    width: 100%;
    object-fit: contain;
  }

  .header__search {
    flex: 1;
    height: 40px;
    background-color: white;
    border-radius: 2px;
    display: flex;
    align-items: center;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.09);
  }

  .header__cart {
    width: 173px;
    text-align: center;
  }

  .btn-add-list {
    margin: 20px 110px 0;
    .btn-add {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--var-color);
      border-radius: 50%;
    }
  
    .btn-add-icon {
      color: white;
      font-size: 25px;
    }
  }

  .buy-bottom {
    position: fixed;
    bottom: 10px;
    right: 50px;
    cursor: pointer;
    .card-fixed {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--var-color);
      border-radius: 50%;
    }

    .header__cart-icon {
      color: white;
      font-size: 18px;
      margin-top: 6px;
    }

    .header__cart-wrap-notice {
      position: absolute;
      padding: 1px 7px;
      background-color: white;
      color: var(--var-color);
      font-size: 13px;
      line-height: 1.5rem;
      border-radius: 10px;
      border: 1px solid #f14f14;
      top: 1px;
      right: -8px;
    }
  }

  .header__cart-wrap {
    position: relative;
    display: inline-block;
    padding: 0 8px;
    cursor: pointer;
  }

  .header__cart-wrap:hover .header__cart-list {
    transform: scale(1);
    opacity: 1;
  }

  .header__cart-list {
    position: absolute;
    top: calc(100% + 10px);
    right: -5px;
    background-color: white;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    transform: scale(0) translateZ(0);
    opacity: 0;
    transition: all 0.25s ease;
    transform-origin: calc(100% - 32px) top;
    cursor: pointer;
    z-index: 1;
  }

  .header__cart-heading {
    text-align: left;
    text-transform: capitalize;
    padding-left: 10px;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.4);
    height: 38px;
    line-height: 38px;
  }

  .header__cart-list-item {
    padding-left: 0;
    list-style: none;
    max-height: 60vh;
    overflow-y: auto;
    margin: 0;
  }

  .header__cart-item {
    display: flex;
    align-items: center;
  }

  .header__cart-item:hover {
    background-color: #f8f8f8;
  }

  .header__cart-img-wrapper {
    width: 15%;
    margin: 12px;
  }

  .header__cart-img {
    width: 100%;
    object-fit: contain;
  }

  .header__cart-item-info {
    width: 76%;
    margin-right: 12px;
  }

  .header__cart-item-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__cart-item-name {
    font-size: 0.875rem;
    margin: 0;
    width: 62%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-align: left;
  }

  .header__cart-item-price {
    color: var(--var-color);
    font-size: 0.875rem;
  }

  .header__cart-item-multiply {
    font-size: 0.7rem;
    margin: 0 4px;
    color: #6d6d6d;
  }

  .header__cart-item-qnt {
    font-size: 0.7rem;
    color: #6d6d6d;
  }

  .header__cart-item-body {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
  }

  .header__cart-item-description {
    color: #6d6d6d;
    font-size: 0.78rem;
  }

  .header__cart-item-remove {
    font-size: 0.875rem;
  }

  .header__cart-item-remove:hover {
    cursor: pointer;
    color: var(--var-color);
  }

  .header__cart-view-cart {
    float: right;
    margin: 10px 10px 10px 0;
    font-size: 0.9rem;
    min-width: 120px;
  }

  .header__cart-view-cart:hover {
    background-color: #f8642e;
  }

  .header__cart-list::after {
    content: "";
    position: absolute;
    right: -1px;
    top: -30px;
    border-width: 21px 26px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    cursor: pointer;
  }

  .header__cart-list--no-cart {
    padding: 24px 0;
  }

  .header__cart-list--no-cart .header__cart-no-card-img,
  .header__cart-list--no-cart .header__cart-list-no-card-msg {
    display: block;
  }

  .header__cart-no-card-img {
    margin-left: auto;
    margin-right: auto;
    width: 28%;
    display: none;
  }

  .header__cart-list-no-card-msg {
    font-size: 14px;
    margin-top: 14px;
    display: none;
  }

  .header__search-input-wrap {
    flex: 1;
    position: relative;
  }

  .header__search-input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 14px;
    padding: 0 16px;
    outline: 0;
    border-radius: 2px;
  }

  .header__search-btn {
    background-color: var(--var-color);
    height: 34px;
    width: 60px;
    border: none;
    border-radius: 2px;
    margin-right: 3px;
  }

  .header__search-btn:hover {
    background-color: #f8642e;
    cursor: pointer;
  }

  .header__search-btn-icon {
    font-size: 14px;
    color: white;
  }

  .header__search-input:focus ~ .header__search-history {
    display: block;
  }

  /* Search history */
  .header__search-history {
    position: absolute;
    top: calc(100% + 15px);
    left: 0;
    width: calc(100% - 16px);
    background-color: white;
    box-shadow: 0 1px 2px #c3c1c1;
    overflow: hidden;
    display: none;
    z-index: 1;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  .header__search-history-heading {
    margin: 8px 12px;
    font-size: 0.875rem;
    color: #a4a3a3;
  }

  .header__search-history-list {
    padding-left: 0;
    list-style: none;
    margin: 6px 0 0;
  }

  .header__search-history-item {
    height: 38px;
    padding: 0 12px;
  }

  .header__search-history-item:hover {
    background-color: #fafafa;
  }

  .header__search-history-item a {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.8);
    line-height: 38px;
    display: block;
  }

  /* Header sort bar */
  .header__sort-bar {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    height: var(--header-sort-bar-height);
    background-color: white;
    list-style: none;
    margin: 0;
    padding-left: 0;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    display: none;
  }

  .header__sort-item {
    flex: 1;
  }

  .header__sort-link {
    color: var(--text-color);
    font-size: 0.9rem;
    display: block;
    height: 100%;
    line-height: var(--header-sort-bar-height);
    text-align: center;
    position: relative;
  }

  .header__sort-link::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 60%;
    border-left: 1px solid #e5e5e5;
    transform: translateY(-50%);
  }

  .header__sort-item--active .header__sort-link {
    color: var(--var-color);
  }

  .header__sort-item--active .header__sort-link::after {
    content: "";
    position: absolute;
    background-color: var(--var-color);
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
  }

  .header__sort-item:first-child .header__sort-link::before {
    display: none;
  }

  /* App container */
  .app__container {
    background-color: #f5f5f5;
    width: 100%;
  }

  .app__content {
    padding-top: 25px;
  }

  .category {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
  }

  .category__heading-wrapper {
    display: flex;
    align-items: center;
    background-color: white;
    line-height: 34px;
    height: 44px;
    width: 98%;
    padding-left: 12px;
    border-radius: 5px;
    color: rgb(102, 102, 102);
    box-shadow: 0 1.2px 3px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 3px;
  }

  .category__heading-icon {
    font-size: 1.05rem;
    margin-right: 4.3px;
    transform: rotate(0deg);
  }

  .category__heading {
    font-size: 14px;
    font-weight: 600;
  }

  .category-list {
    padding: 0 0 8px 0;
    list-style: none;
    margin: 0;
    width: 100%;
  }

  .category-item {
    display: flex;
    align-items: center;
    padding-left: 12px;
    margin: 10px 0;
    line-height: 30px;
    justify-content: flex-end;
  }

  .category-item__icon {
    min-width: 9px;
    opacity: 0;
    transition: opacity 110ms ease-out;
    color: var(--var-color);
  }

  .category-item i {
    font-size: 14px;
  }

  .category-item:hover .category-item__icon,
  .category-item--active .category-item__icon {
    opacity: 1;
  }

  .category-item__link {
    position: relative;
    font-size: 14px;
    color: var(--text-color);
    display: block;
    width: 95%;
  }

  .category-item:hover i,
  .category-item--active i,
  .category-item--active .category-item__link {
    color: var(--var-color);
  }

  /* Mobile category*/
  .mobile-category {
    display: none;
  }

  .mobile-category__list {
    display: flex;
    list-style: none;
    padding-left: 0;
    max-width: 100%;
    overflow-x: auto;
  }

  .mobile-category__list::-webkit-scrollbar {
    display: none;
  }

  .mobile-category__item {
    flex-shrink: 0;
    margin-right: 10px;
  }

  .mobile-category__item:nth-of-type(3n + 1) .mobile-category__link {
    background-color: #87afd8;
  }

  .mobile-category__item:nth-of-type(3n + 2) .mobile-category__link {
    background-color: #76c9bd;
  }

  .mobile-category__item:nth-of-type(3n + 3) .mobile-category__link {
    background-color: #88cf81;
  }

  .mobile-category__link {
    --line-height: 1.4rem;
    color: white;
    font-size: 0.9rem;
    line-height: var(--line-height);
    height: calc(var(--line-height) * 2);
    overflow: hidden;
    text-align: center;
    width: 110px;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    border-radius: 4px;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    padding: 0 6px;
  }

  /* Home sort + filter */
  .home-filter {
    background-color: rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    padding: 12px 22px;
    border-radius: 2px;
  }

  .home-filter__label {
    color: #555;
    font-size: 14px;
    margin-right: 16px;
  }

  .home-filter__btn {
    min-width: 90px;
    margin-right: 12px;
    font-size: 14px;
  }

  .home-filter__page {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .home-filter__page-num {
    font-size: 14px;
    color: var(--text-color);
    margin-right: 22px;
  }

  .home-filter__page-current {
    color: var(--var-color);
  }

  .home-filter__page-control {
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    width: 72px;
    height: 36px;
    box-shadow: 0 1px 2px #c3c1c1;
  }

  .home-filter__page-btn {
    display: flex;
    flex: 1;
    background-color: white;
  }

  .home-filter__page-btn-disabled {
    background-color: #f9f9f9;
    cursor: default;
  }

  .home-filter__page-btn-disabled .home-filter__page-icon {
    color: #ccc;
  }

  .home-filter__page-btn:first-child {
    border-right: 1px solid #eee;
  }

  .home-filter__page-icon {
    margin: auto;
    font-size: 14px;
    color: #555;
  }

  /* Product item */
  .home-product {
    margin-bottom: 10px;
  }

  .home-product-item {
    display: block;
    position: relative;
    margin-top: 10px;
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 1.5px 1.5px 0 rgba(0, 0, 0, 0.15);
    transition: box-shadow ease-in 0.1s;
  }

  .home-product-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 1.5px 5px rgba(0, 0, 0, 0.25);
  }

  .home-product-item__img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  .home-product-item__name {
    font-size: 14px;
    /* font-weight: 600; */
    color: var(--text-color);
    line-height: 1.6rem;
    height: 3rem;
    margin: 10px 10px 8px;
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
  }

  .home-product-item__price {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: 3px;
  }

  .home-product-item__price-old {
    margin-left: 10px;
    font-size: 14px;
    color: #666;
    text-decoration: line-through;
  }

  .home-product-item__price-current {
    margin-left: 10px;
    font-size: 14px;
    color: var(--var-color);
  }

  .home-product-item__action {
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 0;
  }

  .home-product-item__like {
    font-size: 14px;
  }

  i.home-product-item__like-icon-fill {
    color: #f63d30;
    display: none;
  }

  .home-product-item__like--liked .home-product-item__like-icon-fill {
    display: inline-block;
  }

  .home-product-item__like--liked .home-product-item__like-icon-empty {
    display: none;
  }

  .home-product-item__rating {
    margin-left: auto;
    font-size: 0.7rem;
    color: #d5d5d5;
  }

  .home-product-item__star--gold {
    color: var(--star-gold-color);
  }

  .home-product-item__sold {
    font-size: 14px;
    color: var(--text-color);
    margin-left: 6px;
  }

  .home-product-item__origin {
    display: flex;
    justify-content: space-between;
    margin: 7px 10px 0;
    color: #595959;
    font-size: 14px;
    padding-bottom: 4px;
    align-items: center;
    .home-product-item__brand {
      background-color: var(--var-color);
      color: white;
      padding: 2px 5px;
      border-radius: 3px;
      transform: scale(1);
      transition: all 0.4s;
    }

    .is-add {
      background-color: var(--color-green);
    }

    .home-product-item__brand:hover {
      transform: scale(1.1);
    }
  }

  .product-favourite {
    position: absolute;
    top: 10px;
    left: -4px;
    color: white;
    background-color: var(--var-color);
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.4rem;
    padding-right: 5px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .product-favourite::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    border-top: 3px solid #c34e29;
    border-left: 3px solid transparent;
    filter: brightness(60%);
  }

  .product-favourite span {
    color: white;
  }

  .product-favourite i {
    color: white;
    font-size: 0.7rem;
    margin: 0 1px 0 5px;
  }

  .product-sale-off {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 36px;
    text-align: center;
    background-color: rgba(255, 216, 64, 0.94);
    border-top-right-radius: 2px;
  }

  .product-sale-off::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    border-width: 0 20px 5px;
    border-style: solid;
    border-color: transparent rgba(255, 216, 64, 0.94) transparent
      rgba(255, 216, 64, 0.94);
  }

  .product-sale-off__percent {
    color: #ee4d2d;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.4rem;
  }

  .product-sale-off__label {
    color: white;
    font-size: 14px;
    position: relative;
    top: -5px;
    font-weight: 600;
  }

  .home-product__pagination {
    margin: 48px 0 32px 0;
    padding-left: 0;
  }

  /* Footer */
  .footer {
    padding-top: 16px;
    border-top: 4px solid var(--var-color);
  }

  .footer__heading {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.54);
  }

  .footer-list {
    margin-top: 5px;
    padding-left: 0;
    list-style: none;
  }

  .footer-item__link {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    padding: 2px 0;
    display: flex;
    align-items: center;
  }

  .footer-item__link:hover {
    color: var(--var-color);
  }

  .footer-item__icon {
    font-size: 14px;
    margin: -1px 8px 0 0;
  }

  .footer__download {
    display: flex;
    margin-top: 8px;
  }

  .footer__download-qr {
    /* margin-top: 8px; */
    width: 80px;
    object-fit: contain;
  }

  .footer__download-apps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
  }

  .footer__download-app-img {
    width: 75px;
    object-fit: contain;
  }

  .footer__download-app-link {
    color: transparent;
  }

  .footer__bottom {
    margin-top: 36px;
    padding: 12px 0;
    background-color: #f5f5f5;
  }

  .footer__text {
    margin: 0;
    text-align: center;
    font-size: 14px;
    color: #737373;
  }

  .grid {
    width: 100%;
    display: block;
    padding: 0;
  }

  .grid.wide {
    /* max-width: 1200px; */
    padding: 0 100px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -4px;
    margin-right: -4px;
  }

  .row.no-gutters {
    margin-left: 0;
    margin-right: 0;
  }

  .col {
    padding-left: 4px;
    padding-right: 4px;
  }

  .row.no-gutters .col {
    padding-left: 0;
    padding-right: 0;
  }

  .c-0 {
    display: none;
  }

  .c-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }

  .c-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }

  .c-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .c-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .c-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }

  .c-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .c-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }

  .c-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .c-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .c-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }

  .c-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }

  .c-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .c-o-1 {
    margin-left: 8.33333%;
  }

  .c-o-2 {
    margin-left: 16.66667%;
  }

  .c-o-3 {
    margin-left: 25%;
  }

  .c-o-4 {
    margin-left: 33.33333%;
  }

  .c-o-5 {
    margin-left: 41.66667%;
  }

  .c-o-6 {
    margin-left: 50%;
  }

  .c-o-7 {
    margin-left: 58.33333%;
  }

  .c-o-8 {
    margin-left: 66.66667%;
  }

  .c-o-9 {
    margin-left: 75%;
  }

  .c-o-10 {
    margin-left: 83.33333%;
  }

  .c-o-11 {
    margin-left: 91.66667%;
  }

  /* >= Tablet */
  @media (min-width: 740px) {
    .row {
      margin-left: -8px;
      margin-right: -8px;
    }

    .col {
      padding-left: 8px;
      padding-right: 8px;
    }

    .m-0 {
      display: none;
    }

    .m-1,
    .m-2,
    .m-3,
    .m-4,
    .m-5,
    .m-6,
    .m-7,
    .m-8,
    .m-9,
    .m-10,
    .m-11,
    .m-12 {
      display: block;
    }

    .m-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }

    .m-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .m-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .m-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .m-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }

    .m-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .m-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }

    .m-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }

    .m-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .m-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }

    .m-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }

    .m-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .m-o-1 {
      margin-left: 8.33333%;
    }

    .m-o-2 {
      margin-left: 16.66667%;
    }

    .m-o-3 {
      margin-left: 25%;
    }

    .m-o-4 {
      margin-left: 33.33333%;
    }

    .m-o-5 {
      margin-left: 41.66667%;
    }

    .m-o-6 {
      margin-left: 50%;
    }

    .m-o-7 {
      margin-left: 58.33333%;
    }

    .m-o-8 {
      margin-left: 66.66667%;
    }

    .m-o-9 {
      margin-left: 75%;
    }

    .m-o-10 {
      margin-left: 83.33333%;
    }

    .m-o-11 {
      margin-left: 91.66667%;
    }
  }

  /* PC medium resolution > */
  @media (min-width: 1113px) {
    .row {
      margin-left: -12px;
      margin-right: -12px;
    }

    .row.sm-gutter {
      margin-left: -5px;
      margin-right: -5px;
    }

    .col {
      padding-left: 12px;
      padding-right: 12px;
    }

    .row.sm-gutter .col {
      padding-left: 5px;
      padding-right: 5px;
    }

    .l-0 {
      display: none;
    }

    .l-1,
    .l-2,
    .l-2-4,
    .l-3,
    .l-4,
    .l-5,
    .l-6,
    .l-7,
    .l-8,
    .l-9,
    .l-10,
    .l-11,
    .l-12 {
      display: block;
    }

    .l-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }

    .l-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .l-2-4 {
      flex: 0 0 20%;
      max-width: 20%;
    }

    .l-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .l-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .l-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }

    .l-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .l-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }

    .l-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }

    .l-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .l-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }

    .l-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }

    .l-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .l-o-1 {
      margin-left: 8.33333%;
    }

    .l-o-2 {
      margin-left: 16.66667%;
    }

    .l-o-3 {
      margin-left: 25%;
    }

    .l-o-4 {
      margin-left: 33.33333%;
    }

    .l-o-5 {
      margin-left: 41.66667%;
    }

    .l-o-6 {
      margin-left: 50%;
    }

    .l-o-7 {
      margin-left: 58.33333%;
    }

    .l-o-8 {
      margin-left: 66.66667%;
    }

    .l-o-9 {
      margin-left: 75%;
    }

    .l-o-10 {
      margin-left: 83.33333%;
    }

    .l-o-11 {
      margin-left: 91.66667%;
    }
  }

  /* Tablet - PC low resolution */
  @media (min-width: 740px) and (max-width: 1023px) {
    .wide {
      width: 644px;
    }
  }

  /* > PC low resolution */
  @media (min-width: 1024px) and (max-width: 1239px) {
    .wide {
      width: 984px;
    }

    .wide .row {
      margin-left: -12px;
      margin-right: -12px;
    }

    .wide .row.sm-gutter {
      margin-left: -5px;
      margin-right: -5px;
    }

    .wide .col {
      padding-left: 12px;
      padding-right: 12px;
    }

    .wide .row.sm-gutter .col {
      padding-left: 5px;
      padding-right: 5px;
    }

    .wide .l-0 {
      display: none;
    }

    .wide .l-1,
    .wide .l-2,
    .wide .l-2-4,
    .wide .l-3,
    .wide .l-4,
    .wide .l-5,
    .wide .l-6,
    .wide .l-7,
    .wide .l-8,
    .wide .l-9,
    .wide .l-10,
    .wide .l-11,
    .wide .l-12 {
      display: block;
    }

    .wide .l-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }

    .wide .l-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .wide .l-2-4 {
      flex: 0 0 20%;
      max-width: 20%;
    }

    .wide .l-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .wide .l-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .wide .l-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }

    .wide .l-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .wide .l-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }

    .wide .l-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }

    .wide .l-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .wide .l-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }

    .wide .l-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }

    .wide .l-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .wide .l-o-1 {
      margin-left: 8.33333%;
    }

    .wide .l-o-2 {
      margin-left: 16.66667%;
    }

    .wide .l-o-3 {
      margin-left: 25%;
    }

    .wide .l-o-4 {
      margin-left: 33.33333%;
    }

    .wide .l-o-5 {
      margin-left: 41.66667%;
    }

    .wide .l-o-6 {
      margin-left: 50%;
    }

    .wide .l-o-7 {
      margin-left: 58.33333%;
    }

    .wide .l-o-8 {
      margin-left: 66.66667%;
    }

    .wide .l-o-9 {
      margin-left: 75%;
    }

    .wide .l-o-10 {
      margin-left: 83.33333%;
    }

    .wide .l-o-11 {
      margin-left: 91.66667%;
    }
  }
`;

export const StyledGioHang = styled.div`
  .list-product {
    .item {
      display: flex;
      align-items: baseline;
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ccc;

      .img {
        width: 15%;
        img {
          width: 50px;
          height: 50px;
        }
      }

      .name-product {
        width: 30%;
      }
      .price {
        width: 20%;
      }
      .number {
        width: 30%;
        display: flex;

        .number-count {
          width: 60%;
        }
        .input {
          width: 30%;
          input {
            width: 100%;
            outline: none;
          }
        }
      }
      .btn-delete {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-del {
          cursor: pointer;
          background-color: #eb5757;
          color: white;
          font-weight: bold;
          padding: 2px 10px;
          border-radius: 5px;
        }
      }
    }
  }
  .total {
    display: flex;
    justify-content: end;
    align-items: center;
    border-top: 1px solid #ccc;
    span {
      margin-right: 10px;
    }
    span:last-child {
      font-size: 18px;
    }
  }
`;
