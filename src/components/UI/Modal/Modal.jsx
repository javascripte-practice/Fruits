import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

const ModalBackground = (props) => {
  return <div className={styles.modalBackground} onClick={props.isOpen}></div>;
};
const ModalOverlight = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}></div>
      <div className={styles.modalMessage}>{props.message}</div>
      <div className={styles.modalFooter}>
        <button type="button" onClick={props.isOpen}>
          Ok
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <ModalBackground isOpen={props.isOpen} />,
        document.getElementById("modal-background")
      )}
      {ReactDom.createPortal(
        <ModalOverlight message={props.message} isOpen={props.isOpen} />,
        document.getElementById("modal-overlight")
      )}
    </>
  );
};

export default Modal;
