import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../UI/Button";
import { favoriteActions } from "../../store/favorite-slice";
import { cartActions } from "../../store/cart-slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./MenuItem.css";

const MenuItem = ({ meal }) => {
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
    <div className="menu__box">
      <FavoriteIcon
        onClick={addToListHandler}
        className={isLiked ? "heart__icon like" : "heart__icon"}
        sx={{
          padding: "10px",
          fontSize: "45px",
          background: "#fff",
          color: "#192a56",
        }}
      />
      <div className="image">
        <img src={meal.image} alt="item" />
      </div>
      <div className="content">
        <div className="stars">
          <StarIcon
            className="star__icon"
            sx={{ fontSize: "23px", color: "#27ae60" }}
          />
          <StarIcon
            className="star__icon"
            sx={{ fontSize: "23px", color: "#27ae60" }}
          />
          <StarIcon
            className="star__icon"
            sx={{ fontSize: "23px", color: "#27ae60" }}
          />
          <StarIcon
            className="star__icon"
            sx={{ fontSize: "23px", color: "#27ae60" }}
          />
          <StarHalfIcon
            className="star__icon"
            sx={{ fontSize: "23px", color: "#27ae60" }}
          />
        </div>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <div className="footer">
          <Button onClick={addMealHandler}>add to cart</Button>
          <span className="price">${meal.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
