import React from "react";
import { Modal } from "react-bootstrap";

const CommonModal = ({ show, closeHandler, children, size, showHeader, title, scrollable }) => {
  return (
    <Modal
      size={size}
      show={show}
      onHide={closeHandler}
      className="bg-transparent text-dark"
      scrollable={scrollable}
    >
      {showHeader && (
        <Modal.Header className="m-0 p-0 ps-3 pe-3 pt-2" closeButton>
          <h6 className="fs_16 fw-bold">{title}</h6>
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

CommonModal.defaultProps = {
  size: "xl",
  showHeader: true,
  title: "",
  scrollable: true,
};

export default CommonModal;
