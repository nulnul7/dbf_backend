import Login from "./components/login/Login";
import Home from "./pages/home/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import AddPortfolio from "./components/portfolio/AddPortfolio";
import UpdatePortfolio from "./components/portfolio/UpdatePortfolio";
import DeletePortfolio from "./components/portfolio/DeletePortfolio";
import PortfoliosUI from "./pages/portfolios/PortfoliosUI";


function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/langsung" element={<Login />} />
        <Route path="/getPortfolio" element={<PortfoliosUI />} />
        <Route path="/addPortfolio" element={<AddPortfolio />} />
        <Route path="/updatePortfolio" element={<UpdatePortfolio />} />
        <Route path="/deletePortfolio" element={<DeletePortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
