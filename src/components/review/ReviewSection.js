import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReviewItem from "./ReviewItem";
import Head from "../../UI/Head";
import "./ReviewSection.css";

const DUUMY__DATA = [
  {
    id: 0,
    name: "jhon deo",
    image: "images/pic-1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 1,
    name: "hanan",
    image: "images/pic-2.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 2,
    name: "mimoun rejaflah",
    image: "images/pic-3.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 3,
    name: "lahssn amyiir",
    image: "images/pic-4.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 4,
    name: "devide deo",
    image: "images/pic-1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 5,
    name: "halima",
    image: "images/pic-2.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 6,
    name: "oualid amzil",
    image: "images/pic-3.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.",
  },
  {
    id: 7,
    name: "dexter",
    image: "images/pic-4.png",
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
