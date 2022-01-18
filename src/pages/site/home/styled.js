import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  /* Reset CSS */
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-120px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .container_list_event {
    flex: 1;
    margin-top: 25px;
    text-align: center;
  }
  .container_event{
    width: 300px;
    height: 200px;
    margin: 300
  }

  /* Container */
  .container {
    height: 1200px;
    width: 100%;
    background-color: white;
    position: absolute;
    margin-top: 50px;
    display: flex;
  }

  /* Container adver */
  .container__adver {
    flex: 1;
    text-align: center;
  }

  .container__adver-link {
    display: block;  
    text-align: left;
    margin: 10px 0;
  }

  .container__adver-img {
    width: 300px;
    height: 100%;
    margin: 300
  }

  /* Container product */
  .container__product {
    flex: 1;
  }

  .container__product-list {
    position: fixed;
    margin-top: 20px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    margin-left: 20px;
  }

  .container__product-link {
    width: 170px;
    height: 202x;
    box-shadow: 0 0.625px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin: 5px;
  }

  .container__product-img {
    background-repeat: no-repeat; /*Bỏ tính chất lặp lại*/
    background-size: contain; /*Cho ảnh vừa thẻ div*/
    width: 120px;
    height: 120px;
    border-radius: 4px;
    margin: 10px;
  }

  .container__product-title {
    font-size: 1.3rem;
    color: #111;
    font-weight: 500;
    margin-bottom: 8px;
    height: 3rem; /*Đặt chiều cao giới hạn để hiển thị*/
    margin: 10px 10px 6px;
    overflow: hidden; /*Nếu content vượt quá thẻ div cha thì ẩn*/
    display: block;
    display: -webkit-box; /**/
    -webkit-box-orient: vertical; /*Hướng dòng chữ theo chiều nào => cụ thể trong TH này là dọc -> vertical*/
    -webkit-line-clamp: 2; /*Hạn chế content, điền vị trí dòng cần thêm dấu ...*/
  }

  .container__product-buy {
    font-size: 1.1rem;
    color: red;
    margin-bottom: 10px;
  }

  /* Container body */
  .container__body {
    height: 1200px;
    width: 100%;
    flex: 1.5;
    padding: 0 180px;
  }

  .container__body--main {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }

  .container__body--postbtn {
    width: 100%;
    height: 40px;
    border: 1px solid rgb(240, 237, 237);
    border-radius: 40px;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .container__body--postbtn:hover {
    background-color: #e7e2e2;
  }

  .container__body--main-framepost {
    margin-top: 50px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
    box-shadow: 0 0.625px 20px 0 rgba(0, 0, 0, 0.1);
  }

  .container__body--main-framepost-header {
    display: flex;
    justify-content: space-between;
  }

  .frame-header-name {
    font-size: 1.5rem;
    font-weight: 500;
    color: #050505;
    margin-bottom: 3px;
  }

  .frame-header-time {
    font-size: 1.2rem;
    color: #65676b;
  }

  /* sidebar của qtv */
  .sidebar {
    position: relative;
  }

  #toggle_sidebar {
    /*Ẩn ô checkbox*/
    display: none;
  }

  /* Khi bài post chưa có nội dung => ko nhấn đc vào nút đăng */
  /* .modal-container-post-btn {
    width: 710px;
    height: 40px;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0 30px 30px 30px;
    color: rgb(196,200,204);
    background-color: rgb(228,230,235);
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: not-allowed;
} */
  /*--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
--*/
  /* reset */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  nav ul,
  nav li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* start editing from here */
  a {
    text-decoration: none;
  }
  .txt-rt {
    text-align: right;
  } /* text align right */
  .txt-lt {
    text-align: left;
  } /* text align left */
  .txt-center {
    text-align: center;
  } /* text align center */
  .float-rt {
    float: right;
  } /* float right */
  .float-lt {
    float: left;
  } /* float left */
  .clear {
    clear: both;
  } /* clear float */
  .pos-relative {
    position: relative;
  } /* Position Relative */
  .pos-absolute {
    position: absolute;
  } /* Position Absolute */
  .vertical-base {
    vertical-align: baseline;
  } /* vertical align baseline */
  .vertical-top {
    vertical-align: top;
  } /* vertical align top */
  nav.vertical ul li {
    display: block;
  } /* vertical menu */
  nav.horizontal ul li {
    display: inline-block;
  } /* horizontal menu */
  img {
    max-width: 100%;
  }
  /*end reset*/
  body {
    background: url(/assets/img/1.jpg) no-repeat center top;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    background-attachment: fixed;
    background-position: center;
    text-align: center;
    font-family: "Open Sans", sans-serif;
  }
  /*--header--*/
  .header-w3l {
    padding-top: 2em;
  }
  .header-w3l h1 {
    font-size: 3em;
    color: white;
    letter-spacing: 8px;
    font-weight: 500;
    font-family: "Dosis", sans-serif;
    text-transform: uppercase;
    text-shadow: 5px 3px 5px #101010;
  }
  /*--//header--*/

  /*--main--*/
  .wthree-pro h2 {
    font-size: 1.2em;
    color: #fff;
    letter-spacing: 4px;
    margin-bottom: 1.5em;
    text-transform: uppercase;
  }
  .sub-main-w3 input[type="email"],
  .sub-main-w3 input[type="password"] {
    outline: none;
    font-size: 0.9em;
    padding: 1em 3em 1em 1em;
    border: none;
    margin-bottom: 0.3em;
    background: rgba(255, 255, 255, 0.85);
    width: 82%;
    color: #000;
    border-radius: 30px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1px;
  }
  .sub-main-w3 {
    width: 26%;
    margin: 10em auto 12em;
  }
  .sub-w3l h6 a {
    font-size: 0.9em;
    color: #fff;
    letter-spacing: 1px;
    text-align: right;
    display: inherit;
  }
  .sub-w3l {
    margin-top: 1em;
  }
  .right-w3l {
    margin-top: 2em;
  }
  .pom-agile {
    position: relative;
  }
  input.pass {
    margin-top: 0.7em;
  }
  span.icon1,
  span.icon2 {
    color: #ea2858;
    font-size: 1.1em;
    position: absolute;
    right: 6%;
  }
  span.icon1 {
    top: 23%;
  }
  span.icon2 {
    top: 34%;
  }
  .sub-main-w3 input[type="submit"] {
    color: white;
    background: #ea2858;
    border: none;
    padding: 0.7em 0;
    outline: none;
    width: 44%;
    font-size: 1em;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    border-radius: 30px;
  }
  .sub-main-w3 input[type="submit"]:hover {
    background: #fff;
    color: black;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }
  /*--//main--*/

  /*--footer--*/
  .footer p {
    font-size: 0.9em;
    color: white;
    letter-spacing: 2px;
  }
  .footer p a {
    color: #fff;
  }
  .footer p a:hover {
    color: #ea2858;
  }
  /*--//footer--*/

  /*--responsive--*/

  @media (max-width: 1680px) {
  }
  @media (max-width: 1600px) {
  }
  @media (max-width: 1440px) {
    .footer {
      padding-bottom: 3em;
    }
    .sub-main-w3 {
      width: 29%;
      margin: 7em auto 9em;
    }
  }
  @media (max-width: 1366px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1080px) {
    .sub-main-w3 {
      width: 35%;
    }
  }
  @media (max-width: 1050px) {
  }
  @media (max-width: 1024px) {
    .sub-main-w3 {
      width: 38%;
    }
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 900px) {
    .header-w3l {
      padding-top: 1.5em;
    }
    .sub-main-w3 {
      width: 42%;
      margin: 6em auto 8em;
    }
    .footer {
      padding-bottom: 2.5em;
    }
  }
  @media (max-width: 800px) {
    .header-w3l h1 {
      font-size: 2.7em;
      letter-spacing: 7px;
    }
  }
  @media (max-width: 768px) {
    .header-w3l {
      padding-top: 4.5em;
    }
    .sub-main-w3 {
      width: 50%;
      margin: 10em auto 16em;
    }
  }
  @media (max-width: 736px) {
    .header-w3l {
      padding-top: 1.5em;
    }
    .sub-main-w3 {
      margin: 5em auto 6.5em;
    }
  }
  @media (max-width: 667px) {
    .footer {
      padding-bottom: 2em;
    }
  }
  @media (max-width: 640px) {
  }
  @media (max-width: 600px) {
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="password"] {
      padding: 0.9em 3em 0.9em 1em;
    }
    .sub-main-w3 input[type="submit"] {
      font-size: 0.95em;
    }
    .footer p {
      letter-spacing: 1px;
    }
    .right-w3l {
      margin-top: 1em;
    }
    .header-w3l h1 {
      font-size: 2.5em;
      letter-spacing: 5px;
    }
    .wthree-pro h2 {
      font-size: 1em;
    }
    .sub-main-w3 {
      margin: 6em auto 8em;
      width: 54%;
    }
  }
  @media (max-width: 568px) {
    .sub-main-w3 {
      width: 56%;
    }
  }
  @media (max-width: 480px) {
    .header-w3l h1 {
      font-size: 2.3em;
      letter-spacing: 4px;
    }
    .sub-main-w3 {
      width: 69%;
      margin: 6em auto 6.3em;
    }
    .footer p {
      line-height: 1.9;
    }
  }
  @media (max-width: 440px) {
    .sub-main-w3 {
      width: 72%;
    }
  }
  @media (max-width: 414px) {
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="password"] {
      font-size: 0.85em;
    }
    .sub-w3l h6 a {
      font-size: 0.8em;
    }
    .header-w3l h1 {
      font-size: 2.1em;
    }
    .sub-main-w3 {
      margin: 7em auto 9.3em;
    }
  }
  @media (max-width: 384px) {
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="password"] {
      font-size: 0.8em;
    }
    .header-w3l h1 {
      font-size: 2em;
    }
    .sub-main-w3 input[type="submit"] {
      font-size: 0.9em;
    }
    .wthree-pro h2 {
      margin-bottom: 1.2em;
    }
    .sub-main-w3 {
      margin: 6em auto 7.5em;
      width: 74%;
    }
    span.icon1 {
      top: 18%;
    }
    span.icon2 {
      top: 32%;
    }
  }
  @media (max-width: 375px) {
  }
  @media (max-width: 320px) {
    .header-w3l h1 {
      font-size: 1.8em;
      letter-spacing: 2px;
    }
    .wthree-pro h2 {
      font-size: 0.9em;
      letter-spacing: 2px;
    }
    .sub-main-w3 input[type="submit"] {
      font-size: 0.8em;
    }
    .footer p {
      font-size: 0.8em;
    }
    .sub-main-w3 {
      margin: 4.2em auto 4.5em;
      width: 81%;
    }
    .sub-main-w3 input[type="email"],
    .sub-main-w3 input[type="password"] {
      width: 80%;
    }
  }
  /*--//responsive--*/
  /*!
 *  Font Awesome 4.0.3 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
  /* FONT PATH
 * -------------------------- */
  @font-face {
    font-family: "FontAwesome";
    src: url("../fonts/fontawesome-webfont.eot?v=4.0.3");
    src: url("../fonts/fontawesome-webfont.eot?#iefix&v=4.0.3")
        format("embedded-opentype"),
      url("../fonts/fontawesome-webfont.woff?v=4.0.3") format("woff"),
      url("../fonts/fontawesome-webfont.ttf?v=4.0.3") format("truetype"),
      url("../fonts/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular")
        format("svg");
    font-weight: normal;
    font-style: normal;
  }
  .box1 {
    display: inline-block;
    width: 15%;
    padding: 5px 0.5em;
    background: rgba(238, 238, 238, 0.26);
    margin: 0.5em 1% 0.5em 0;
    text-align: left;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 13px;
  }
  .fontawesome-icon-list a i {
    margin-right: 10px;
    font-size: 25px;
    color: #757575;
  }
  .margin-top {
    margin-top: 20px;
  }
  .fa {
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* makes the font 33% larger relative to the icon container */
  .fa-lg {
    font-size: 1.3333333333333333em;
    line-height: 0.75em;
    vertical-align: -15%;
  }
  .fa-2x {
    font-size: 2em;
  }
  .fa-3x {
    font-size: 3em;
  }
  .fa-4x {
    font-size: 4em;
  }
  .fa-5x {
    font-size: 5em;
  }
  .fa-fw {
    width: 1.2857142857142858em;
    text-align: center;
  }
  .fa-ul {
    padding-left: 0;
    margin-left: 2.142857142857143em;
    list-style-type: none;
  }
  .fa-ul > li {
    position: relative;
  }
  .fa-li {
    position: absolute;
    left: -2.142857142857143em;
    width: 2.142857142857143em;
    top: 0.14285714285714285em;
    text-align: center;
  }
  .fa-li.fa-lg {
    left: -1.8571428571428572em;
  }
  .fa-border {
    padding: 0.2em 0.25em 0.15em;
    border: solid 0.08em #eeeeee;
    border-radius: 0.1em;
  }
  .pull-right {
    float: right;
  }
  .pull-left {
    float: left;
  }
  .fa.pull-left {
    margin-right: 0.3em;
  }
  .fa.pull-right {
    margin-left: 0.3em;
  }
  .fa-spin {
    -webkit-animation: spin 2s infinite linear;
    -moz-animation: spin 2s infinite linear;
    -o-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear;
  }
  @-moz-keyframes spin {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(359deg);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
    }
  }
  @-o-keyframes spin {
    0% {
      -o-transform: rotate(0deg);
    }
    100% {
      -o-transform: rotate(359deg);
    }
  }
  @-ms-keyframes spin {
    0% {
      -ms-transform: rotate(0deg);
    }
    100% {
      -ms-transform: rotate(359deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
  .fa-rotate-90 {
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .fa-rotate-180 {
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .fa-rotate-270 {
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  .fa-flip-horizontal {
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
    -webkit-transform: scale(-1, 1);
    -moz-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }
  .fa-flip-vertical {
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);
    -webkit-transform: scale(1, -1);
    -moz-transform: scale(1, -1);
    -ms-transform: scale(1, -1);
    -o-transform: scale(1, -1);
    transform: scale(1, -1);
  }
  .fa-stack {
    position: relative;
    display: inline-block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    vertical-align: middle;
  }
  .fa-stack-1x,
  .fa-stack-2x {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .fa-stack-1x {
    line-height: inherit;
  }
  .fa-stack-2x {
    font-size: 2em;
  }
  .fa-inverse {
    color: #ffffff;
  }
  /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
   readers do not read off random characters that represent icons */
  .fa-glass:before {
    content: "\f000";
  }
  .fa-music:before {
    content: "\f001";
  }
  .fa-search:before {
    content: "\f002";
  }
  .fa-envelope-o:before {
    content: "\f003";
  }
  .fa-heart:before {
    content: "\f004";
  }
  .fa-star:before {
    content: "\f005";
  }
  .fa-star-o:before {
    content: "\f006";
  }
  .fa-user:before {
    content: "\f007";
  }
  .fa-film:before {
    content: "\f008";
  }
  .fa-th-large:before {
    content: "\f009";
  }
  .fa-th:before {
    content: "\f00a";
  }
  .fa-th-list:before {
    content: "\f00b";
  }
  .fa-check:before {
    content: "\f00c";
  }
  .fa-times:before {
    content: "\f00d";
  }
  .fa-search-plus:before {
    content: "\f00e";
  }
  .fa-search-minus:before {
    content: "\f010";
  }
  .fa-power-off:before {
    content: "\f011" !important;
  }
  .pull-left1:before {
    content: "\f0e7";
  }
  .fa-signal:before {
    content: "\f012";
  }
  .fa-gear:before,
  .fa-cog:before {
    content: "\f013";
  }
  .fa-trash-o:before {
    content: "\f014";
  }
  .fa-home:before {
    content: "\f015";
  }
  .fa-file-o:before {
    content: "\f016";
  }
  .fa-clock-o:before {
    content: "\f017";
  }
  .fa-road:before {
    content: "\f018";
  }
  .fa-download:before {
    content: "\f019";
  }
  .fa-arrow-circle-o-down:before {
    content: "\f01a";
  }
  .fa-arrow-circle-o-up:before {
    content: "\f01b";
  }
  .fa-inbox:before {
    content: "\f01c";
  }
  .fa-play-circle-o:before {
    content: "\f01d";
  }
  .fa-rotate-right:before,
  .fa-repeat:before {
    content: "\f01e";
  }
  .fa-refresh:before {
    content: "\f021";
  }
  .fa-list-alt:before {
    content: "\f022";
  }
  .fa-lock:before {
    content: "\f023";
  }
  .fa-flag:before {
    content: "\f024";
  }
  .fa-headphones:before {
    content: "\f025";
  }
  .fa-volume-off:before {
    content: "\f026";
  }
  .fa-volume-down:before {
    content: "\f027";
  }
  .fa-volume-up:before {
    content: "\f028";
  }
  .fa-qrcode:before {
    content: "\f029";
  }
  .fa-barcode:before {
    content: "\f02a";
  }
  .fa-tag:before {
    content: "\f02b";
  }
  .fa-tags:before {
    content: "\f02c";
  }
  .fa-book:before {
    content: "\f02d";
  }
  .fa-bookmark:before {
    content: "\f02e";
  }
  .fa-print:before {
    content: "\f02f";
  }
  .fa-camera:before {
    content: "\f030";
  }
  .fa-font:before {
    content: "\f031";
  }
  .fa-bold:before {
    content: "\f032";
  }
  .fa-italic:before {
    content: "\f033";
  }
  .fa-text-height:before {
    content: "\f034";
  }
  .fa-text-width:before {
    content: "\f035";
  }
  .fa-align-left:before {
    content: "\f036";
  }
  .fa-align-center:before {
    content: "\f037";
  }
  .fa-align-right:before {
    content: "\f038";
  }
  .fa-align-justify:before {
    content: "\f039";
  }
  .fa-list:before {
    content: "\f03a";
  }
  .fa-dedent:before,
  .fa-outdent:before {
    content: "\f03b";
  }
  .fa-indent:before {
    content: "\f03c";
  }
  .fa-video-camera:before {
    content: "\f03d";
  }
  .fa-picture-o:before {
    content: "\f03e";
  }
  .fa-pencil:before {
    content: "\f040";
  }
  .fa-map-marker:before {
    content: "\f041";
  }
  .fa-adjust:before {
    content: "\f042";
  }
  .fa-tint:before {
    content: "\f043";
  }
  .fa-edit:before,
  .fa-pencil-square-o:before {
    content: "\f044";
  }
  .fa-share-square-o:before {
    content: "\f045";
  }
  .fa-check-square-o:before {
    content: "\f046";
  }
  .fa-arrows:before {
    content: "\f047";
  }
  .fa-step-backward:before {
    content: "\f048";
  }
  .fa-fast-backward:before {
    content: "\f049";
  }
  .fa-backward:before {
    content: "\f04a";
  }
  .fa-play:before {
    content: "\f04b";
  }
  .fa-pause:before {
    content: "\f04c";
  }
  .fa-stop:before {
    content: "\f04d";
  }
  .fa-forward:before {
    content: "\f04e";
  }
  .fa-fast-forward:before {
    content: "\f050";
  }
  .fa-step-forward:before {
    content: "\f051";
  }
  .fa-eject:before {
    content: "\f052";
  }
  .fa-chevron-left:before {
    content: "\f053";
  }
  .fa-chevron-right:before {
    content: "\f054";
  }
  .fa-plus-circle:before {
    content: "\f055";
  }
  .fa-minus-circle:before {
    content: "\f056";
  }
  .fa-times-circle:before {
    content: "\f057";
  }
  .fa-check-circle:before {
    content: "\f058";
  }
  .fa-question-circle:before {
    content: "\f059";
  }
  .fa-info-circle:before {
    content: "\f05a";
  }
  .fa-crosshairs:before {
    content: "\f05b";
  }
  .fa-times-circle-o:before {
    content: "\f05c";
  }
  .fa-check-circle-o:before {
    content: "\f05d";
  }
  .fa-ban:before {
    content: "\f05e";
  }
  .fa-arrow-left:before {
    content: "\f060";
  }
  .fa-arrow-right:before {
    content: "\f061";
  }
  .fa-arrow-up:before {
    content: "\f062";
  }
  .fa-arrow-down:before {
    content: "\f063";
  }
  .fa-mail-forward:before,
  .fa-share:before {
    content: "\f064";
  }
  .fa-expand:before {
    content: "\f065";
  }
  .fa-compress:before {
    content: "\f066";
  }
  .fa-plus:before {
    content: "\f067";
  }
  .fa-minus:before {
    content: "\f068";
  }
  .fa-asterisk:before {
    content: "\f069";
  }
  .fa-exclamation-circle:before {
    content: "\f06a";
  }
  .fa-gift:before {
    content: "\f06b";
  }
  .fa-leaf:before {
    content: "\f06c";
  }
  .fa-fire:before {
    content: "\f06d";
  }
  .fa-eye:before {
    content: "\f06e";
  }
  .fa-eye-slash:before {
    content: "\f070";
  }
  .fa-warning:before,
  .fa-exclamation-triangle:before {
    content: "\f071";
  }
  .fa-plane:before {
    content: "\f072";
  }
  .fa-calendar:before {
    content: "\f073";
  }
  .fa-random:before {
    content: "\f074";
  }
  .fa-comment:before {
    content: "\f075";
  }
  .fa-magnet:before {
    content: "\f076";
  }
  .fa-chevron-up:before {
    content: "\f077";
  }
  .fa-chevron-down:before {
    content: "\f078";
  }
  .fa-retweet:before {
    content: "\f079";
  }
  .fa-shopping-cart:before {
    content: "\f07a";
  }
  .fa-folder:before {
    content: "\f07b";
  }
  .fa-folder-open:before {
    content: "\f07c";
  }
  .fa-arrows-v:before {
    content: "\f07d";
  }
  .fa-arrows-h:before {
    content: "\f07e";
  }
  .fa-twitter-square:before {
    content: "\f081";
  }
  .fa-facebook-square:before {
    content: "\f082";
  }
  .fa-camera-retro:before {
    content: "\f083";
  }
  .fa-key:before {
    content: "\f084";
  }
  .fa-gears:before,
  .fa-cogs:before {
    content: "\f085";
  }
  .fa-comments:before {
    content: "\f086";
  }
  .fa-thumbs-o-up:before {
    content: "\f087";
  }
  .fa-thumbs-o-down:before {
    content: "\f088";
  }
  .fa-star-half:before {
    content: "\f089";
  }
  .fa-heart-o:before {
    content: "\f08a";
  }
  .fa-sign-out:before {
    content: "\f08b";
  }
  .fa-linkedin-square:before {
    content: "\f08c";
  }
  .fa-thumb-tack:before {
    content: "\f08d";
  }
  .fa-external-link:before {
    content: "\f08e";
  }
  .fa-sign-in:before {
    content: "\f090";
  }
  .fa-trophy:before {
    content: "\f091";
  }
  .fa-github-square:before {
    content: "\f092";
  }
  .fa-upload:before {
    content: "\f093";
  }
  .fa-lemon-o:before {
    content: "\f094";
  }
  .fa-phone:before {
    content: "\f095";
  }
  .fa-square-o:before {
    content: "\f096";
  }
  .fa-bookmark-o:before {
    content: "\f097";
  }
  .fa-phone-square:before {
    content: "\f098";
  }
  .fa-twitter:before {
    content: "\f099";
  }
  .fa-facebook:before {
    content: "\f09a";
  }
  .fa-github:before {
    content: "\f09b";
  }
  .fa-unlock:before {
    content: "\f09c";
  }
  .fa-credit-card:before {
    content: "\f09d";
  }
  .fa-rss:before {
    content: "\f09e";
  }
  .fa-hdd-o:before {
    content: "\f0a0";
  }
  .fa-bullhorn:before {
    content: "\f0a1";
  }
  .fa-bell:before {
    content: "\f0f3";
  }
  .fa-certificate:before {
    content: "\f0a3";
  }
  .fa-hand-o-right:before {
    content: "\f0a4";
  }
  .fa-hand-o-left:before {
    content: "\f0a5";
  }
  .fa-hand-o-up:before {
    content: "\f0a6";
  }
  .fa-hand-o-down:before {
    content: "\f0a7";
  }
  .fa-arrow-circle-left:before {
    content: "\f0a8";
  }
  .fa-arrow-circle-right:before {
    content: "\f0a9";
  }
  .fa-arrow-circle-up:before {
    content: "\f0aa";
  }
  .fa-arrow-circle-down:before {
    content: "\f0ab";
  }
  .fa-globe:before {
    content: "\f0ac";
  }
  .fa-wrench:before {
    content: "\f0ad";
  }
  .fa-tasks:before {
    content: "\f0ae";
  }
  .fa-filter:before {
    content: "\f0b0";
  }
  .fa-briefcase:before {
    content: "\f0b1";
  }
  .fa-arrows-alt:before {
    content: "\f0b2";
  }
  .fa-group:before,
  .fa-users:before {
    content: "\f0c0";
  }
  .fa-chain:before,
  .fa-link:before {
    content: "\f0c1";
  }
  .fa-cloud:before {
    content: "\f0c2";
  }
  .fa-flask:before {
    content: "\f0c3";
  }
  .fa-cut:before,
  .fa-scissors:before {
    content: "\f0c4";
  }
  .fa-copy:before,
  .fa-files-o:before {
    content: "\f0c5";
  }
  .fa-paperclip:before {
    content: "\f0c6";
  }
  .fa-save:before,
  .fa-floppy-o:before {
    content: "\f0c7";
  }
  .fa-square:before {
    content: "\f0c8";
  }
  .fa-bars:before {
    content: "\f0c9";
  }
  .fa-list-ul:before {
    content: "\f0ca";
  }
  .fa-list-ol:before {
    content: "\f0cb";
  }
  .fa-strikethrough:before {
    content: "\f0cc";
  }
  .fa-underline:before {
    content: "\f0cd";
  }
  .fa-table:before {
    content: "\f0ce";
  }
  .fa-magic:before {
    content: "\f0d0";
  }
  .fa-truck:before {
    content: "\f0d1";
  }
  .fa-pinterest:before {
    content: "\f0d2";
  }
  .fa-pinterest-square:before {
    content: "\f0d3";
  }
  .fa-google-plus-square:before {
    content: "\f0d4";
  }
  .fa-google-plus:before {
    content: "\f0d5";
  }
  .fa-money:before {
    content: "\f156";
  }
  .fa-caret-down:before {
    content: "\f0d7";
  }
  .fa-caret-up:before {
    content: "\f0d8";
  }
  .fa-caret-left:before {
    content: "\f0d9";
  }
  .fa-caret-right:before {
    content: "\f0da";
  }
  .fa-columns:before {
    content: "\f0db";
  }
  .fa-unsorted:before,
  .fa-sort:before {
    content: "\f0dc";
  }
  .fa-sort-down:before,
  .fa-sort-asc:before {
    content: "\f0dd";
  }
  .fa-sort-up:before,
  .fa-sort-desc:before {
    content: "\f0de";
  }
  .fa-envelope:before {
    content: "\f0e0";
  }
  .fa-linkedin:before {
    content: "\f0e1";
  }
  .fa-rotate-left:before,
  .fa-undo:before {
    content: "\f0e2";
  }
  .fa-legal:before,
  .fa-gavel:before {
    content: "\f0e3";
  }
  .fa-dashboard:before,
  .fa-tachometer:before {
    content: "\f0e4";
  }
  .fa-comment-o:before {
    content: "\f0e5";
  }
  .fa-comments-o:before {
    content: "\f0e6";
  }
  .fa-flash:before,
  .fa-bolt:before {
    content: "\f0e7";
  }
  .fa-sitemap:before {
    content: "\f0e8";
  }
  .fa-umbrella:before {
    content: "\f0e9";
  }
  .fa-paste:before,
  .fa-clipboard:before {
    content: "\f0ea";
  }
  .fa-lightbulb-o:before {
    content: "\f0eb";
  }
  .fa-exchange:before {
    content: "\f0ec";
  }
  .fa-cloud-download:before {
    content: "\f0ed";
  }
  .fa-cloud-upload:before {
    content: "\f0ee";
  }
  .fa-user-md:before {
    content: "\f0f0";
  }
  .fa-stethoscope:before {
    content: "\f0f1";
  }
  .fa-suitcase:before {
    content: "\f0f2";
  }
  .fa-bell-o:before {
    content: "\f0a2";
  }
  .fa-coffee:before {
    content: "\f0f4";
  }
  .fa-cutlery:before {
    content: "\f0f5";
  }
  .fa-file-text-o:before {
    content: "\f0f6";
  }
  .fa-building-o:before {
    content: "\f0f7";
  }
  .fa-hospital-o:before {
    content: "\f0f8";
  }
  .fa-ambulance:before {
    content: "\f0f9";
  }
  .fa-medkit:before {
    content: "\f0fa";
  }
  .fa-fighter-jet:before {
    content: "\f0fb";
  }
  .fa-beer:before {
    content: "\f0fc";
  }
  .fa-h-square:before {
    content: "\f0fd";
  }
  .fa-plus-square:before {
    content: "\f0fe";
  }
  .fa-angle-double-left:before {
    content: "\f100";
  }
  .fa-angle-double-right:before {
    content: "\f101";
  }
  .fa-angle-double-up:before {
    content: "\f102";
  }
  .fa-angle-double-down:before {
    content: "\f103";
  }
  .fa-angle-left:before {
    content: "\f104";
  }
  .fa-angle-right:before {
    content: "\f105";
  }
  .fa-angle-up:before {
    content: "\f106";
  }
  .fa-angle-down:before {
    content: "\f107";
  }
  .fa-desktop:before {
    content: "\f108";
  }
  .fa-laptop:before {
    content: "\f109";
  }
  .fa-tablet:before {
    content: "\f10a";
  }
  .fa-mobile-phone:before,
  .fa-mobile:before {
    content: "\f10b";
  }
  .fa-circle-o:before {
    content: "\f10c";
  }
  .fa-quote-left:before {
    content: "\f10d";
  }
  .fa-quote-right:before {
    content: "\f10e";
  }
  .fa-spinner:before {
    content: "\f110";
  }
  .fa-circle:before {
    content: "\f111";
  }
  .fa-mail-reply:before,
  .fa-reply:before {
    content: "\f112";
  }
  .fa-github-alt:before {
    content: "\f113";
  }
  .fa-folder-o:before {
    content: "\f114";
  }
  .fa-folder-open-o:before {
    content: "\f115";
  }
  .fa-smile-o:before {
    content: "\f118";
  }
  .fa-frown-o:before {
    content: "\f119";
  }
  .fa-meh-o:before {
    content: "\f11a";
  }
  .fa-gamepad:before {
    content: "\f11b";
  }
  .fa-keyboard-o:before {
    content: "\f11c";
  }
  .fa-flag-o:before {
    content: "\f11d";
  }
  .fa-flag-checkered:before {
    content: "\f11e";
  }
  .fa-terminal:before {
    content: "\f120";
  }
  .fa-code:before {
    content: "\f121";
  }
  .fa-reply-all:before {
    content: "\f122";
  }
  .fa-mail-reply-all:before {
    content: "\f122";
  }
  .fa-star-half-empty:before,
  .fa-star-half-full:before,
  .fa-star-half-o:before {
    content: "\f123";
  }
  .fa-location-arrow:before {
    content: "\f124";
  }
  .fa-crop:before {
    content: "\f125";
  }
  .fa-code-fork:before {
    content: "\f126";
  }
  .fa-unlink:before,
  .fa-chain-broken:before {
    content: "\f127";
  }
  .fa-question:before {
    content: "\f128";
  }
  .fa-info:before {
    content: "\f129";
  }
  .fa-exclamation:before {
    content: "\f12a";
  }
  .fa-superscript:before {
    content: "\f12b";
  }
  .fa-subscript:before {
    content: "\f12c";
  }
  .fa-eraser:before {
    content: "\f12d";
  }
  .fa-puzzle-piece:before {
    content: "\f12e";
  }
  .fa-microphone:before {
    content: "\f130";
  }
  .fa-microphone-slash:before {
    content: "\f131";
  }
  .fa-shield:before {
    content: "\f132";
  }
  .fa-calendar-o:before {
    content: "\f133";
  }
  .fa-fire-extinguisher:before {
    content: "\f134";
  }
  .fa-rocket:before {
    content: "\f135";
  }
  .fa-maxcdn:before {
    content: "\f136";
  }
  .fa-chevron-circle-left:before {
    content: "\f137";
  }
  .fa-chevron-circle-right:before {
    content: "\f138";
  }
  .fa-chevron-circle-up:before {
    content: "\f139";
  }
  .fa-chevron-circle-down:before {
    content: "\f13a";
  }
  .fa-html5:before {
    content: "\f13b";
  }
  .fa-css3:before {
    content: "\f13c";
  }
  .fa-anchor:before {
    content: "\f13d";
  }
  .fa-unlock-alt:before {
    content: "\f13e";
  }
  .fa-bullseye:before {
    content: "\f140";
  }
  .fa-ellipsis-h:before {
    content: "\f141";
  }
  .fa-ellipsis-v:before {
    content: "\f142";
  }
  .fa-rss-square:before {
    content: "\f143";
  }
  .fa-play-circle:before {
    content: "\f144";
  }
  .fa-ticket:before {
    content: "\f080";
  }
  .fa-minus-square:before {
    content: "\f146";
  }
  .fa-minus-square-o:before {
    content: "\f147";
  }
  .fa-level-up:before {
    content: "\f148";
  }
  .fa-level-down:before {
    content: "\f149";
  }
  .fa-check-square:before {
    content: "\f14a";
  }
  .fa-pencil-square:before {
    content: "\f14b";
  }
  .fa-external-link-square:before {
    content: "\f14c";
  }
  .fa-share-square:before {
    content: "\f14d";
  }
  .fa-compass:before {
    content: "\f14e";
  }
  .fa-toggle-down:before,
  .fa-caret-square-o-down:before {
    content: "\f150";
  }
  .fa-toggle-up:before,
  .fa-caret-square-o-up:before {
    content: "\f151";
  }
  .fa-toggle-right:before,
  .fa-caret-square-o-right:before {
    content: "\f152";
  }
  .fa-euro:before,
  .fa-eur:before {
    content: "\f153";
  }
  .fa-gbp:before {
    content: "\f154";
  }
  .fa-dollar:before,
  .fa-usd:before {
    content: "\f155";
  }
  .fa-rupee:before,
  .fa-inr:before {
    content: "\f156";
  }
  .fa-cny:before,
  .fa-rmb:before,
  .fa-yen:before,
  .fa-jpy:before {
    content: "\f157";
  }
  .fa-ruble:before,
  .fa-rouble:before,
  .fa-rub:before {
    content: "\f158";
  }
  .fa-won:before,
  .fa-krw:before {
    content: "\f159";
  }
  .fa-bitcoin:before,
  .fa-btc:before {
    content: "\f15a";
  }
  .fa-file:before {
    content: "\f15b";
  }
  .fa-file-text:before {
    content: "\f15c";
  }
  .fa-sort-alpha-asc:before {
    content: "\f15d";
  }
  .fa-sort-alpha-desc:before {
    content: "\f15e";
  }
  .fa-sort-amount-asc:before {
    content: "\f160";
  }
  .fa-sort-amount-desc:before {
    content: "\f161";
  }
  .fa-sort-numeric-asc:before {
    content: "\f162";
  }
  .fa-sort-numeric-desc:before {
    content: "\f163";
  }
  .fa-thumbs-up:before {
    content: "\f164";
  }
  .fa-thumbs-down:before {
    content: "\f165";
  }
  .fa-youtube-square:before {
    content: "\f166";
  }
  .fa-youtube:before {
    content: "\f167";
  }
  .fa-xing:before {
    content: "\f168";
  }
  .fa-xing-square:before {
    content: "\f169";
  }
  .fa-youtube-play:before {
    content: "\f16a";
  }
  .fa-dropbox:before {
    content: "\f16b";
  }
  .fa-stack-overflow:before {
    content: "\f16c";
  }
  .fa-instagram:before {
    content: "\f16d";
  }
  .fa-flickr:before {
    content: "\f16e";
  }
  .fa-adn:before {
    content: "\f170";
  }
  .fa-bitbucket:before {
    content: "\f171";
  }
  .fa-bitbucket-square:before {
    content: "\f172";
  }
  .fa-tumblr:before {
    content: "\f173";
  }
  .fa-tumblr-square:before {
    content: "\f174";
  }
  .fa-long-arrow-down:before {
    content: "\f175";
  }
  .fa-long-arrow-up:before {
    content: "\f176";
  }
  .fa-long-arrow-left:before {
    content: "\f177";
  }
  .fa-long-arrow-right:before {
    content: "\f178";
  }
  .fa-apple:before {
    content: "\f179";
  }
  .fa-windows:before {
    content: "\f17a";
  }
  .fa-android:before {
    content: "\f17b";
  }
  .fa-linux:before {
    content: "\f17c";
  }
  .fa-dribbble:before {
    content: "\f17d";
  }
  .fa-skype:before {
    content: "\f17e";
  }
  .fa-foursquare:before {
    content: "\f180";
  }
  .fa-trello:before {
    content: "\f181";
  }
  .fa-female:before {
    content: "\f182";
  }
  .fa-male:before {
    content: "\f183";
  }
  .fa-gittip:before {
    content: "\f184";
  }
  .fa-sun-o:before {
    content: "\f185";
  }
  .fa-moon-o:before {
    content: "\f186";
  }
  .fa-archive:before {
    content: "\f187";
  }
  .fa-bug:before {
    content: "\f188";
  }
  .fa-vk:before {
    content: "\f189";
  }
  .fa-weibo:before {
    content: "\f18a";
  }
  .fa-renren:before {
    content: "\f18b";
  }
  .fa-pagelines:before {
    content: "\f18c";
  }
  .fa-stack-exchange:before {
    content: "\f18d";
  }
  .fa-arrow-circle-o-right:before {
    content: "\f18e";
  }
  .fa-arrow-circle-o-left:before {
    content: "\f190";
  }
  .fa-toggle-left:before,
  .fa-caret-square-o-left:before {
    content: "\f191";
  }
  .fa-dot-circle-o:before {
    content: "\f192";
  }
  .fa-wheelchair:before {
    content: "\f193";
  }
  .fa-vimeo-square:before {
    content: "\f194";
  }
  .fa-turkish-lira:before,
  .fa-try:before {
    content: "\f195";
  }
  .fa-plus-square-o:before {
    content: "\f196";
  }
  .fa-bar-chart:before {
    content: "\f080";
  }
  .fa-send-o:before,
  .fa-paper-plane-o:before {
    content: "\f1d9";
  }
`;
