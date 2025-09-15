import { useState } from "react";
import { createPortal } from "react-dom";


const stands = [
  {
    name: "Stand A - Japanese Delight",
    foods: [
      {
        name: "Ramen",
        img: "https://source.unsplash.com/200x150/?ramen",
        desc: "Semangkuk mie kuah Jepang dengan kaldu tulang yang dimasak selama berjam-jam hingga menghasilkan rasa gurih yang dalam. Dilengkapi dengan irisan chashu (daging babi panggang), telur setengah matang, dan sayuran segar.",
        price: "$5.99",
        rating: 4,
        reviewCount: 20,
        ingredients: "Mie, Kaldu ayam, Chashu, Telur setengah matang, Daun bawang, Jamur"
      },
      {
        name: "Sushi",
        img: "https://source.unsplash.com/200x150/?sushi",
        desc: "Nasi cuka khas Jepang yang dipadukan dengan irisan ikan segar seperti salmon, tuna, dan udang. Disajikan dengan wasabi, jahe acar, serta kecap asin untuk melengkapi cita rasa.",
        price: "$8.50",
        rating: 5,
        reviewCount: 35,
        ingredients: "Nasi cuka, Salmon, Tuna, Udang, Wasabi, Jahe acar, Kecap asin"
      },
      {
        name: "Takoyaki",
        img: "https://source.unsplash.com/200x150/?takoyaki",
        desc: "Bola adonan tepung yang diisi dengan potongan gurita, dimasak dalam cetakan khusus hingga bertekstur renyah di luar namun lembut di dalam. Disajikan dengan saus takoyaki, mayones, bonito flakes, dan rumput laut kering.",
        price: "$4.00",
        rating: 4,
        reviewCount: 15,
        ingredients: "Tepung, Gurita, Saus takoyaki, Mayones, Bonito flakes, Rumput laut kering"
      },
      {
        name: "Tempura",
        img: "https://source.unsplash.com/200x150/?tempura",
        desc: "Aneka sayuran dan udang yang dicelupkan ke dalam adonan tepung ringan lalu digoreng hingga renyah. Cocok dinikmati bersama saus tentsuyu yang khas.",
        price: "$6.00",
        rating: 4,
        reviewCount: 12,
        ingredients: "Udang, Wortel, Terong, Tepung tempura, Minyak goreng, Saus tentsuyu"
      }
    ]
  },
  {
    name: "Stand B - Indonesian Flavors",
    foods: [
      {
        name: "Satay",
        img: "https://source.unsplash.com/200x150/?satay",
        desc: "Daging tusuk bakar khas Indonesia yang dimarinasi dengan bumbu rempah pilihan. Disajikan dengan saus kacang kental dan potongan lontong atau nasi.",
        price: "$3.50",
        rating: 5,
        reviewCount: 50,
        ingredients: "Daging ayam/sapi, Bumbu rempah, Saus kacang, Lontong, Minyak goreng"
      },
      {
        name: "Nasi Goreng",
        img: "https://source.unsplash.com/200x150/?fried-rice",
        desc: "Nasi yang digoreng dengan bumbu khas Indonesia, dilengkapi dengan telur, ayam, dan sayuran. Cocok disajikan dengan kerupuk dan acar.",
        price: "$4.50",
        rating: 4,
        reviewCount: 40,
        ingredients: "Nasi, Telur, Ayam, Kecap manis, Bawang merah, Bawang putih, Sayuran, Kerupuk, Acar"
      },
      {
        name: "Gado-Gado",
        img: "https://source.unsplash.com/200x150/?gado-gado",
        desc: "Salad sayuran segar yang direbus sebentar, disajikan dengan bumbu kacang yang gurih dan taburan bawang goreng.",
        price: "$5.00",
        rating: 4,
        reviewCount: 22,
        ingredients: "Tauge, Kangkung, Kentang, Telur rebus, Kacang tanah, Bawang goreng, Bumbu kacang"
      }
    ]
  },
  {
    name: "Stand C - Sweet Treats",
    foods: [
      {
        name: "Chocolate Cake",
        img: "https://source.unsplash.com/200x150/?chocolate-cake",
        desc: "Kue cokelat lembut dengan lapisan ganache dan taburan cokelat serut. Cocok untuk pencinta cokelat sejati.",
        price: "$4.50",
        rating: 5,
        reviewCount: 30,
        ingredients: "Tepung terigu, Gula, Cokelat, Telur, Mentega, Ganache"
      },
      {
        name: "Strawberry Tart",
        img: "https://source.unsplash.com/200x150/?strawberry-tart",
        desc: "Tart renyah diisi krim vanila lembut dan ditumpuk dengan strawberry segar, menghasilkan kombinasi rasa manis dan asam yang seimbang.",
        price: "$5.00",
        rating: 5,
        reviewCount: 25,
        ingredients: "Tepung, Mentega, Gula, Krim vanila, Strawberry segar"
      },
      {
        name: "Ice Cream Sundae",
        img: "https://source.unsplash.com/200x150/?ice-cream-sundae",
        desc: "Es krim lembut yang disajikan dengan saus cokelat, kacang panggang, whipped cream, dan cherry di atasnya.",
        price: "$3.99",
        rating: 4,
        reviewCount: 18,
        ingredients: "Es krim vanila, Saus cokelat, Kacang panggang, Whipped cream, Cherry"
      }
    ]
  }
];

