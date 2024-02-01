import "./App.css";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Phone from "./Pages/iPhone";
import Watch from "./Pages/iWatch";
import NoMatch from "./Pages/NoMatch";
import Mac from "./Pages/Mac"
import Airpod from "./Pages/Airpod"
import Pad from "./Pages/iPad"
import About from "./Pages/About"
import Others from "./Pages/Others"


function App() {
  return (
    <div className="w-screen h-fit text-black bg-white font-bold text-center">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="iphone" element={<Phone />} />
          <Route path="iwatch" element={<Watch />} />
          <Route path="mac" element={<Mac />} />
          <Route path="airpod" element={<Airpod />} />
          <Route path="ipad" element={<Pad />} />
          <Route path="about" element={<About />} />
          <Route path="others" element={<Others />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <SpeedInsights />
    </div>
  );
}

export default App;
