import React from "react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./ReviewItem.css";

const ReviewItem = ({ userReview }) => {
  return (
    <div className="review__wrapper">
      <FormatQuoteIcon className="quote__icon" />
      <div className="user">
        <img src={userReview.image} alt="user" />
        <div className="user__info">
          <h3>{userReview.name}</h3>
          <div className="stars">
            <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
            <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
            <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
            <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
            <StarHalfIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
          </div>
        </div>
      </div>
      <p>{userReview.review}</p>
    </div>
  );
};

export default ReviewItem;
