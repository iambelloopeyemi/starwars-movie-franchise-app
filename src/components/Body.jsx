import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function Body() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Page not found: Error ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const response = await axios.get(`https://swapi.dev/api/films`);
  //         setData(response.data);
  //         setError(null);
  //       } catch (error) {
  //         setError(error.message);
  //         setData(null);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     getData();
  //   }, []);

  return (
    <div>
      <div>{loading && <div>Waiting...</div>}</div>
      <div>{error && <div>{`${error}`}</div>}</div>

      <div>
        <ul>
          <MovieCard data={data} />
        </ul>
      </div>
    </div>
  );
}
