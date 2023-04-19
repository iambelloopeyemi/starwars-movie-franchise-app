import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import "../styles/Body.css";
import deathStar from '../assets/deathStar.png'

function Body() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/films`)
  //     .then((response) => {
  //       // if (!response.ok) {
  //       //   throw new Error(`Page not found: Error ${response.status}`);
  //       // }
  //       // console.log(response.json() )
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then((actualData) => {
  //       setData(actualData);
  //       // setError(null);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setData(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films`);
        setData(response.data);
        // setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  console.log(data, "data");
  return (
    <div className="main">
      <div className="loading-container">
        {loading && <img className="loading" src={deathStar} />}
      </div>
      <div className="error-container">
        {error && <div className="error">{`${error}`}</div>}
      </div>

      <div className="movie-card-container">
        <MovieCard data={data} />
      </div>
    </div>
  );
}

export default Body;