const FoodStands = () => {
  const [selectedStand, setSelectedStand] = useState(stands[0].name);
  const [selectedFood, setSelectedFood] = useState(null);

  const currentStand = stands.find((stand) => stand.name === selectedStand);

  return (
    <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 mb-6">
      <div className="p-6 bg-gradient-to-b from-yellow-50 via-orange-50 to-orange-100 ">
        {/* Header */}
        <header className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-2">🍂 Temukan Stand Favoritmu</h2>
            <p className="text-gray-700 text-md">
              Pilih stand untuk melihat menu makanan dan produk unik yang tersedia di Autumn Fest 2025!
            </p>
          </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sidebar Stand */}
          <aside className="bg-white/80 backdrop-blur-sm shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-orange-800">Daftar Stand</h2>
            <ul className="grid grid-cols-2 gap-4">
              {stands.map((stand) => (
                <li key={stand.name}>
                  <button
                    onClick={() => setSelectedStand(stand.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition font-semibold ${
                      selectedStand === stand.name
                        ? "bg-orange-600 text-white"
                        : "bg-yellow-100 hover:bg-yellow-200 text-orange-900"
                    }`}
                  >
                    {stand.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Food Grid */}
          <section className="bg-white/80 backdrop-blur-sm shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-orange-700">
              Menu {currentStand?.name}
            </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {currentStand?.foods.map((food, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-gradient-to-br from-yellow-50 via-orange-50 to-orange-100 shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={food.img}
                    alt={food.name}
                    className="w-full h-32 object-cover"
                    onClick={() => setSelectedFood(food)}
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-orange-800">{food.name}</h3>
                    <p className="text-sm text-orange-900 line-clamp-2">{food.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Popup Modal */}
        {selectedFood && (
          createPortal(<>
            {/* Backdrop glass effect */}
            <div
              className="fixed inset-0 z-[9999] bg-white/20 backdrop-blur-sm"
              onClick={() => setSelectedFood(null)}
            />

            {/* Modal Panel */}
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
              <div className="relative bg-white rounded-2xl shadow-2xl w-96 max-w-full max-h-[90vh] flex flex-col overflow-hidden">
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 z-10"
                  onClick={() => setSelectedFood(null)}
                >
                  ✖
                </button>

                {/* Image */}
                <img
                  src={selectedFood.img}
                  alt={selectedFood.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />

                {/* Content Scrollable */}
                <div className="p-4 flex-1 overflow-y-auto">
                  <h2 className="text-2xl font-bold text-orange-700 mb-2">{selectedFood.name}</h2>
                  {selectedFood.price && (
                    <p className="text-lg font-semibold text-orange-900 mb-2">{selectedFood.price}</p>
                  )}
                  {selectedFood.rating && (
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < selectedFood.rating ? "text-yellow-400" : "text-gray-200"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.538 1.118l-3.374-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.783.57-1.838-.196-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.048 9.397c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.951-.69l1.29-3.97z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{selectedFood.reviewCount || 0} reviews</span>
                    </div>
                  )}

                  {selectedFood.desc && (
                    <p className="text-orange-900 mb-4 whitespace-pre-wrap">{selectedFood.desc}</p>
                  )}

                  {selectedFood.ingredients && selectedFood.ingredients.trim() !== "" && (
                    <div className="mt-2">
                      <h3 className="text-lg font-semibold text-orange-800 mb-1">Ingredients</h3>
                      <p className="text-orange-900 whitespace-pre-wrap">{selectedFood.ingredients}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>,document.body)
        )}
      </div>
    </div>

  );
}

export default FoodStands;
