import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="box__container">
        <div className="box__footer">
          <h3>locations</h3>
          <ul className="footer__list">
            <li>india</li>
            <li>japan</li>
            <li>russia</li>
            <li>USA</li>
            <li>france</li>
          </ul>
        </div>

        <div className="box__footer">
          <h3>quick links</h3>
          <ul className="footer__list">
            <Link to="/meal-order/home">
              <li>home</li>
            </Link>
            <Link to="/meal-order/dishes">
              <li>dishes</li>
            </Link>
            <Link to="/meal-order/about">
              <li>about</li>
            </Link>
            <Link to="/meal-order/menu">
              <li>menu</li>
            </Link>
            <Link to="/meal-order/review">
              <li>review</li>
            </Link>
            <Link to="/meal-order/order">
              <li>order</li>
            </Link>
          </ul>
        </div>

        <div className="box__footer">
          <h3>contact info</h3>
          <ul className="footer__list">
            <li>+123-456-7890</li>
            <li>+111-222-3333</li>
            <li>shaikhanas@gmail.com</li>
            <li>anasbhai@gmail.com</li>
            <li>mumbai, india - 400104</li>
          </ul>
        </div>

        <div className="box__footer">
          <h3>follow us</h3>
          <ul className="footer__list">
            <li>facebook</li>
            <li>twitter</li>
            <li>instagram</li>
            <li>linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
