import "./App.css";
import ApTechEssentials from "./Components/Ap-Tech-Essentials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ContactForm from "./Components/Form";
import FromTheCEO from "./Components/From-the-CEO";
import HeaderAnnouncement from "./Components/Header-Announcement";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductAdvert from "./Components/Product-Advert";
import ProductCategory from "./Components/Product-Category";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div className="bg-neutral-200 relative flex flex-col gap-0">
      <div className="sticky top-0 left-0 right-0 flex flex-col z-20">
        <div className="w-screen h-fit text-white bg-black flex justify-center font-bold text-center">
          {" "}
          <HeaderAnnouncement />
        </div>
        <div className="w-screen h-fit text-black bg-white font-bold text-center">
          <Navbar />
        </div>
      </div>
      <div className="static pb-[calc(6vh)]">
        <Hero />
      </div>
      <div className="static z-0 hidden lg:flex pb-[calc(6vh)]">
        <ApTechEssentials />
      </div>
      <div className="static z-0 pb-[calc(6vh)]">
        <ProductCategory />
      </div>
      <div className="static z-0 pb-[calc(6vh)]">
        <ProductAdvert />
      </div>
      <div className="static z-0 pb-[calc(6vh)] px-2 hidden">
        <FromTheCEO />
      </div>
      <div className="flex flex-col lg:flex-row pb-[calc(6vh)] z-0 w-full h-full justify-center gap-6 px-2">
        <div className="static z-0 px-2 h-full w-full rounded-2xl">
          <Contact />
        </div>
        <div className="static z-0 px-2 h-full w-full bg-gray-900 rounded-2xl">
          <Reviews />
        </div>
      </div>
      <div className="static z-0 pb-[calc(6vh)] px-2 hidden">
        <ContactForm />
      </div>
      <div className="static z-0 pb-[calc(6vh)] px-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
