import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setBaseUrlAction } from "../redux/actions/baseUrlActions";
import { fetchRandomDogImageAction } from "../redux/actions/dogImageActions";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickDog = () => {
    dispatch(setBaseUrlAction(import.meta.env.VITE_DOG_API));
    navigate("/");
  };

  const handleClickCat = () => {
    dispatch(setBaseUrlAction(import.meta.env.VITE_CAT_API));
    navigate("/cat");
  };

  return (
    <div className="flex justify-around text-4xl text-white p-10 bg-slate-900">
      <Link
        to={"/"}
        className="p-2 hover:text-slate-400"
        onClick={handleClickDog}
      >
        Dogs
      </Link>
      <Link
        to={"/cat"}
        className="p-2 hover:text-slate-400"
        onClick={handleClickCat}
      >
        Cats
      </Link>
    </div>
  );
};

export default NavBar;
