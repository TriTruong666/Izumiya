import React, { useEffect, useState } from "react";
// import styles
import "../../styles/shop/shop.css";
// import components
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Settingnav } from "../../components/navbar/Settingnav";
import { Shopnav } from "../../components/navbar/Shopnav";
import { Shoplist } from "../../components/shop/Shoplist";
// import API call

export const Shop = () => {
  // state
  const [isAuth, setIsAuth] = useState(false);

  // handle func
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSetIsAuth = () => {
    if (!token && !user) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  };
  useEffect(() => {
    handleSetIsAuth();
  }, []);

  return (
    <div className="shop-container">
      <Navbar />
      {isAuth && <Settingnav />}
      <div className="shop">
        <div className="shop-header">
          <strong>IZUMIYA SHOP</strong>
          <p>
            You will find all of the best products for your koi from our
            suppliers.
          </p>
        </div>
        <div className="shop-main">
          <div className="shop-main-header">
            <strong>All Product</strong>
            <div className="header-filter">
              <p> products</p>
              <i className="bx bx-grid-horizontal"></i>
              <i className="bx bx-grid-vertical"></i>
              <select name="" id="">
                <option value="">Filter</option>
                <option value="">Filter</option>
                <option value="">Filter</option>
                <option value="">Filter</option>
              </select>
            </div>
          </div>
          <div className="shop-main-list">
            <Shopnav />
            <Shoplist />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
