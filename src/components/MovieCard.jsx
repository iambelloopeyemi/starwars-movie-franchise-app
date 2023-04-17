import React from "react";

export default function MovieCard({ data }) {
  console.log(data);
  return (
    <div>
      {data?.results?.map(
        ({ episode_id, title, release_date, opening_crawl }) => {
          return (
            <li key={episode_id}>
              <div>
                <h3>{title}</h3>
                <p>{release_date}</p>
              </div>
              <div>{opening_crawl}</div>
              <hr />
              <div>
                <a href="#">More Info</a>
              </div>
            </li>
          );
        }
      )}
    </div>
  );
}
