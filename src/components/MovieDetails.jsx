// LIBRARY
import { useNavigate } from "react-router-dom";

export default function MovieDetails({ data }) {
  // HOOKS
  const navigate = useNavigate();

  // Rendered list from a props
  const charactersList = data.characters.map((character) => {
    return <li key={character.url}>{character.name}</li>;
  });

  const planetsList = data.planets.map((planet) => {
    return <li key={planet.url}>{planet.name}</li>;
  });

  const speciesList = data.species.map((specie) => {
    return <li key={specie.url}>{specie.name}</li>;
  });

  const starshipsList = data.starships.map((starship) => {
    return <li key={starship.url}>{starship.name}</li>;
  });

  const vehiclesList = data.vehicles.map((vehicle) => {
    return <li key={vehicle.url}>{vehicle.name}</li>;
  });

  // Navigation function
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="px-28 mb-10">
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
            {data.title}
          </div>
          <div className="text-center text-base mb-3">
            Director : {data.director}
          </div>
          <div className="text-center text-base">
            Producer : {data.producer}
          </div>
        </div>
        <div className="mb-5">Description</div>
        <div className="mb-5">{data.opening_crawl}</div>
        <div className="mb-5">
          <span className="block mb-3 text-lg">Characters</span>{" "}
          <ul className="grid grid-cols-4 list-disc list-inside">{charactersList}</ul>
        </div>
        <div className="mb-5">
          <span className="block mb-3 text-lg">Planets</span>{" "}
          <ul className="grid grid-cols-4 list-disc list-inside">{planetsList}</ul>
        </div>
        <div className="mb-5">
          <span className="block mb-3 text-lg">Species</span>{" "}
          <ul className="grid grid-cols-4 list-disc list-inside">{speciesList}</ul>
        </div>
        <div className="mb-5">
          <span className="block mb-3 text-lg">Starships</span>{" "}
          <ul className="grid grid-cols-4 list-disc list-inside">{starshipsList}</ul>
        </div>
        <div className="mb-5">
          <span className="block mb-3 text-lg">Vehicles</span>{" "}
          <ul className="grid grid-cols-4 list-disc list-inside">{vehiclesList}</ul>
        </div>
      </div>
    </div>
  );
}
