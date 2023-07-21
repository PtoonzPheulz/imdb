import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaThumbsUp } from "react-icons/fa";
import { BiMovie } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { BsCalendarCheck } from "react-icons/bs";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMoviesOrShow,
  removeSelectedMovieOrShow,
} from "../features/movies/movieSlice";

export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMoviesOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section bg-primaryColor flex justify-content-evenly py-[40px] px-[0] text-fontPrimary fw-400 flex-col-reverse">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left mx-[30px]">
            <div className="movie-title fs-[40px] text-fontPrimary ">
              {data.Title}
            </div>
            <div className="movie-rating ps-[3px] mt-[20px] text-fontSecondary flex ">
              <span className="me-[20px]">
                IMDB Rating <FcRating color={"#ff9e00"} /> : {data.imdbRating}
              </span>
              <span className="me-[20px]">
                IMDB Votes <FaThumbsUp color={"#fafafa"} /> : {data.imdbVote}
              </span>
              <span className="me-[20px]">
                Runtime <BiMovie /> : {data.Runtime}
              </span>
              <span className="me-[20px]">
                Year <BsCalendarCheck color="peachpuff" /> : {data.Year}
              </span>
            </div>
            <div className="movie-plot mt-[20px] line-height-[1.8rem]">
              {data.Plot}
            </div>
            <div className="movie-info mt-3">
              <div className="d-flex justify-content-between my-2">
                <span className="text-fontPrimary">Director</span>
                <span className="text-fontSecondary text-end">
                  {data.Director}
                </span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span className="text-fontPrimary">Casts</span>
                <span className="text-fontSecondary text-end">
                  {data.Actors}
                </span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span className="text-fontPrimary">Genre</span>
                <span className="text-fontSecondary text-end">
                  {data.Genre}
                </span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span className="text-fontPrimary">Languages</span>
                <span className="text-fontSecondary text-end">
                  {data.Language}
                </span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span className="text-fontPrimary">Awards</span>
                <span className="text-fontSecondary text-end">
                  {data.Awards}
                </span>
              </div>
            </div>
          </div>
          <div className="section-right w-100  me-[30px] mt-[50px]">
            <img className="w-100" src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
      ;
    </div>
  );
}
