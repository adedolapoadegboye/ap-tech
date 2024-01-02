import React from 'react';
import Navbar from "../Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Phone from "../Pages/iPhone";
import Watch from "../Pages/iWatch";
import NoMatch from "../Pages/NoMatch";
import Home from "../Pages/Home";


const Layout = () => {
  return (
    <div className="w-screen h-fit text-black bg-white font-bold text-center">
    <Navbar />
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="iphone" element={<Phone />} />
        <Route path="iwatch" element={<Watch />} />

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
  )
}

export default Layout