import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import GioHang from "./component/gio-hang";
import Product from "./component/product";
import { data } from "./data";
import { WrapperStyled } from "./styled";

const Shop = ({ listAdd = [],listProduct =[], getProduct }) => {
  const [state, _setState] = useState({ showBill: false });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

//  goij API
useEffect(()=>{
  getProduct({page: 0, site : 10})
},[])

  return (
    <WrapperStyled>
      <div className="app">
        <div className="container">
          <div className="grid wide">
            <div className="row sm-gutter app__content">
              <div className="col l-2 m-0 c-0">
                <div className="category-pc">
                  <nav className="category">
                   
                    <div className="category__heading-wrapper">
                      <i className="category__heading-icon fas fa-th-large"></i>
                      <div className="category__heading">Cửa hàng</div>
                    </div>
                    

                    <ul className="category-list"></ul>
                  </nav>
                </div>
              </div>

              <div className="col l-10 m-12 c-12">

                <div className="home-product">
                  <div className="row sm-gutter">
                    {listProduct.map((item, idx) => (
                      <Product key={idx} data={item} />
                    ))}
                  </div>
                </div>
    

                <ul className="pagination home-product__pagination">{/*}
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
                    */}
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

      <div className="buy-bottom" onClick={() => setState({ showBill: true })}>
        <div className="card-fixed">
          <i className="header__cart-icon fas fa-shopping-cart"></i>
          <span className="header__cart-wrap-notice" id="number_select">
            {listAdd.length}
          </span>
        </div>
      </div>

      {state.showBill && (
        <GioHang onCancel={() => setState({ showBill: false })} />
      )}
    </WrapperStyled>
  );
};

//export default connect(({ shop: { listAdd } }) => ({ listAdd }))(Shop);

export default connect(
  ({ shop: { listAdd } , product: { _listData : listProduct } }) => ({
    listAdd,
    listProduct,
  }),
  ({
     product: {_getList: getProduct}
  }) => ({
    getProduct
  })
)(Shop);                

