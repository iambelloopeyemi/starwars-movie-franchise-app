import { useState, useEffect } from "react";
import axios from "axios";
import deathStar from "../assets/death_star.png";
import MovieDetails from "../components/MovieDetails";

export default function MoreInfo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCHED DATA FROM API USING AXIOS
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films`);
        setData(response.data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <main className="relative">
      <div className="fixed offset">
        {loading && (
          <img
            src={deathStar}
            alt="Death Star Logo"
            className="w-20 h-20 animate-spin-slow"
          />
        )}
      </div>
      <div>
        {error && (
          <div className="flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <div className="text-yellow-300">{`${error}`}</div>
          </div>
        )}
      </div>

      <div className="px-28 mb-10">{data && <MovieDetails data={data} />}</div>
    </main>
  );
}
