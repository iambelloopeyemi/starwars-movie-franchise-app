// LIBRARY
import { Route, Routes } from "react-router-dom";
// COMPONENT
import Header from "./components/Header";
// PAGE
import Home from "./Pages/Home";
import MoreInfo from "./Pages/MoreInfo";

export default function App() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* ROUTING */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-info/:id" element={<MoreInfo />} />
      </Routes>
    </div>
  );
}
