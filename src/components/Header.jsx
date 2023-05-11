// IMAGE
import logo from "../assets/star_wars_logo.png";

export default function Header() {
  return (
    <header className="h-28 flex justify-center items-center mb-4">
      <div className="w-96 h-24">
        <img
          src={logo}
          alt="Star wars Logo"
          className="block  w-full h-full object-contain"
        />
      </div>
    </header>
  );
}
