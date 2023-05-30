import React, { Component } from "react";
import { connect } from "react-redux";

class ManageSchdule extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <div className="">manage-schedule</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchdule);
