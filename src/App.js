import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import LovedMealsList from "./components/LovedMealsList";
import ShoppingCart from "./components/cart/ShoppingCart";
import Dishes from "./pages/Dishes";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Review from "./pages/Review";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import SearchBar from "./components/SearchBar";
import Notification from "./UI/Notification";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import {
  sendShoppingCartData,
  getShoppingCartData,
} from "./store/cart-actions";
import {
  sendFavoriteMealData,
  getFavoriteMealData,
} from "./store/favorite-actions";

import "./App.css";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showSearchBar = useSelector((state) => state.ui.showSearchBar);
  const showLovedList = useSelector((state) => state.ui.showLovedList);
  const showShoppingCart = useSelector((state) => state.ui.showShoppingCart);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const favoriteMeals = useSelector((state) => state.favorite);
  const notification = useSelector((state) => state.ui.notification);
  const showMobileNav = useSelector((state) => state.ui.showMobileNav);

  useEffect(() => {
    dispatch(getShoppingCartData());
    dispatch(getFavoriteMealData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (favoriteMeals.changed) {
      dispatch(sendFavoriteMealData(favoriteMeals));
    }
  }, [favoriteMeals, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (shoppingCart.changed) {
      dispatch(sendShoppingCartData(shoppingCart));
    }
  }, [shoppingCart, dispatch]);

  return (
    <>
      <div className="App">
        {showMobileNav && <MobileNav />}

        {showShoppingCart && <ShoppingCart />}
        {showLovedList && <LovedMealsList />}
        {showSearchBar && <SearchBar />}
        <NavBar />
        {notification && <Notification {...notification} />}
        <Routes>
          <Route path="meal-order/" element={<Navigate to="/home" />}></Route>
          <Route path="meal-order/home" element={<Home />}></Route>
          <Route path="meal-order/dishes" element={<Dishes />}></Route>
          <Route path="meal-order/about" element={<About />}></Route>
          <Route path="meal-order/menu" element={<Menu />}></Route>
          <Route path="meal-order/Review" element={<Review />}></Route>
          <Route path="meal-order/order" element={<Order />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
