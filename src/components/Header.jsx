import logo from "../assets/starwars logo.png";
import "../styles/Header.css"

export default function Header() {
  return (
    <header>
      <Logo />
    </header>
  )
}

export function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Starwars Logo" className="logo" />
    </div>
  );
}