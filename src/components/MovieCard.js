import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { data } = props;
  return (
    <div className="container">
      <div className="card-item bg-secondaryColor cursor-pointer transition-all duration-300 hover:scale-110 hover:transition-all duration-300 h-100% min-h-[450px] mx-[5px] my-[10px]">
        <Link to={`/movie/${data.imdbID}`}>
          <div className="card-inner">
            <div className="card-top h-[300px] ">
              <img src={data.Poster} className="w-100 h-100" alt={data.Title} />
            </div>
            <div className="card-bottom p-[20px] ">
              <div className="card-info text-fontPrimary">
                <h4 className="fs-[22px] fw-[400] mb-[10px] ">{data.Title}</h4>
                <p>{data.Year}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
