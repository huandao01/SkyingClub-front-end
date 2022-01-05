import React, { useState } from "react";
import { WrapperStyled } from "./styled";
import "@assets/css/font-awesome.css";
import { postData, productData } from "./data";
import Post from "@src/components/Post";
import ModalCreatePost from "@src/components/ModalCreatePost";

const Home = (props) => {
  const [state, _setState] = useState({
    showModalPost: false,
  });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  

  return (
    <WrapperStyled>
      <div class="container">
        <div class="container__product">
          <div class="container__product-list">
            {productData.map((item) => (
              <a href="" class="container__product-link">
                <img src={item.imgUrl} alt="" class="container__product-img" />
                <span class="container__product-title">{item.content}</span>
                <span class="container__product-buy">Mua ngay</span>
              </a>
            ))}
          </div>
        </div>
        <div class="container__body">
          <div class="container__body--main">
            <button
              class="container__body--postbtn js-container__body--postbtn"
              onClick={() => {
                setState({ showModalPost: true });
                console.log("click");
              }}
            >
              Bạn đang nghĩ gì?
            </button>

            {postData.map((item) => (
              <Post {...item} />
            ))}
          </div>
        </div>
        <div class="container__adver">
          <a href="" class="container__adver-link">
            <img
              src="https://statics.lotuscdn.vn/thumb_w/300/web/v1/images/lachanviruscorona_right_banner.png"
              alt=""
              class="container__adver-img"
            />
          </a>
          <a href="" class="container__adver-link">
            <img
              src="https://statics.lotuscdn.vn/thumb_w/300/web/v1/images/lachanviruscorona_right_banner.png"
              alt=""
              class="container__adver-img"
            />
          </a>
          <a href="" class="container__adver-link">
            <img
              src="https://statics.lotuscdn.vn/thumb_w/300/web/v1/images/lachanviruscorona_right_banner.png"
              alt=""
              class="container__adver-img"
            />
          </a>
        </div>
      </div>
      {state.showModalPost && (
        <ModalCreatePost
          onClose={() => {
            setState({ showModalPost: false });
          }}
        />
      )}
    </WrapperStyled>
  );
};
export default Home;
