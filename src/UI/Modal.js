import React from "react";
import ReactDOM from "react-dom";

import "animate.css";

import "./Modal.css";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop animate__animated  animate__slideInDown"
      onClick={props.onClick}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="modal animate__animated  animate__slideInDown">
      <div className="content"> {props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const hideSearchHandler = () => {
    console.log("It worked.");
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={hideSearchHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
