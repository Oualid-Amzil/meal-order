import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import picOne from "../../images/pic-1.png";
import picTow from "../../images/pic-2.png";
import picThree from "../../images/pic-3.png";
import picFour from "../../images/pic-4.png";

import ReviewItem from "./ReviewItem";
import Head from "../../UI/Head";
import "./ReviewSection.css";
import { PieChartOutlineRounded } from "@mui/icons-material";

const DUUMY__DATA = [
  {
    id: 0,
    name: "jhon deo",
    image: picOne,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 1,
    name: "hanan",
    image: picTow,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 2,
    name: "mimoun rejaflah",
    image: picThree,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 3,
    name: "lahssn amyiir",
    image: picFour,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 4,
    name: "devide deo",
    image: picOne,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 5,
    name: "halima",
    image: picTow,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 6,
    name: "oualid amzil",
    image: picThree,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 7,
    name: "dexter",
    image: picFour,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
];

const ReviewSection = () => {
  let settings = {};

  if (window.innerWidth < 460) {
    settings = {
      dots: false,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else {
    settings = {
      dots: false,
      infinite: true,
      speed: 350,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
  }

  return (
    <section className="review">
      <Head subHeading="Customer's Review" heading="WHAT THEY SAY" />

      <Slider {...settings}>
        {DUUMY__DATA.map((userReview) => (
          <ReviewItem key={userReview.id} userReview={userReview} />
        ))}
      </Slider>
    </section>
  );
};

export default ReviewSection;
