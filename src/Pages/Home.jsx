// LIBRARY
import { useState, useEffect } from "react";
import axios from "axios";
// COMPONENT
import Loader from "../components/Loader";
import ErrorHandler from "../components/ErrorHandler";
import MovieCard from "../components/MovieCard";

export default function Home() {
  // HOOKS
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetched data from an API
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorHandler error={error} />
      ) : data ? (
        <MovieCard data={data.results} />
      ) : null}
    </main>
  );
}
