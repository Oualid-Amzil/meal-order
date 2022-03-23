import React from "react";

import SingleDishe from "./SingleDishe";
import Head from "../../UI/Head";

// import "./DishesSection.css";
import Section from "../../UI/Section";

const DummyData = [
  {
    id: 0,
    name: "tasty food",
    image: "images/dish-1.png",
    price: 15.99,
  },
  {
    id: 1,
    name: "tasty food",
    image: "images/dish-2.png",
    price: 13.99,
  },
  {
    id: 2,
    name: "tasty food",
    image: "images/dish-3.png",
    price: 10.99,
  },
  {
    id: 3,
    name: "tasty food",
    image: "images/dish-4.png",
    price: 14.99,
  },
  {
    id: 4,
    name: "tasty food",
    image: "images/dish-5.png",
    price: 18.99,
  },
  {
    id: 5,
    name: "tasty food",
    image: "images/dish-6.png",
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
