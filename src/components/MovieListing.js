import React from "react";
import Slider from "react-slick";
import { settings } from "../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="buull">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="">
      <div className="my-[20px]">
        <h2 className="text-fontSecondary mb-[10px] fw-400 ">MOVIES</h2>
        <div className="overflow-hidden">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="my-[20px] ">
        <h2 className="text-fontSecondary mb-[10px] fw-400 ">SHOWS</h2>
        <div className="overflow-hidden">
          {" "}
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
}
