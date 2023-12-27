import "./App.css";
import HeaderAnnouncement from "./Components/Header-Announcement";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductCategory from "./Components/Product-Category";

function App() {
  return (
    <div className="bg-black">
      <div className="relative flex flex-col">
        <div className="w-screen h-fit text-white bg-black flex justify-center font-bold text-center fixed top-0 left-0 right-0 z-10">
          {" "}
          <HeaderAnnouncement />
        </div>
        <div className="fixed top-7 lg:top-6 left-0 right-0 bg-white z-10">
          <Navbar />
        </div>
      </div>
      <div className="">
        <div>
          <Hero />
        </div>
        <div>
          <ProductCategory />
        </div>
      </div>
    </div>
  );
}

export default App;
