import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyên khoa</b>
                </div>
                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="subs-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="subs-title">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="subs-title">
                  Gói khám Khám sức khỏe tổng quát
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle">ho tro</i>
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1"> NEN TANG Y TE</div>
            <div className="title1"> CHAM SOC SUC KHOE TOAN DIEN</div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tim chuyen khoa kham benh" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-hospital"> </i>
                </div>
                <div className="text-child">Kham chuyen khoa</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"> </i>
                </div>
                <div className="text-child">Kham tu xa</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital-alt"> </i>
                </div>
                <div className="text-child">Kham tong quat</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-microscope"> </i>
                </div>
                <div className="text-child">Kham xet nghiem y hoc</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"> </i>
                </div>
                <div className="text-child">suc khoe tinh than</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-tooth"> </i>
                </div>
                <div className="text-child">Kham nha khoa</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);