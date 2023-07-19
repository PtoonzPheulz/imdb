import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import user from "../images/user.png";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

export default function Home() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search keyword!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="!bg-[#1a242f] ps-[40px] pe-[40px] flex align-items-center justify-content-between h-[72px]">
      <div className="text-fontPrimary">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar w-50 flex justify-content-center">
        <form
          className="flex justify-content-center me[20px] w-[60%]"
          onSubmit={submitHandler}
        >
          <input
            className="fs-[18px] w-100 py-[5px] pe-[5px] ps-[10px] h-[38px] outline-none"
            type="text"
            placeholder="Search Movies"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            className="px-[8px] bg-white fs-[20px] text-black cursor-pointer h-[38px]"
            type="submit"
          >
            <BsSearch size={20} color="#000" />
          </button>
        </form>
        <div className="user-image ms-5">
          <img src={user} className="w-[38px] h-[38px] " alt="user" />
        </div>
      </div>
    </div>
  );
}
