import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { LANGUAGES } from "../../../utils";
import { getScheduleDoctorByDate } from "../../../services/userService";
import { FormattedMessage } from "react-intl";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: true,
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  showHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status,
    });
  };

  render() {
    let { isShowDetailInfor } = this.state;

    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
          <div className="text-address">ĐỊA CHỈ KHÁM</div>
          <div className="name-clinic">Bệnh viện Ung bướu Hưng Việt</div>
          <div className="detail-address">
            34 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfor ? (
            <>
              <div className="title-price">GIÁ KHÁM</div>
              <div className="detail-infor">
                <div className="price">
                  <span className="left">công nghệ cao NBI</span>
                  <span className="right">2.600.000đ</span>
                </div>
                <div className="note">
                  Đối với các đơn vị bảo hiểm không bảo lãnh trực tiếp: Bệnh
                  viện
                </div>
              </div>
              <div className="payment">
                xuất hoá đơn tài chính và hỗ trợ bệnh nhân hoàn thiện hồ sơ
              </div>
              <div className="hide-price">
                <span onClick={() => this.showHideDetailInfor(false)}>
                  Ẩn bảng giá
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="short-infor">
                GIA KHAM: 10000d.
                <span onClick={() => this.showHideDetailInfor(true)}>
                  xem chi tiet.
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.app.language };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
