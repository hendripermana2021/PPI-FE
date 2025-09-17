import { useEffect, useState } from "react";
import { createPortal } from "react-dom";


const stands = [
  {
    name: "Yuli Stand",
    foods: [
      {
        name: "Es Dawet",
        img: "/imgfood/yuli/cendol.jpg",
        desc: "Minuman tradisional segar khas Indonesia, terbuat dari cendol beras, santan, dan gula merah cair. Cocok untuk menyegarkan hari di festival musim gugur.",
        price: "400",
        ingredients: "Tepung beras, gula merah, santan",
      },
      {
        name: "Risol Ayam Creamy",
        img: "/imgfood/yuli/risol.jpg",
        desc: "Risol renyah dengan isian ayam lembut, sayuran segar, dan keju lumer. Camilan favorit semua kalangan di festival.",
        price: "350",
        ingredients: "Ayam, sayuran, tepung terigu, keju",
      },
      {
        name: "Lontong Pecel",
        img: "/imgfood/yuli/lontong.jpg",
        desc: "Lontong lembut disajikan dengan sayuran rebus dan siraman bumbu kacang khas Jawa. Lengkap dengan kerupuk renyah sebagai pelengkap.",
        price: "800",
        ingredients: "Nasi, sayuran rebus, bumbu kacang, kerupuk",
      },
      {
        name: "Pokat Kocok",
        img: "/imgfood/yuli/pokat.jpeg",
        desc: "Minuman alpukat segar yang dikocok dengan susu kental manis, gula, dan topping es krim cokelat. Manis dan menyegarkan.",
        price: "700",
        ingredients: "Alpukat, susu kental manis, gula, es krim cokelat",
      },
    ]
  },
  {
    name: "Hanum Stand",
    foods: [
      {
        name: "Kopi Susu Cincau",
        img: "/imgfood/hanum/kopicincau.jpg",
        desc: "Kopi susu segar dengan cincau hitam kenyal, kombinasi klasik dengan twist kekinian.",
        price: "300",
        ingredients: "Nutrijell cincau, susu, kopi",
      },
      {
        name: "Cilok Bumbu Kacang",
        img: "/imgfood/hanum/cilok.jpeg",
        desc: "Cilok kenyal khas Bandung dengan siraman bumbu kacang gurih pedas.",
        price: "300",
        ingredients: "Tepung kanji, bawang, daun bawang, bumbu kacang",
      },
    ]
  },
  {
    name: "Early Stand",
    foods: [
      {
        name: "Bakso",
        img: "/imgfood/early/bakso.jpg",
        desc: "Bakso daging sapi dan ayam kenyal dengan kuah gurih khas Indonesia.",
        price: "850",
        ingredients: "Daging sapi, daging ayam, kanji, bawang putih, masako",
      },
      {
        name: "Batagor",
        img: "/imgfood/early/batagor.jpg",
        desc: "Batagor renyah dengan bumbu kacang gurih manis pedas.",
        price: "680",
        ingredients: "Daging ayam, tahu, tepung kanji, masako",
      },
      {
        name: "Dimsum",
        img: "/imgfood/early/dimsum.jpg",
        desc: "Dimsum kukus lembut isi ayam & sayuran, cocok untuk camilan hangat.",
        price: "0",
        ingredients: "Ayam, udang, wortel, kulit pangsit",
      },
      {
        name: "Dadar Gulung",
        img: "/imgfood/early/dadargulung.jpg",
        desc: "Kue dadar hijau pandan tipis yang digulung, diisi kelapa parut manis dengan gula merah, cocok sebagai pencuci mulut atau camilan manis.",
        price: "0",
        ingredients: "Tepung terigu, santan, gula merah, kelapa parut, pandan",
      },
    ]
  },
  {
    name: "Iyo Stand",
    foods: [
      {
        name: "Mie ayam",
        img: "/imgfood/asyief/mieayam.jpg",
        desc: "Mie kenyal disajikan dengan potongan ayam berbumbu manis gurih, lengkap dengan kuah kaldu hangat khas Indonesia.",
        price: "650",
        ingredients: "Ayam, mie, bumbu rempah-rempah, kecap (bonus sambal/cabe)",
      },
      {
        name: "Pempek",
        img: "/imgfood/asyief/pempek.jpg",
        desc: "Olahan ikan giling bercampur tepung yang digoreng atau direbus, disajikan dengan kuah cuko pedas manis khas Palembang.",
        price: "650",
        ingredients: "Ikan, tepung terigu, kanji, tepung beras, telor, bawang merah dan bawang putih, cuko (gula merah, asam jawa)",
      },
      {
        name: "Kopi (hot/ice)",
        img: "/imgfood/asyief/kopi.jpg",
        desc: "Minuman kopi segar yang bisa dinikmati hangat maupun dingin, cocok untuk menemani santai atau berbincang.",
        price: "150",
        ingredients: "Kopi, air, es (opsional gula/krimer)",
      },
    ]
  },
  {
    name: "Erni Johan & Friends Stand",
    foods: [
      {
        name: "Nasi goreng",
        img: "/imgfood/erni/nasigoreng.jpg",
        desc: "Nasi goreng khas Indonesia dengan bumbu sederhana, ditumis bersama ayam, telur, dan sayuran, lalu diberi kecap manis untuk rasa gurih manis yang nikmat.",
        price: "650",
        ingredients: "Nasi, ayam, telur, minyak goreng, garam, bawang putih, bawang bombay, wortel, merica, kecap manis",
      },
      {
        name: "Mie goreng",
        img: "/imgfood/erni/miegoreng.jpg",
        desc: "Mie goreng dengan potongan ayam, telur, dan sayuran segar, dibumbui rempah pilihan untuk cita rasa gurih khas rumahan.",
        price: "650",
        ingredients: "Mie, ayam, telur, kol, merica, bawang putih, minyak goreng",
      },
      {
        name: "Bolu pandan",
        img: "/imgfood/erni/bolupandan.jpg",
        desc: "Kue bolu lembut dengan aroma pandan yang harum, tekstur empuk, dan rasa manis yang pas.",
        price: "300",
        ingredients: "Telur, terigu, gula, minyak goreng, ekstrak pandan",
      },
      {
        name: "Pastel",
        img: "/imgfood/erni/pastel.jpg",
        desc: "Pastry goreng renyah berisi campuran sayuran dan soun, berpadu dengan bumbu gurih yang lezat.",
        price: "300",
        ingredients: "Kentang, wortel, soun, telur, terigu, margarin, bawang putih, bawang bombay, merica, royco (chicken consome), minyak goreng",
      },
    ]
  },
  {
    name: "Baqir Stand",
    foods: [
      {
        name: "Sate Ayam",
        img: "/imgfood/baqir/sateayam.jpg",
        desc: "Potongan daging ayam yang ditusuk, dipanggang dengan arang, lalu disajikan dengan bumbu kacang gurih manis khas Indonesia.",
        price: "250",
        ingredients: "Ayam, Bumbu kacang(rempah, Kacang, Bawang putih, bawang merah dll)",
      },
      {
        name: "Soto Ayam",
        img: "/imgfood/baqir/soto.jpg",
        desc: "Sup ayam khas Indonesia dengan kuah kuning segar, dilengkapi bihun, kol, telur rebus, dan taburan bawang goreng.",
        price: "300",
        ingredients: "Bumbu soto ayam, kol, ayam, bihun, telur, etc",
      },
    ]
  },
  {
    name: "Mursyida Stand",
    foods: [
      {
        name: "Nasi kuning",
        img: "/imgfood/mursyida/nasikuning.jpg",
        desc: "Nasi berwarna kuning harum karena kunyit dan santan, disajikan dengan lauk lengkap seperti ayam goreng, telur, mie goreng, kerupuk, dan sambal terasi.",
        price: "650",
        ingredients: "Nasi, kunyit, santan kelapa, bawang merah, bawang putih, kemiri, sereh, daun salam, daun jeruk, ayam goreng, mie goreng, telur, kerupuk, salada & mentimun, sambal terasi",
      },
      {
        name: "Donat kampung",
        img: "/imgfood/mursyida/donatkampung.jpeg",
        desc: "Donat goreng empuk berbahan kentang dengan taburan meses atau topping manis seperti selai stroberi dan tiramisu.",
        price: "350",
        ingredients: "Kentang, kuning telur, gula pasir, tepung terigu, ragi instan, margarin, topping: meses coklat, selai stroberi dan tiramisu",
      },
      {
        name: "Es pisang ijo",
        img: "/imgfood/mursyida/espisangijo.jpg",
        desc: "Pisang dibalut adonan hijau pandan, disajikan dengan kuah santan manis, sirup coco pandan, dan susu kental manis. Segar untuk penutup!",
        price: "350",
        ingredients: "Pisang, tepung beras, tepung terigu, santan kelapa, pasta pandan & gula pasir, syrup Marjan coco pandan dan condense milk.",
      },
      {
        name: "Aneka Jajanan Indonesia",
        img: "/imgfood/mursyida/jajan.jpg",
        desc: "Snack khas Indonesia yang cocok untuk ngemil, mulai dari yang manis hingga gurih seperti beng-beng, keripik tempe, kacang telur, dan lainnya.",
        price: "100",
        ingredients: "Beng-beng, keripik tempe, kacang telur, sus coklat, kripik pisang",
      },
    ]
  },
  {
    name: "Aini Stand",
    foods: [
      {
        name: "Iced Thai Tea",
        img: "/imgfood/aini/thaitea.jpg",
        desc: "Minuman teh Thailand segar yang dicampur susu kental manis dan susu segar, cocok dinikmati dingin di siang hari yang hangat.",
        price: "000",
        ingredients: "Thai Tea Mix, Condensed Milk, Milk",
      },
      {
        name: "Cireng Isi",
        img: "/imgfood/aini/cirengisi.jpeg",
        desc: "Camilan goreng khas Sunda berbahan tepung tapioka, diisi ayam dan sayuran berbumbu pedas gurih, cocok untuk ngemil sambil jalan-jalan.",
        price: "000",
        ingredients: "Tapioca Flour, Rice Paper, Chicken, Paprika, Chili, Onion, Garlic, Citrus Leaf, Salt, Pepper, MSG",
      },
      {
        name: "Martabak Telur",
        img: "/imgfood/aini/martabaktelur.jpg",
        desc: "Martabak telur gurih dengan isian daging ayam cincang, daun bawang, dan rempah pilihan, renyah di luar dan lembut di dalam.",
        price: "000",
        ingredients: "Flour, Egg, Green Onion, Curry Powder, Minced Chicken",
      },
    ]
  }
];

const FoodStands = () => {
  const [standsData, setStandsData] = useState([]);
  const [selectedStand, setSelectedStand] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulasi fetching data
  useEffect(() => {
    // Bisa diganti fetch dari API
    const timer = setTimeout(() => {
      setStandsData(stands); // `stands` adalah data asli kamu
      setSelectedStand(stands[0].name);
      setIsLoading(false);
    }, 1000); // delay 1 detik untuk loading effect

    return () => clearTimeout(timer);
  }, []);

  const currentStand = standsData.find((stand) => stand.name === selectedStand);

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
                    <p className="text-lg font-semibold text-orange-900 mb-2">¥ {selectedFood.price}</p>
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
