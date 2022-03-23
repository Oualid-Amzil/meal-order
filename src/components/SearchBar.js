import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

import Modal from "../UI/Modal";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const hideSearchBarHandler = () => {
    dispatch(uiActions.hideBar());
  };
  return (
    <Modal>
      <FullscreenExitIcon
        onClick={hideSearchBarHandler}
        className="exit__searchBar"
        sx={{
          cursor: "pointer",
          height: "40px",
          width: "40px",
          textAlign: "center",
          color: "#fff",
        }}
      />
      <div className="search__container">
        <input type="text" className="text__input" />
        <SearchIcon
          className="search__icon"
          sx={{
            cursor: "pointer",

            height: "40px",
            width: "40px",
            textAlign: "center",
            color: "whitesmoke",
          }}
        />
      </div>
    </Modal>
  );
};

export default SearchBar;
