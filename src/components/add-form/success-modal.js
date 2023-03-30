import React from "react";
import Modal from "react-modal";
import "./success-modal.css";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";

const SuccessModal = ({modalOpen, setModalOpen}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff5d7",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img
          src={require("../../assets/images/added-image.png")}
          alt="Expense Added"
          className="added-image"
        />
        <NavLink to="/">
        <div className="take-home-button">
          <i>
            <GoHome />
          </i>Home
        </div>
        </NavLink>
      </div>
    </Modal>
  );
};

export default SuccessModal;
