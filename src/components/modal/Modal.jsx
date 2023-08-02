import React from "react";

const Modal = ({ text = "success" }) => {
  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-success flex justify-center">
        <span className="text-white font-bold">{text}</span>
      </div>
    </div>
  );
};

export default Modal;
