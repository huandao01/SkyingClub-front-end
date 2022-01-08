import { message } from "antd";
import React, { useState } from "react";

const CardSport = ({ item }) => {
  const [state, _setState] = useState({ isRegister: false });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

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
            <div className="title">{item.title}</div>
            <div className="description">{item.content}</div>
            <div className="btn-register">
              <div
                className={`btn-register_content ${
                  state.isRegister ? "is-register" : ""
                }`}
                onClick={() => {
                  setState({ isRegister: true });
                  if (!state.isRegister) message.success("Đăng ký thành công");
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

export default CardSport;
