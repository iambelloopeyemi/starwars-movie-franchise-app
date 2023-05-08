import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MovieDetails({ data }) {
  // REACT USESTATE HOOKS
  const [details, setDetails] = useState("");
  const [characterData, setCharacterData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  const [speciesData, setSpeciesData] = useState([]);
  const [starshipsData, setStarshipsData] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);
  
  // REACT ROUTER HOOKS
  const { id } = useParams();
  const navigate = useNavigate();

  // ROUTING VALIDATION AND NESTED API CALLS
  useEffect(() => {
    const details = data.find((detail) => detail.episode_id === Number(id));
    if (details) {
      setDetails(details);
    }
    const fetchData = async () => {
      try {
        await axios
          .all(details.characters.map((character) => axios.get(character)))
          .then((data) => setCharacterData(data));
        axios
          .all(details.planets.map((planet) => axios.get(planet)))
          .then((data) => setPlanetsData(data));
        axios
          .all(details.species.map((specie) => axios.get(specie)))
          .then((data) => setSpeciesData(data));
        axios
          .all(details.starships.map((starship) => axios.get(starship)))
          .then((data) => setStarshipsData(data));
        axios
          .all(details.vehicles.map((vehicle) => axios.get(vehicle)))
          .then((data) => setVehiclesData(data));
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [id]);

  // RENDERED LIST FROM NESTED API
  const charactersList = characterData.map((character, index) => {
    return <li key={index}>{character.data.name}</li>;
  });

  const planetsList = planetsData.map((planet, index) => {
    return <li key={index}>{planet.data.name}</li>;
  });

  const speciesList = speciesData.map((specie, index) => {
    return <li key={index}>{specie.data.name}</li>;
  });

  const starshipsList = starshipsData.map((starship, index) => {
    return <li key={index}>{starship.data.name}</li>;
  });

  const vehiclesList = vehiclesData.map((vehicle, index) => {
    return <li key={index}>{vehicle.data.name}</li>;
  });

  // NAVIGATION FUNCTION
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="rounded p-8 flex-col bg-neutral-800 z-10 cursor-pointer">
      <div className="mb-6" onClick={handleClick}>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 18"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span className="">Back to List</span>
        </div>
        <div className="text-center text-4xl font-semibold mb-4">
          {details.title}
        </div>
        <div className="text-center text-base mb-3">
          Director : {details.director}
        </div>
        <div className="text-center text-base">
          Producer : {details.producer}
        </div>
      </div>
      <div>Description</div>
      <div>{details.opening_crawl}</div>
      <div>
        Characters <ul>{charactersList}</ul>
      </div>
      <div>
        Planets <ul>{planetsList}</ul>
      </div>
      <div>
        Species <ul>{speciesList}</ul>
      </div>
      <div>
        Starships <ul>{starshipsList}</ul>
      </div>
      <div>
        Vehicles <ul>{vehiclesList}</ul>
      </div>
    </div>
  );
}
