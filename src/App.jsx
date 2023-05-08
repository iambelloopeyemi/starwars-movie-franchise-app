import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import MoreInfo from "./Pages/MoreInfo";

function App() {
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

export default App;
