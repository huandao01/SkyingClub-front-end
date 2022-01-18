import { getImg } from "@src/utils/common";
import { Badge, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { WrapperStyled } from "./styled";


const Rank = ({ listRank = [],getRank }) => {
  const [state, _setState] = useState({});
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  useEffect(() => {
    getRank({page: 0 ,size: 20}) 
  },[]);  

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
          <div className="avatar">
            <img src={getImg(data.avatar)} /></div>
          <div className="full-name">{data.fullName}</div>
        </div>
      ),
    },
    {
      title: "Email",
      key: "email",
      width: "50%",
      render: (value, data) => data.email
    },
    {
      title: "Điểm số",
      key: "point",
      dataIndex: "point",
      className: "point",
      render: (item, data) => (
        <Tag color={"red"} key={data.id}>
          {data.score}
        </Tag>
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

  return (
    <WrapperStyled>
      <div className="list-rank">
        <div className="title-project">SkyingClub</div>
        <div className="title-page">TOP 20 BẢNG XẾP HẠNG THÀNH TÍCH</div>
        <Table
          dataSource={listRank}
          columns={column}
          pagination={false}
          footer={false}
        />
      </div>
    </WrapperStyled>
  );
};

export default connect(
  ({ rank: { _listData: listRank } }) => ({
    listRank
  }),
  ({
     rank: {_getList: getRank}
  }) => ({
    getRank
  })
)(Rank);