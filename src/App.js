import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Phone from "./Pages/iPhone";
import Watch from "./Pages/iWatch";
import NoMatch from "./Pages/NoMatch";
import Mac from "./Pages/Mac"
import Earpod from "./Pages/Earpod"
import Accessory from "./Pages/Accessory"
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
          <Route path="earpod" element={<Earpod />} />
          <Route path="accessory" element={<Accessory />} />
          <Route path="about" element={<About />} />
          <Route path="others" element={<Others />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
