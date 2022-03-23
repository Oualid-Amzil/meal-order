import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../../store/favorite-slice";
import { cartActions } from "../../store/cart-slice";

import Button from "../../UI/Button";

import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import "./SingleDishe.css";

const SingleDishe = ({ meal }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const lovedMeals = useSelector((state) => state.favorite.lovedMeals);

  useEffect(() => {
    const existingMeal = lovedMeals.find((item) => item.id === meal.id);
    if (existingMeal) {
      setIsLiked(true);
    }
  }, [lovedMeals, meal.id]);

  const addToListHandler = () => {
    dispatch(favoriteActions.addToList(meal));
    setIsLiked(!isLiked);
  };

  const addMealHandler = () => {
    dispatch(cartActions.addMealToCart(meal));
  };

  return (
    <div className="box__dishe" key={meal.id}>
      <FavoriteIcon
        onClick={addToListHandler}
        className={isLiked ? "heart__icon like" : "heart__icon"}
        sx={{
          padding: "10px",
          fontSize: "45px",
          background: "rgb(243, 235, 235)",
          color: "#192a56",
        }}
      />
      <VisibilityIcon
        className="visible__icon"
        sx={{
          padding: "10px",
          fontSize: "45px",
          background: "rgb(243, 235, 235)",
          color: "#192a56",
        }}
      />
      <div className="image">
        <img src={meal.image} alt="dish" />
      </div>
      <h3>{meal.name}</h3>
      <div className="stars">
        <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
        <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
        <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
        <StarIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
        <StarHalfIcon sx={{ fontSize: "17px", color: "#27ae60" }} />
      </div>
      <div className="price__add">
        <span>${meal.price}</span>
        <Button onClick={addMealHandler}>add to cart</Button>
      </div>
    </div>
  );
};

export default SingleDishe;
