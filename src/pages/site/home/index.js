import React, { useState, useEffect } from "react";
import { WrapperStyled } from "./styled";
import "@assets/css/font-awesome.css";
import CardSport from "./card-sport";
import { postData, productData } from "./data";
import Post from "@src/components/Post";
import ModalCreatePost from "@src/components/ModalCreatePost";
import { connect } from "react-redux";
import productProvider from "@src/data-access/product-provider";
import likeProvider from "@src/data-access/like-provider";

const Home = ({ auth, getUser, getlistBaiViet, listBaiViet, updateData , listProduct, listEvent, getEvent}) => {
  const [state, _setState] = useState({
    showModalPost: false,
  });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };


 

  useEffect(() => {
    getlistBaiViet({size:20});
    getEvent({size: 4});
    // getUser();
  }, []);

  return (
    <WrapperStyled>
      <div className="container">
        <div className="container__product">
          <div className="container__product-list">
            {listProduct.slice(0,6).map((item, index) => (
                   <a href="http://localhost:3000/skyingclub/shop" className="container__adver-link">
                   <div key={index} href="" className="container__product-link">
                                        <img
                                          src={item.imgPath}
                                          alt=""
                                          className="container__product-img"
                                        />
                                        <span className="container__product-title">{item.name}</span>
                                        <span className="container__product-buy">Xem ngay</span>
                                      </div>
                              
                            </a>
                  ))
            }
          </div>
        </div>
        <div className="container__body">
          <div className="container__body--main">
            {auth && (
              <button
                className="container__body--postbtn js-container__body--postbtn"
                onClick={() => {
                  setState({ showModalPost: true });
                }}
              >
               Tạo bài viết
              </button>
            )}
            {(listBaiViet || []).map((item) => (
              <Post
                key={item.id}
                onEdit={() => {
                  updateData({ _dataEdit: item });
                  setState({ showModalPost: true });
                }}
                {...item}
              />
            ))}
            {(listBaiViet || []).length === 0 && (
              <div>Không tìm thấy kết quả</div>
            )}
          </div>
        </div>

        <div className="container_list_event">
            {listEvent.slice(0,4).map((item, index) => (
                   <a href="http://localhost:3000/skyingclub/sport" className="container__adver-link">
                   <div key={index} href="" className="container__adver-link">
                                        <img
                                          src={item.imgPath}
                                          alt=""
                                          className="container__adver-img"
                                        />
                                        <span className="container__product-title">{item.nameEvent}</span>
                                        
                                      </div>
                              
                            </a>
                  ))
            }
          </div>
       
        {/* <div className="container_list_event">          
          {listProduct.map((item, idx) => (
            <div className="container_adver-link">
              <CardSport key={idx} item={item} />
              </div>
          ))}
          
        </div>              */}
      </div>
      {state.showModalPost && (
        <ModalCreatePost
          onClose={() => {
            setState({ showModalPost: false });
            updateData({ _dataEdit: {} });
          }}
          afterPost={() => {
            setState({ showModalPost: false });
            getlistBaiViet();
          }}
        />
      )}
    </WrapperStyled>
  );
};
export default connect(
  ({ auth: { auth }, post: { _listData: listBaiViet }, product: {_listData: listProduct}, event: {_listData : listEvent} }) => ({
    auth,
    listBaiViet,
    listProduct,
    listEvent
  }),
  ({
    post: { _getList: getlistBaiViet, updateData },
    account: { getUser },
    event: {_getList : getEvent}

  }) => ({
    getlistBaiViet,
    updateData,
    getUser,
    getEvent
  })
)(Home);
