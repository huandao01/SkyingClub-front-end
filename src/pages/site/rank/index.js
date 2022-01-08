import React, { useState } from "react";
import { rank } from "./data";
import { WrapperStyled } from "./styled";

const Sport = (props) => {
  const [state, _setState] = useState({ showBill: false });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
  return (
    <WrapperStyled>
      <div className="title-page"></div>
      <div className="list-rank">
        {rank.map((item, index) => (
          <div className="item-rank">
            <div className="item-rank_content">
              <div className="stt">{index + 1}</div>
              <div className="full-name">{item.fullName}</div>
              <div className="point">{item.point}</div>
            </div>
          </div>
        ))}
      </div>
    </WrapperStyled>
  );
};

export default Sport;
