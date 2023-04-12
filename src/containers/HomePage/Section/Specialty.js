import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import specialtyImg from "../../../assets/specialty/121042-than-kinh.jpg";

class Specialty extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    //fire redux event : actions
  };

  render() {
    let settings = {
      dots: false,
      Infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <div className="section-specialty">
        <div className="specialty-container">
          <div className="specialty-header">
            <span className="title-section">Chuyen khoa pho bien</span>
            <button className="btn-section">xem them</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="specialty-custommize">
                <div className="bg-image" />
                <div>Co xuong khop 1</div>
              </div>
              <div className="specialty-custommize">
                <div className="bg-image" />
                <div>Co xuong khop 2</div>
              </div>
              <div className="specialty-custommize">
                <div className="bg-image" />
                <div>Co xuong khop 3</div>
              </div>
              <div className="specialty-custommize">
                <div className="bg-image" />
                <div>Co xuong khop 4</div>
              </div>
              <div className="specialty-custommize">
                <div className="bg-image" />
                <div>Co xuong khop 5</div>
              </div>
              <div className="specialty-custommize">
                <div className="bg-image" />
                <div>Co xuong khop 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(Specialty);
