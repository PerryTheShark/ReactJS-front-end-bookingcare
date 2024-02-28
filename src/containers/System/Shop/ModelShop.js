import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//import { emitter } from "../../utils/emitter";

class ModalShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImgURL: "",
      isOpen: false,
      avatar: "",
    };
  }
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.listUsers !== this.props.listUsers) {
      this.setState({
        avatar: "",
        previewImgURL: "",
      });
    }
  }

  openPreviewImage = () => {
    if (!this.state.previewImgURL) return;
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        size="xl"
        className={"modal-uer-container"}
      >
        <ModalHeader>Shop information</ModalHeader>
        <ModalBody>
          <div className="modal-user-body row">
            <div className="content-left col-sm-4">
              <div className="input-container">
                <label>Shop's name</label>
                <input type="text"></input>
              </div>
              <div className="input-container">
                <label>location</label>
                <input type="text"></input>
              </div>
              <div className="input-container">
                <label>phonenumber</label>
                <input type="text"></input>
              </div>
              <div className="input-container">
                <label>Last name</label>
                <input type="text"></input>
              </div>
              <div className="input-container max-width-input">
                <label>desciption</label>
                <input type="text"></input>
              </div>
            </div>

            <div className="content-right col-sm-6">
              <label>Picture</label>
              <div className="preview-img-container">
                <input id="previewImg" type="file" hidden />
                <label className="label-upload" htmlFor="previewImg">
                  Tải ảnh <i className="fas fa-upload"></i>
                </label>
                <div
                  className="preview-image"
                  style={{
                    backgroundImage: `url(${this.state.previewImgURL})`,
                  }}
                  onClick={() => this.openPreviewImage()}
                >
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              alert("Click button addnewuser");
            }}
          >
            Add new
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              alert("click button close");
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalShop);
