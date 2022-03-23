import React from "react";

import MenuItem from "./MenuItem";
import Head from "../../UI/Head";

import menuOne from "../../images/menu-1.jpg";
import menuTow from "../../images/menu-2.jpg";
import menuThree from "../../images/menu-3.jpg";
import menuFour from "../../images/menu-4.jpg";
import menuFive from "../../images/menu-5.jpg";
import menuSix from "../../images/menu-6.jpg";
import menuSeven from "../../images/menu-7.jpg";
import menuEight from "../../images/menu-8.jpg";
import menuNine from "../../images/menu-9.jpg";

import Section from "../../UI/Section";

const DUUMY__DATA = [
  {
    id: 6,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuOne,
    price: 26.99,
  },
  {
    id: 7,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuTow,
    price: 8.99,
  },
  {
    id: 8,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuThree,
    price: 22.99,
  },
  {
    id: 9,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuFour,
    price: 15.99,
  },
  {
    id: 10,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuFive,
    price: 20.99,
  },
  {
    id: 11,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuSix,
    price: 12.99,
  },
  {
    id: 12,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuSeven,
    price: 16.69,
  },
  {
    id: 13,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuEight,
    price: 12.93,
  },
  {
    id: 14,
    name: "Delicious Food",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
    image: menuNine,
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
