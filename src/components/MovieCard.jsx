import React from "react";
import "../styles/MovieCard.css";

function MovieCard({ data }) {
  console.log(data);
  const CardItem = data?.results?.map(
    ({ episode_id, title, release_date, opening_crawl }) => {
      return (
        <li key={episode_id} className="movie-card">
          <div className="movie-card-heading">
            <h3 className="title">{title}</h3>
            <p className="release-date">
              {new Date(release_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="opening-crawl">
            {opening_crawl.length > 260
              ? `${opening_crawl.substring(0, 260)}...`
              : opening_crawl}
          </div>
          <hr />
          <div className="more-info-wrapper">
            <a href="#" className="more-info">
              More Info
            </a>
          </div>
        </li>
      );
    }
  );
  return <ul className="movie-card-wrapper">{CardItem}</ul>;
}

export default MovieCard;