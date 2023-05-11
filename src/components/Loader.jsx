// IMAGE
import deathStar from "../assets/death_star.png";

export default function Loader() {
  return (
    <div className="relative">
      <div className="fixed offset">
        <img
          src={deathStar}
          alt="Death Star Logo"
          className="w-20 h-20 animate-spin-slow"
        />
      </div>
    </div>
  );
}
