import styled from "styled-components";
import logo from "../assets/starwars logo.png";
import "../styles/Header.css"

const Header = styled.header`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Starwars Logo" className="logo" />
    </div>
  );
}

export default Header;