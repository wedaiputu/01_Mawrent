import AllService from "../components/AllService";
import Slider from "../components/SliderTop";
import SocialMedia from "../components/SocialMedia";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white justify-center">
        <div className="m-10">
          <h2 className="text-red-500 text-2xl textarea-lg">
            Sewa Mobil Di Bali
          </h2>
          <h1 className="text-black text-5xl textarea-lg w-2/4 font-bold">
            Booking sekarang, bayar saat serah terima.
          </h1>
          <p className="text-black text-1xl textarea-lg w-2/3">
            Keunggulan layanan kami tidak hanya terletak pada harga yang
            terjangkau, tetapi juga pada sistem “booking sekarang, bayar saat
            serah terima” sehingga terhindar dari modus penipuan. Tim kami juga
            siap membantu Anda dalam memilih mobil yang sesuai dengan preferensi
            dan kebutuhan perjalanan Anda. Kami menawarkan anda sewa mobil di
            Bali yang saat ini sedang digemari oleh banyak kalangan, dan membuat
            perjalanan liburan anda di Bali lebih istimewa dan ber Image.
          </p>
        </div>

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

        <div className="flex flex-col mb-5 m-12">
          <div className="carousel rounded-box mt-5">
            <div className="carousel-item">
              <img
                className="w-96 py-1 px-1"
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-96 py-1 px-1"
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-96 py-1 px-1"
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-96 py-1 px-1"
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-96 py-1 px-1"
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-96 py-1 px-1"
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-96 py-1 px-1"
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                alt="Burger"
              />
            </div>
          </div>
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

      </div>
    </>
  );
}
