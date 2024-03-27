import { Fragment } from 'react';

// Vehicle data
const vehicles = [
  {
    imageUrl: "https://mawrent.com/wp-content/uploads/2023/12/sewa-brio-bali.png",
    title: "Honda – All New Brio",
    price: "IDR 350K/Day",
    features: ['Automatic', '4 Person'],
    orderCount: "900+"
  },
  {
    imageUrl: "https://mawrent.com/wp-content/uploads/2023/12/sewa-brio-bali.png",
    title: "Honda – All New Brio",
    price: "IDR 350K/Day",
    features: ['Automatic', '4 Person'],
    orderCount: "900+"
  },
  {
    imageUrl: "https://mawrent.com/wp-content/uploads/2023/12/sewa-brio-bali.png",
    title: "Honda – All New Brio",
    price: "IDR 350K/Day",
    features: ['Automatic', '4 Person'],
    orderCount: "900+"
  },
  {
    imageUrl: "https://mawrent.com/wp-content/uploads/2023/12/sewa-brio-bali.png",
    title: "Honda – All New Brio",
    price: "IDR 350K/Day",
    features: ['Automatic', '4 Person'],
    orderCount: "900+"
  },
  
];

export default function CardListMobil() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div id="kendaraan" className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-wrap items-center justify-center">
          <h2 className="text-3xl font-bold mb-6">
            <img
              className="inline-block mr-2"
              src="https://mawrent.com/wp-content/uploads/2023/12/fire.png"
              alt=""
              width="20"
              height="20"
            />
            Mobil terfavorit 4 seat.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          {/* Map over vehicle data to render cards */}
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
          >
            Lihat semua kendaraan
          </a>
        </div>
      </div>
    </div>
  );
}

function VehicleCard({ imageUrl, title, price, features, orderCount }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{price}</p>
          <ul className="mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 1a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-2">
            <strong>{orderCount}</strong> Favorite
          </p>
          <a
            href="https://wa.me/6281219993930?text=Hai%20Mawrent%20apa%20kabar?%20saya%20ingin%20bertanya%20untuk%20kesediaan%20kendaraan"
            className="bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 block text-center"
          >
            WhatsApp Us!
          </a>
        </div>
      </div>
    </div>
  );
}
