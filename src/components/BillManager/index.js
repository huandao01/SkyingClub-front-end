import { message, Modal, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { StyledGioHang } from "./styled";
import { getImg } from "@src/utils/common";
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

const BillList = ({
  listBill,
  onCancel = () => {},
  updateData,
  changeProduct,
  deleteProduct,
  onCreate,
  auth,
  getUser
}) => {
  const column = [
    {
      title: "STT",
      className: "td",
      width: "10%",
      key: "stt",
      render: (_, __, idx) => idx + 1,// tham soso 1 : lấy giá trị của  trường dataindex trong object, ts 2: cả object, ts3: chỉ số
    },
    {
      title: "Tên",
      key: "fullName",
      dataIndex: "fullName",
      width: "25%",
      render: (_, data) => (
        <div className="full-name">
          {/* <div className="avatar">
            <img src={getImg(data.avatar)} /></div> */}
          <div className="full-name">{data.userName}</div>
        </div>
      ),
    },
    {
      title: "Tên sản phẩm",
      key: "nameProduct",
      width: "30%",
      render: (value, data) => data.productName
    },
    {
      title: "Thời gian đặt hàng",
      key: "point",
      dataIndex: "point",
      render: (item, data) => (
        <div className="full-name">{data.createdAt}</div>
      ),
    },
    {
      title: "Số lượng",
      key: "num",
      width: "10%",
      dataIndex: "point",
      render: (item, data) => (
        <div className="full-name">{data.numberProduct}</div>
      ),
    },
    {
      title: "Tổng giá",
      key: "cost",

      dataIndex: "point",
      render: (item, data) => (
        <div className="full-name">{data.totalCost}</div>
      ),
    },
    
    /*
    {
      title: "Lượt bình chọn",
      render: (_, __, idx) => (
        <Badge.Ribbon
          className="w100"
          color={"purple"}
          style={{
            // backgroundColor: data.isPass ? "var(--green)" : "var(--red)",
            top: "-12px",
            left: "0",
          }}
          text={(Math.random() * 100 + (_listData.length - idx) * 100).toFixed(
            0
          )}
        ></Badge.Ribbon>
      ),
    },
    */
  ]; 

  useEffect(() => {
    billProvider._search({page: 0 ,size: 999}).then(
      (res) => {
        if(res&& res.code === 0) {
          listBill = res.data;
        }
      }
    )
  },[]); 
  
  return (
    <Modal
      visible={true}
      width={700}
      title="Danh sách đơn hàng"
      onCancel={onCancel}
      footer={
        <StyledFooter>
          {listBill.length > 0 && (
            <div className="footer-list-product">
              <div
                className="btn-footer btn-ok"
                onClick={() => {
                  onCancel();                 
                  
                }}
              >
                Ok
              </div>
            </div>
          )}
        </StyledFooter>
      }
    >
      <StyledGioHang>
      <div className="list-rank">
        <Table
          dataSource={listBill}
          columns={column}
          pagination={false}
          footer={false}
        />
      </div>
      </StyledGioHang>
    </Modal>
  );
};

export default connect(
  ({ shop: { listAdd }, auth: {auth}, rank : {_listData: listUser} }  ) => ({ listAdd, auth, listUser }),
  ({ shop: { updateData, changeProduct, deleteProduct, onCreate },rank: {_getList: getUser}  }) => ({
    updateData,
    changeProduct,
    deleteProduct,
    onCreate,
    getUser
  })
)(BillList);
