import participantProvider from "@src/data-access/participant-provider";
import { getImg } from "@src/utils/common";
import { Badge, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { rank } from "./data";
import { WrapperStyled } from "./styled";

const Sport = ({ _listData = [], _getList, updateData }) => {
  const [state, _setState] = useState({ showBill: false });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  useEffect(() => {
    participantProvider._search({size : 10}).then(res => {
      if(res && res.code === 0) {
        setState({_listData: res.data})
      }
    }) 
  }, []);

  const column = [
    {
      title: "STT",
      key: "stt",
      render: (_, __, idx) => idx + 1,// tham soso 1 : lấy giá trị của  trường dataindex trong object, ts 2: cả object, ts3: chỉ số
    },
    {
      title: "Tên",
      key: "fullName",
      dataIndex: "fullName",
      width: "40%",
      render: (_, data) => (
        <div className="full-name">
          <div className="avatar">
            <img src={getImg(data.avatar)} />
          </div>
          <div className="full-name">{data.fullName}</div>
        </div>
      ),
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Event",
      key: "event",
      render: (value, data) => (
        <Tag color={"red"} key={data.id}>
          {data.nameEvent}
        </Tag>)
    },
    {
      title: "Điểm số",
      key: "point",
      dataIndex: "point",
      className: "point",
      render: (item, data) => (
        <Tag color={"red"} key={data.id}>
          {item}
        </Tag>
      ),
    },
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
  ];

  return (
    <WrapperStyled>
      <div className="list-rank">
        <div className="title-page">Bảng xếp hạng thành tích</div>
        <Table
          dataSource={state._listData}
          columns={column}
          pagination={false}
          footer={false}
        />
        {/* {rank.map((item, index) => (
          <div className="item-rank">
            <div className="item-rank_content">
              <div className="stt">{index + 1}</div>
              <div className="full-name">{item.fullName}</div>
              <div className="point">{item.point}</div>
            </div>
          </div>
        ))} */}
      </div>
    </WrapperStyled>
  );
};

export default connect(
  ({ account: { _listData } }) => ({ _listData }),
  ({ account: { _getList, updateData } }) => ({ _getList, updateData })
)(Sport);
