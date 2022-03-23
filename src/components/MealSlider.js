import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import homeImg1 from "../images/home-img-1.png";
import homeImg2 from "../images/home-img-2.png";
import homeImg3 from "../images/home-img-3.png";

import Button from "../UI/Button";
import { cartActions } from "../store/cart-slice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MealSlider.css";

const DUUMY__DATA = [
  {
    id: 0,
    name: "spicy noodles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?",
    price: 23.99,
    image: homeImg1,
  },
  {
    id: 1,
    name: "friede chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?",
    price: 19.99,
    image: homeImg2,
  },
  {
    id: 2,
    name: "hot pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?",
    price: 15.99,
    image: homeImg3,
  },
];

const MealSlider = () => {
  const dispatch = useDispatch();

  const addMealHandler = (meal) => {
    dispatch(cartActions.addMealToCart(meal));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let content = DUUMY__DATA.map((meal) => {
    return (
      <div className="wrapper__slide" key={meal.id}>
        <div className="meal__content">
          <span>our special dish</span>
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <Link to="/home">
            <Button onClick={addMealHandler.bind(this, meal)}>order now</Button>
          </Link>
        </div>
        <div className="image">
          <img src={meal.image} alt="meal" />
        </div>
      </div>
    );
  });

  return (
    <div className="meal__slider">
      <Slider {...settings}>{content}</Slider>
    </div>
  );
};

export default MealSlider;
