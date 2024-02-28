import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ModalEmployee from "../containers/Employee/ModalEmployee";
import Shop from "../containers/System/Shop/Shop";

class Manager extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/manager" component={Shop} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
