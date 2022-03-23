import React from "react";

import "./Head.css";

const Head = ({ subHeading, heading }) => {
  return (
    <>
      <h3 className="sub__heading">{subHeading}</h3>
      <h1 className="heading">{heading}</h1>
    </>
  );
};

export default Head;
