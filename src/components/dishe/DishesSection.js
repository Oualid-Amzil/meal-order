import React from "react";

import SingleDishe from "./SingleDishe";
import Head from "../../UI/Head";

import dishOne from "../../images/dish-1.png";
import dishTow from "../../images/dish-2.png";
import dishThree from "../../images/dish-3.png";
import dishFour from "../../images/dish-4.png";
import dishFive from "../../images/dish-5.png";
import dishSix from "../../images/dish-6.png";

import Section from "../../UI/Section";

const DummyData = [
  {
    id: 0,
    name: "tasty food",
    image: dishOne,
    price: 15.99,
  },
  {
    id: 1,
    name: "tasty food",
    image: dishTow,
    price: 13.99,
  },
  {
    id: 2,
    name: "tasty food",
    image: dishThree,
    price: 10.99,
  },
  {
    id: 3,
    name: "tasty food",
    image: dishFour,
    price: 14.99,
  },
  {
    id: 4,
    name: "tasty food",
    image: dishFive,
    price: 18.99,
  },
  {
    id: 5,
    name: "tasty food",
    image: dishSix,
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
