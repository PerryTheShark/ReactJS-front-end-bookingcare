import React, { Component } from "react";
import { connect } from "react-redux";
import "./Shop.scss";
import ModalShop from "./ModelShop";
import Navbar from "../../../components/navbar/navbar";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  render() {
    let { language } = this.props;
    return (
      <>
        <div className="users-container">
          <Navbar></Navbar>
          {/* <ModalShop
            isOpen={true}
            toggleFromParent={this.toggleUserModel}
            createNewUser={this.createNewUser}
          /> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.app.language, user: state.user.userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
