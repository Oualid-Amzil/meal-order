import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const lovedMealNumber = useSelector((state) => state.favorite.totalAmount);
  const totalMeals = useSelector((state) => state.shoppingCart.totalMeals);

  const showSearchBarHandler = () => {
    dispatch(uiActions.showBar());
  };

  const showLovedListHandler = () => {
    dispatch(uiActions.showLoved());
  };

  const showCartHandler = () => {
    dispatch(uiActions.showCart());
  };

  const showMobileNavHandler = () => {
    dispatch(uiActions.showMobileNav());
  };

  return (
    <header className="header">
      <Link to="meal-order/Home" className="header__logo">
        <RestaurantIcon fontSize="large" sx={{ color: "#27ae60" }} />
        resto.
      </Link>

      <ul>
        <NavLink
          to="meal-order/home"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li>home</li>
        </NavLink>

        <NavLink
          to="meal-order/dishes"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li>dishes</li>
        </NavLink>

        <NavLink
          to="meal-order/about"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li>about</li>
        </NavLink>

        <NavLink
          to="meal-order/menu"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li>menu</li>
        </NavLink>

        <NavLink
          to="meal-order/review"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li>review</li>
        </NavLink>

        <NavLink
          to="meal-order/order"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li>order</li>
        </NavLink>
      </ul>

      <div className="header__icons">
        <div className="mobile__icon">
          <DehazeIcon
            onClick={showMobileNavHandler}
            className="icon"
            sx={{
              cursor: "pointer",
              marginLeft: "5px",
              height: "40px",
              width: "40px",
              padding: "10px",
              textAlign: "center",
              color: "#192a56",
              borderRadius: "50%",
              background: "#eee",
            }}
          />
        </div>
        <ManageSearchOutlinedIcon
          onClick={showSearchBarHandler}
          className="icon"
          sx={{
            cursor: "pointer",
            marginLeft: "5px",
            height: "40px",
            width: "40px",
            padding: "10px",
            textAlign: "center",
            color: "#192a56",
            borderRadius: "50%",
            background: "#eee",
          }}
        />
        <div className="amount">
          <span>{lovedMealNumber}</span>
          <FavoriteIcon
            onClick={showLovedListHandler}
            className="icon"
            sx={{
              cursor: "pointer",
              marginLeft: "5px",
              height: "40px",
              width: "40px",
              padding: "10px",
              textAlign: "center",
              color: "#192a56",
              borderRadius: "50%",
              background: "#eee",
            }}
          />
        </div>
        <div className="amount">
          <span>{totalMeals}</span>
          <ShoppingCartIcon
            onClick={showCartHandler}
            className="icon"
            sx={{
              cursor: "pointer",
              marginLeft: "5px",
              height: "40px",
              width: "40px",
              padding: "10px",
              textAlign: "center",
              color: "#192a56",
              borderRadius: "50%",
              background: "#eee",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
