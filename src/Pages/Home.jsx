import "../App.css";
import ApTechEssentials from "../Components/Ap-Tech-Essentials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
// import ContactForm from "../Components/Form";
import FromTheCEO from "../Components/From-the-CEO";
import HeaderAnnouncement from "../Components/Header-Announcement";
import Hero from "../Components/Hero";
import ProductAdvert from "../Components/Product-Advert";
import ProductCategory from "../Components/Product-Category";
import Reviews from "../Components/Reviews";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="bg-neutral-200 relative flex flex-col gap-0">
      <div className="sticky top-0 left-0 right-0 flex flex-col z-20 pb-[calc(3vh)] lg:pb-0">
        <div className="w-screen h-fit text-white bg-black flex justify-center font-bold text-center">
          {" "}
          <HeaderAnnouncement />
        </div>
        <div className="w-screen h-fit text-black bg-white font-bold text-center">
          <Navbar />
        </div>
      </div>
      <div className="static pb-[calc(6vh)] hidden lg:flex">
        <Hero />
      </div>
      <div className="static z-0 hidden lg:flex pb-[calc(6vh)] px-[calc(5vw)]">
        <ApTechEssentials />
      </div>
      <div className="static z-0 pb-[calc(6vh)] px-[calc(5vw)]">
        <ProductCategory />
      </div>
      <div className="static flex flex-col gap-y-10 lg:gap-y-10 z-0 pb-[calc(6vh)] px-[calc(5vw)]">
        <h1 className="font-black text-3xl lg:text-6xl w-full justify-center text-center flash-sale-animation">
          Clearance Sales!!!
        </h1>
        <ProductAdvert />
      </div>
      <div className="static z-0 pb-[calc(6vh)] hidden px-[calc(5vw)]">
        <FromTheCEO />
      </div>
      <div className="sm:flex sm:flex-col sm:gap-10 lg:flex lg:flex-row px-[calc(5vw)] pb-[calc(6vh)] z-0 w-full h-full justify-center">
        <div className="static z-0 h-full w-full rounded-2xl">
          <Contact />
        </div>
        <div className="static z-0 h-full w-full bg-gray-900 rounded-2xl hidden lg:flex">
          <Reviews />
        </div>
      </div>
      <div className="static z-0 pb-[calc(0vh)] px-2 bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
