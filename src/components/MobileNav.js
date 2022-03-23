import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { uiActions } from "../store/ui-slice";
import Modal from "../UI/Modal";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import "./MobileNav.css";

const MobileNav = () => {
  const dispatch = useDispatch();

  const hideMobileNavHandler = () => {
    dispatch(uiActions.hideMobileNav());
  };

  return (
    <Modal>
      <div className="mobile__nav">
        <FullscreenExitIcon
          onClick={hideMobileNavHandler}
          className="exit__icon"
          sx={{
            cursor: "pointer",
            height: "40px",
            width: "40px",
            textAlign: "center",
            color: "#fff",
          }}
        />
        <ul onClick={hideMobileNavHandler}>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/dishes">
            <li>dishes</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/review">
            <li>Review</li>
          </Link>
          <Link to="/order">
            <li>Order</li>
          </Link>
        </ul>
      </div>
    </Modal>
  );
};

export default MobileNav;
