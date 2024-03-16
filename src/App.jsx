import { Route, Routes } from "react-router-dom";
import Navbar from "./BrandingComponents/Navbar/Navbar";
import { Home } from "./BrandingComponents/Home/Home";
import CreateYourChannelHero from './BrandingComponents/CreateYourChannel/CreateYourChannelHero/CreateYourChannelHero';
import BrandRoadMapHero from "./BrandingComponents/BrandRoadMap/BrandRoadMapHero/BrandRoadMapHero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/createyourchannel" element={<CreateYourChannelHero />} />
        <Route path="/brandRoadMap" element={<BrandRoadMapHero />} />
      </Routes>
    </div>
  );
}

export default App;
