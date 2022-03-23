import React from "react";

import Button from "../UI/Button";
import Head from "../UI/Head";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about">
      <Head subHeading="About Us" heading="WHY CHOOSE US?" />

      <div className="row">
        <div className="image">
          <img src="images/about-img.png" alt="about" />
        </div>

        <div className="content">
          <h3>Best Food In The Country</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sequi corrupti corporis quaerat voluptatem ipsam neque labore modi
            autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio
            corporis nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.
          </p>
          <div className="icons-container">
            <div className="icons">
              <LocalShippingIcon
                className="about__icon"
                sx={{ color: "#27ae60", marginRight: "8px", fontSize: "30px" }}
              />
              <span>Free Delivery</span>
            </div>
            <div className="icons">
              <CurrencyExchangeIcon
                className="about__icon"
                sx={{ color: "#27ae60", marginRight: "8px", fontSize: "30px" }}
              />
              <span>Easy Payments</span>
            </div>
            <div className="icons">
              <SupportAgentIcon
                className="about__icon"
                sx={{ color: "#27ae60", marginRight: "8px", fontSize: "30px" }}
              />
              <span>24/7 Service</span>
            </div>
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
