import React from "react";

import MenuItem from "./MenuItem";
import Head from "../../UI/Head";

// import "./MenuSection.css";
import Section from "../../UI/Section";

const DUUMY__DATA = [
  {
    id: 6,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-1.jpg",
    price: 26.99,
  },
  {
    id: 7,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-2.jpg",
    price: 8.99,
  },
  {
    id: 8,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-3.jpg",
    price: 22.99,
  },
  {
    id: 9,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-4.jpg",
    price: 15.99,
  },
  {
    id: 10,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-5.jpg",
    price: 20.99,
  },
  {
    id: 11,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-6.jpg",
    price: 12.99,
  },
  {
    id: 12,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-7.jpg",
    price: 16.69,
  },
  {
    id: 13,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-8.jpg",
    price: 12.93,
  },
  {
    id: 14,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: "images/menu-9.jpg",
    price: 9.99,
  },
];

const MenuSection = () => {
  return (
    <Section>
      <Head subHeading="Our Menu" heading="TODAY'S SPECIALTY" />

      <div className="box__container">
        {DUUMY__DATA.map((meal) => (
          <MenuItem key={meal.id} meal={meal} />
        ))}
      </div>
    </Section>
  );
};

export default MenuSection;
