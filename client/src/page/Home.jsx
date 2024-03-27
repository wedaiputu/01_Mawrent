import AllService from "../components/AllService";
import BottomCarousel from "../components/BottomCarousel";
import CardListMobil from "../components/CardListMobil";
import Footer from "../components/Footer";
import InstagramFeed from "../components/InstagramFeed";
import RentCarousel from "../components/RentCarousel";
import Slider from "../components/SliderTop";
import SocialMedia from "../components/SocialMedia";
import TextProduct from "../components/TextProduct";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white justify-center">
        <div>
          <TextProduct />
        </div>

        {/* slider  */}
        <div className="flex justify-center">
          <div
            style={{
              width: "90%",
              border: "1px solid #ccc",
              margin: "5px",
              padding: "5px",
            }}
          >
            <Slider />
            <SocialMedia />
          </div>
        </div>

        {/* Carousel */}
        <div>
          <RentCarousel />
        </div>

        <div className="mt-5 mb-5">
          <CardListMobil />
        </div>

        <div className="mk-grid">
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-full">
              <div className="w-1/6"></div>
              <div className="w-2/3 relative">
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="text-center text-3xl py-5 px-10 font-bold text-red-600  bg-white w-70% h-12">
                    All Include Service
                  </div>
                </div>
                <div className="rounded-xl border-2 border-red-600 p-4 mt-9">
                  <AllService />
                </div>
              </div>
              <div className="w-1/6"></div>
            </div>
          </div>
        </div>

        <div>
          <BottomCarousel />
        </div>

        <div>
          <InstagramFeed />
        </div>

        <div className="mt-0 pt-1">
          <Footer />
        </div>
      </div>
    </>
  );
}
