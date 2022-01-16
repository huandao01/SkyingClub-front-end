import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CardSport from "./components/card-sport";
import { nhayDu, sport } from "./data";
import { WrapperStyled } from "./styled";

const Sport = ({listEvent = [], getEvent}) => {
  const [state, _setState] = useState({ showBill: false });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
//  goij API
  useEffect(()=>{
    getEvent({page: 0, site : 10})
  },[]) 

  return (
    <WrapperStyled>
      <div>
          <div className="title-group">Dữ liệu từ API</div>
          <div className="list-sport">
          {listEvent.map((item, idx) => (
              <CardSport key={idx} item={item} />
            ))}
          </div>
        </div>
       
      {sport.map((group, index) => (
        <div key={index}>
          <div className="title-group">{group.header}</div>
          <div className="list-sport">
            {group.listActivity.map((item, idx) => (
              <CardSport key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </WrapperStyled>
  );
};



export default connect(
  ({ auth: { auth }, event: { _listData: listEvent } }) => ({
    auth,
    listEvent,
  }),
  ({
     event: {_getList: getEvent}
  }) => ({
    getEvent
  })
)(Sport);
