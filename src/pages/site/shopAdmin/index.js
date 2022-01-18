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
    <div className="container">
    <div className="page-header">
        <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
    </div>
    <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search item name" />
                <span className="input-group-btn">
                    <button className="btn btn-info" type="button">Clear</button>
                </span>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort by <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                    <li><a role="button">Name ASC</a></li>
                    <li><a role="button">Name DESC</a></li>
                    <li role="separator" className="divider" />
                    <li><a role="button">Level ASC</a></li>
                    <li><a role="button">Level DESC</a></li>
                </ul>
                <span className="label label-success label-medium">NAME - DESC</span>
            </div>
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block marginB10">Add Item</button>
        </div>
    </div>
    <div className="row marginB10">
        <div className="col-md-offset-7 col-md-5">
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Item Name" />
                </div>
                <div className="form-group">
                    <select className="form-control">
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-default">Cancel</button>
            </form>
        </div>
    </div>
    <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th style={{ width: '10%' }} className="text-center">#</th>
                    <th>Name</th>
                    <th style={{ width: '15%' }} className="text-center">Level</th>
                    <th style={{ width: '15%' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">1</td>
                    <td>Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết</td>
                    <td className="text-center"><span className="label label-danger">High</span></td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">2</td>
                    <td>Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018</td>
                    <td className="text-center"><span className="label label-default">Small</span></td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">3</td>
                    <td>Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo</td>
                    <td className="text-center"><span className="label label-info">Medium</span></td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">4</td>
                    <td>Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết</td>
                    <td className="text-center"><span className="label label-info">Medium</span></td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">5</td>
                    <td>VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết</td>
                    <td className="text-center"><span className="label label-info">Medium</span></td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">6</td>
                    <td><input type="text" className="form-control" defaultValue="F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020" /></td>
                    <td className="text-center">
                        <select className="form-control">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </td>
                    <td>
                        <button type="button" className="btn btn-default btn-sm">Cancel</button>
                        <button type="button" className="btn btn-success btn-sm">Save</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    
  );
};

//export default connect(({ shop: { listAdd } }) => ({ listAdd }))(Shop);

