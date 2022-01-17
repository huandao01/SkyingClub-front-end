import { message } from "antd";
import React, { useEffect, useState } from "react";
import participantProvider from "@src/data-access/participant-provider";
import { connect } from "react-redux";


const CardSport = ({ item, auth }) => {
  const [state, _setState] = useState({ isRegister: false });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };


useEffect(()=>{
  setState({isRegister: item.isRegister})
},[item]) 

  return (
    <div className="list-sport__item">
      <div className="item-sport">
        <div className="item-sport_body">
          <div className="item-sport_background">
            <img
              src={item.img || require("@assets/images2/sport1.jpg").default}
            />
          </div>
          <div className="item-sport_content">
            <div className="title">{item.nameEvent}</div>
            <div className="description">{item.content}</div>
            <div className="btn-register">
              <div
                className={`btn-register_content ${
                  state.isRegister ? "is-register" : ""
                }`}
                onClick={() => {
                  setState({ isRegister: true });
                  if (!state.isRegister) {
                  participantProvider._post({userId : auth.userId, eventId: item.id}).then(
                    res => {
                      if(res && res.code === 0 ) {
                        message.success("Đã đăng kí")
                      }
                    }
                  )

                  };
                }}
              >
                {state.isRegister ? "Đăng ký thành công" : "Đăng ký"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default connect(
  ({ auth: { auth } }) => ({
    auth,
  }),
)(CardSport);
