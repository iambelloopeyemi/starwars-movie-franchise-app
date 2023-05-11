// LIBRARY
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
// COMPONENT
import Loader from "../components/Loader";
import ErrorHandler from "../components/ErrorHandler";
import MovieDetails from "../components/MovieDetails";

export default function MoreInfo() {
  // HOOKS
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   // Fetched data from an API
  const fetchData = async (urls) => {
    const responses = await axios.all(urls.map((url) => axios.get(url)));
    return responses.map((response) => response.data);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        const filmData = response.data;

        const [characters, planets, species, starships, vehicles] =
          await axios.all([
            fetchData(filmData.characters),
            fetchData(filmData.planets),
            fetchData(filmData.species),
            fetchData(filmData.starships),
            fetchData(filmData.vehicles),
          ]);

        setData({
          ...filmData,
          characters,
          planets,
          species,
          starships,
          vehicles,
        });

        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);
  
  return (
    <main>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorHandler error={error} />
      ) : data ? (
        <MovieDetails data={data} />
      ) : null}
    </main>
  );
}
