import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import "./Specialty.scss";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";

import Slider from "react-slick";

class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      console.log(
        "Perry check doctorRedux in componentDidUpdate: ",
        this.props.topDoctorsRedux
      );
      this.setState({
        arrDoctors: this.props.topDoctorsRedux,
      });
    }
  }

  componentDidMount() {
    this.props.loadTopDoctors();
  }

  render() {
    let arrDoctors = this.state.arrDoctors;
    let { language } = this.props;
    arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors);
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bac si noi bat tuan qua</span>
            <button className="btn-section">xem them</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              {arrDoctors &&
                arrDoctors.length > 0 &&
                arrDoctors.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                  }
                  console.log("Perry show item to see position", item);
                  let nameVi = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                  let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                  return (
                    <div className="section-customize" key={index}>
                      <div className="customize-border">
                        <div className="outer-bg">
                          <div
                            className="bg-image section-outstanding-doctor"
                            style={{ backgroundImage: `url(${imageBase64})` }}
                          ></div>
                        </div>
                        <div className="position text-center">
                          <div>
                            {" "}
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                          </div>
                          <div> Co xuong khop</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
    topDoctorsRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
