import React from "react";
// import styles
import "../../styles/components/navbar/navbar.css";
// import assets
import logo from "../../assets/logo.png";
export const Checkoutnav = () => {
  return (
    <div className="checkoutnav-container">
      <div className="checkoutnav-logo">
        <img src={logo} alt="" />
        <strong>Izumiya Koi</strong>
      </div>
      <div className="checkoutnav-process">
        <div className="process-item">
          <i className="bx bxs-check-circle"></i>
          <p>Cart</p>
        </div>
        <div className="line"></div>
        <div className="process-item">
          <i className="bx bxs-check-circle"></i>
          <p>Checkout</p>
        </div>
        <div className="line"></div>
        <div className="process-item">
          <i className="bx bxs-check-circle"></i>
          <p>Confirm</p>
        </div>
      </div>
    </div>
  );
};