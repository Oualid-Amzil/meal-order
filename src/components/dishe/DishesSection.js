import React from "react";

import SingleDishe from "./SingleDishe";
import Head from "../../UI/Head";

import disheOne from "../../images/dish-1.png";
import disheTow from "../../images/dish-2.png";
import disheThree from "../../images/dish-3.png";
import disheFour from "../../images/dish-4.png";
import disheFive from "../../images/dish-5.png";
import disheSix from "../../images/dish-6.png";

// import "./DishesSection.css";
import Section from "../../UI/Section";

const DummyData = [
  {
    id: 0,
    name: "tasty food",
    image: disheOne,
    price: 15.99,
  },
  {
    id: 1,
    name: "tasty food",
    image: disheTow,
    price: 13.99,
  },
  {
    id: 2,
    name: "tasty food",
    image: disheThree,
    price: 10.99,
  },
  {
    id: 3,
    name: "tasty food",
    image: disheFour,
    price: 14.99,
  },
  {
    id: 4,
    name: "tasty food",
    image: disheFive,
    price: 18.99,
  },
  {
    id: 5,
    name: "tasty food",
    image: disheSix,
    price: 22.99,
  },
];

const DishesSection = () => {
  return (
    <Section>
      <Head subHeading="Our Dishes" heading="POPULAIR DISHES" />

      <div className="box__container">
        {DummyData.map((meal) => {
          return <SingleDishe key={meal.id} meal={meal} />;
        })}
      </div>
    </Section>
  );
};

export default DishesSection;
