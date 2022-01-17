import { message, Modal } from "antd";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { StyledGioHang } from "../styled";
import billProvider from "@src/data-access/bill-provider";

const StyledFooter = styled.div`
  .footer-list-product {
    display: flex;
    justify-content: end;
    .btn-footer {
      color: white;
      font-weight: bold;
      padding: 2px 10px;
      border-radius: 5px;
      margin-right: 5px;
      cursor: pointer;
    }
    .btn-cancel {
      background-color: #eb5757;
    }
    .btn-ok {
      background-color: var(--color-green);
    }
  }
`;

const GioHang = ({
  listAdd = [],
  onCancel = () => {},
  updateData,
  changeProduct,
  deleteProduct,
  onCreate,
  auth,
}) => {
  return (
    <Modal
      visible={true}
      width={700}
      title="Giỏ hàng"
      onCancel={onCancel}
      footer={
        <StyledFooter>
          {listAdd.length > 0 && (
            <div className="footer-list-product">
              <div
                className="btn-footer btn-cancel"
                onClick={() => {
                  updateData({ listAdd: [] });
                  onCancel();
                }}
              >
                Hủy đơn
              </div>
              <div
                className="btn-footer btn-ok"
                onClick={() => {
                  for(let i = 0 ; i < listAdd.length; i++) {
                    billProvider._post({accountId : auth.userId, productId : listAdd[i].id, numberProduct: listAdd[i].soLuong,
                      totalCost: listAdd[i].price * listAdd[i].soLuong}).then(
                     res => {
                       if(res && res.code === 0 ) {
                        message.success("Đặt hàng thành công");
                       }
                     }
                   )
                  }
                  
                }}
              >
                Xác nhận
              </div>
            </div>
          )}
        </StyledFooter>
      }
    >
      <StyledGioHang>
        <div className="list-product">
          {listAdd.length === 0 && "Không có hàng hóa"}
          {listAdd.map((item) => (
            <div className="item">
              <div className="img">
                <img
                  src={item.img || require("@assets/images2/food2.jpg").default}
                />
              </div>

              <div className="name-product">{item.name}</div>
              <div className="price">
                {(item.price * item.soLuong)?.formatPrice()}đ
              </div>
              <div className="number">
                <span className="number-count">Số lượng:</span>
                <div className="input">
                  <input
                    value={item.soLuong}
                    onChange={(e) => {
                      changeProduct({ ...item, soLuong: e.target?.value });
                    }}
                  />
                </div>
              </div>
              <div className="btn-delete">
                <div
                  className="btn-del"
                  onClick={() => {
                    deleteProduct(item.id);
                  }}
                >
                  Xóa
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <div>
            <span>Tổng tiền: </span>
            <span>
              {listAdd
                .reduce((acc, cur) => acc + cur.soLuong * cur.price, 0)
                .formatPrice()}
            </span>
          </div>
        </div>
      </StyledGioHang>
    </Modal>
  );
};

export default connect(
  ({ shop: { listAdd }, auth: {auth} }) => ({ listAdd, auth }),
  ({ shop: { updateData, changeProduct, deleteProduct, onCreate } }) => ({
    updateData,
    changeProduct,
    deleteProduct,
    onCreate,
  })
)(GioHang);
