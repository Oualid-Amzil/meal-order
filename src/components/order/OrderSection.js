import React from "react";

import Head from "../../UI/Head";
import "./OrderSection.css";

const OrderSection = () => {
  return (
    <section className="order">
      <Head subHeading="Order Now" heading="FREE AND FAST" />
      <form>
        <div className="wrapper">
          <div className="input__element">
            <span>Your Name</span>
            <input
              type="text"
              placeholder="enter your name"
              className="input"
            />
          </div>
          <div className="input__element">
            <span>Your Number</span>
            <input
              type="number"
              placeholder="enter your number"
              className="input"
            />
          </div>
          <div className="input__element">
            <span>Your Order</span>
            <input
              type="text"
              placeholder="enter food name"
              className="input"
            />
          </div>
          <div className="input__element">
            <span>Additional Food</span>
            <input
              type="text"
              placeholder="extra with food"
              className="input"
            />
          </div>
          <div className="input__element">
            <span>How Much</span>
            <input
              type="number"
              placeholder="how many orders"
              className="input"
            />
          </div>
          <div className="input__element">
            <span>Date And Time</span>
            <input type="datetime-local" className="input" />
          </div>
        </div>
        <div className="wrapper">
          <div className="input__element">
            <span>Your Address</span>
            <textarea
              name=""
              placeholder="enter your address"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="input__element">
            <span>Your Message</span>
            <textarea
              name=""
              placeholder="enter your message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <button>Order Now </button>
      </form>
    </section>
  );
};

export default OrderSection;
