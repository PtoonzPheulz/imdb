import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "./MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <div className=""></div>
      <MovieListing />
    </div>
  );
}
