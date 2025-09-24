import { useEffect, useState } from "react";
import { createPortal } from "react-dom";


const stands = [
  {
    name: "Yuli's kitchen",
    foods: [
      {
        name: "Es Dawet (Indonesian Cendol Drink)",
        img: "/imgfood/yuli/cendol.jpg",
        desc: "Es Dawet is a traditional Indonesian dessert drink that has been enjoyed for generations, especially during hot days and festive occasions. It is made from chewy green rice flour jelly (cendol), served with creamy coconut milk, and sweetened with palm sugar syrup. The balance of rich coconut, earthy palm sugar, and refreshing ice makes this drink both comforting and revitalizing. At Autumn Fest, Es Dawet brings a taste of Indonesian heritage, inviting you to cool down while experiencing a story of tropical culture in every sip.",
        price: "400",
        ingredients: "Rice flour jelly, palm sugar, coconut milk, shaved ice",
      },
      {
        name: "Creamy Chicken Risoles",
        img: "/imgfood/yuli/risol.jpg",
        desc: "A beloved Indonesian snack, Risoles are crispy golden rolls filled with tender chicken, fresh vegetables, and gooey melted cheese. With every bite, you’ll enjoy a crunchy outer layer followed by a creamy, savory filling that melts in your mouth. Originating as a festive street food, this dish has become a comfort favorite across generations. At Yuli Stand, our Creamy Chicken Risoles are a must-try — perfect as a warm companion to the lively festival atmosphere.",
        price: "350",
        ingredients: "Chicken, vegetables, wheat flour, cheese, breadcrumbs",
      },
      {
        name: "Lontong Pecel (Rice Cake with Peanut Sauce)",
        img: "/imgfood/yuli/pecal.jpg",
        desc: "Lontong Pecel is a wholesome Javanese dish that tells a story of tradition and community. Soft rice cakes (lontong) are served with an assortment of boiled vegetables and generously topped with savory-spicy peanut sauce. A sprinkle of crispy crackers adds the finishing crunch. This dish is more than just food — it reflects the warmth of Indonesian gatherings, where families and friends share simple yet flavorful meals. At Autumn Fest, enjoy Lontong Pecel as a hearty reminder of home-style cooking with a festive twist.",
        price: "800",
        ingredients: "Rice cake, assorted boiled vegetables, peanut sauce, crackers",
      },
      {
        name: "Pokat Kocok (Shaken Avocado Drink)",
        img: "/imgfood/yuli/pokat.jpg",
        desc: "Pokat Kocok is a rich and indulgent drink made from ripe avocados, sweetened condensed milk, and sugar, then topped with chocolate ice cream. The drink is gently shaken to create a creamy texture that highlights the natural buttery flavor of the avocado. Popular in Indonesian street markets, it is both a dessert and a refreshing treat. At Autumn Fest, Pokat Kocok offers a unique tropical experience — sweet, creamy, and irresistibly satisfying for anyone looking to try something beyond the ordinary.",
        price: "700",
        ingredients: "Avocado, sweetened condensed milk, sugar, chocolate ice cream",
      },
    ]
  },
  {
    name: "Solok Stand",
    foods: [
      {
        name: "Cilok Peanut Sauce",
        img: "/imgfood/hanum/cilok.jpg",
        desc: "Cilok, short for 'aci dicolok' (tapioca skewers), is a beloved street snack from Bandung, West Java. These chewy tapioca balls are served warm and coated in a rich, savory peanut sauce with a hint of spiciness. Cilok embodies the spirit of Indonesian street food — simple ingredients transformed into comfort food that brings people together. At Autumn Fest, Cilok with Peanut Sauce delivers the authentic taste of Indonesia in every bite, perfect for sharing with friends or enjoying as a quick snack between events.",
        price: "200",
        ingredients: "Potato starch, wheat flour, peanut sauce (peanut, chili, salt, sugar, sweet soy sauce)",
      },
      {
        name: "Milky Jelly Drink",
        img: "/imgfood/hanum/milkyjelly.jpg",
        desc: "Milky Jelly Drink is a refreshing Indonesian beverage that combines the creamy richness of fresh milk with the chewy texture of grass jelly and the bold flavor of brewed coffee. This drink offers a delightful contrast between the smoothness of milk and the slight bitterness of coffee, balanced by the sweetness of sugar. Grass jelly adds an interesting texture, making each sip a unique experience. Perfect for cooling down during Autumn Fest, this drink captures the essence of Indonesian flavors in a modern twist.",
        price: "300",
        ingredients: "Instant jelly powder, milk, condensed milk",
      },
    ],
  },
  {
    name: "Kedai Mbak Early",
    foods: [
      {
        name: "Bakso (Indonesian Meatballs)",
        img: "/imgfood/early/bakso.jpeg",
        desc: "Bakso is one of Indonesia’s most iconic comfort foods. These springy meatballs are made from a mixture of beef and chicken, blended with tapioca starch for their signature chewy texture. Served in a steaming bowl of savory broth, often topped with noodles, vegetables, and a splash of sambal, Bakso is a dish that warms both body and soul. At Autumn Fest, this Bakso brings the taste of Indonesian street corners and cozy food stalls straight to your table.",
        price: "850",
        ingredients: "Beef, chicken, tapioca flour, garlic, seasoning",
      },
      {
        name: "Batagor (Fried Dumplings with Peanut Sauce)",
        img: "/imgfood/early/batagor.jpeg",
        desc: "Batagor, short for 'Bakso Tahu Goreng,' is a legendary street snack from Bandung. It features tofu and dumplings filled with seasoned chicken, deep-fried until golden and crispy. The star of Batagor is its luscious peanut sauce — rich, nutty, sweet, and just a little spicy. A favorite afternoon snack across Indonesia, Batagor is perfect for enjoying while strolling through the lively festival atmosphere.",
        price: "700",
        ingredients: "Chicken, tofu, tapioca flour, garlic, peanut sauce, chili",
      },
      {
        name: "Dimsum mentai",
        img: "/imgfood/early/dimsum.jpeg",
        desc: "Soft, delicate dumplings filled with chicken, shrimp, and fresh vegetables, steamed to perfection. Dim Sum has its roots in Chinese cuisine but has become a beloved snack across Indonesia, often enjoyed with chili sauce or soy-based dips. At Autumn Fest, these dumplings make the ideal warm bite to share with friends on a crisp autumn day.",
        price: "700",
        ingredients: "Chicken, shrimp, carrot, wonton skin",
      },
      {
        name: "Nasi Uduk Jakarta (Coconut Rice)",
        img: "/imgfood/early/nasiuduk.jpeg",
        desc: "Nasi Uduk is a fragrant coconut rice dish originating from Jakarta, influenced by Malay and Betawi culinary traditions. Cooked with coconut milk, lemongrass, and spices, it offers a rich aroma and comforting taste. Historically, Nasi Uduk was served during festive occasions and family gatherings, symbolizing togetherness. Today, it is enjoyed daily across Indonesia, often paired with fried chicken, sambal, and side dishes like tempeh or boiled eggs. Its warm, creamy texture and cultural roots make it a timeless favorite.",
        price: "850",
        ingredients: "Spiced fried chicken, chili egg (balado), fried tofu or tempeh (preferably tempeh), fried noodles, crackers",
      },
      {
        name: "Dadar Gulung (Pandan Coconut Roll Pancake)",
        img: "/imgfood/early/dadargulung.jpeg",
        desc: "Dadar Gulung is a classic Indonesian sweet snack, often found in traditional markets across Java and Sumatra. Its name literally means 'rolled pancake,' made from a thin, green pandan-flavored crepe filled with grated coconut cooked in palm sugar. The green color comes naturally from pandan leaves, which also lend a fragrant aroma. This dessert has deep cultural roots in Indonesian culinary heritage, often served during family gatherings, festive occasions, or as a daily treat with tea or coffee. Its combination of soft pandan skin and sweet coconut filling makes Dadar Gulung a timeless favorite that reflects the balance of simplicity and richness in Indonesian sweets.",
        price: "330",
        ingredients: "Grated coconut, palm sugar, wheat flour, pandan extract",
      },
    ]
  },
  {
    name: "Dapoer いよ",
    foods: [
      {
        name: "Mie Ayam (Indonesian Chicken Noodles)",
        img: "/imgfood/asyief/mieayam.jpg",
        desc: "Mie Ayam, or 'chicken noodles,' is one of the most beloved street foods in Indonesia. The dish features springy yellow noodles topped with diced chicken simmered in a sweet-savory soy-based sauce, accompanied by a light chicken broth. Its origins trace back to Chinese immigrants who brought noodle-making traditions to Java in the early 20th century. Over time, Indonesians adapted the recipe by using local spices and kecap manis (sweet soy sauce), creating a unique comfort food that is now enjoyed across the country.",
        price: "650",
        ingredients: "Chicken, noodles, mustard greens, spices, sweet soy sauce, (extra chili sauce), salty soy sauce, and chicken skin oil",
      },
      {
        name: "Pempek (Palembang Fishcake)",
        img: "/imgfood/asyief/pempek.jpg",
        desc: "Pempek is a traditional delicacy from Palembang, South Sumatra, made from ground fish mixed with tapioca flour, then fried or boiled. It is always served with 'cuko,' a tangy and spicy dipping sauce made of palm sugar, tamarind, and chili. Pempek is believed to have been created by Chinese traders in the 16th century, who introduced fish cakes to local communities. Over generations, Palembang residents developed their own variations, making Pempek not just a dish but a cultural identity of the city. Today, it is enjoyed all over Indonesia, often bringing nostalgic memories of home.",
        price: "650",
        ingredients: "Fish, tapioca flour, wheat flour, egg, sugar, salt, shallot, garlic. Cuko sauce: green chili, dried shrimp (rebon), palm sugar, tamarind",
      },
      {
        name: "Sempol Ayam (Chicken Skewered Fritters)",
        img: "/imgfood/asyief/sempol.jpeg",
        desc: "Sempol Ayam is a popular street food snack from East Java, particularly Malang. It is made from a mixture of ground chicken, flour, eggs, and spices, shaped onto bamboo sticks, then boiled before being dipped in egg batter and fried. Its chewy texture and savory flavor make it a favorite among children and adults alike. The name 'sempol' is derived from the way the mixture is molded onto skewers, creating a unique snack that is easy to eat on the go. First gaining popularity in the early 2000s in Malang, Sempol Ayam has since spread across Indonesia, becoming a beloved quick snack often sold at night markets and school canteens.",
        price: "400",
        ingredients: "Chicken, egg, tapioca flour, wheat flour, garlic, cooking oil",
      },
      {
        name: "Coffee (Hot/Ice)",
        img: "/imgfood/asyief/kopi.jpg",
        desc: "Indonesia is the fourth largest coffee producer in the world, and coffee has been an integral part of its history since the Dutch colonial period in the 17th century. The archipelago's diverse climates gave birth to famous varieties such as Sumatra, Java, and Sulawesi beans. This simple cup of Kopi, served hot or iced, represents more than just a drink—it reflects centuries of cultivation, trade, and social tradition. In Indonesian culture, drinking coffee is not only about taste but also about togetherness, as friends and families gather over a warm cup. Whether bold and bitter or smooth and sweetened, coffee remains a timeless companion in daily life.",
        price: "150",
        ingredients: "Coffee beans, water, optional sugar or creamer, ice (for iced version).",
      },
    ]
  },
  {
    name: "Erni & friends",
    foods: [
      {
        name: "Nasi Goreng (Fried Rice)",
        img: "/imgfood/erni/nasigoreng.jpg",
        desc: "Nasi Goreng, or Indonesian fried rice, is a beloved dish that dates back centuries and reflects Indonesia's rich culinary heritage. This version features fragrant rice stir-fried with chicken, egg, and fresh vegetables, then seasoned with sweet soy sauce (kecap manis) for a perfect balance of savory and sweet flavors. Traditionally served during family gatherings or street food stalls, Nasi Goreng is more than just a meal—it's a symbol of comfort, community, and daily life in Indonesia.",
        price: "650",
        ingredients: "Rice, chicken, egg, cooking oil, salt, garlic, onion, carrot, pepper, sweet soy sauce",
      },
      {
        name: "Mie Goreng (Fried Noodles)",
        img: "/imgfood/erni/miegoreng.jpg",
        desc: "Mie Goreng, or Indonesian fried noodles, is a popular street food with roots influenced by Chinese culinary traditions. Tender noodles are stir-fried with juicy pieces of chicken, scrambled egg, and fresh vegetables, seasoned with select spices for a rich, homestyle flavor. This dish has been enjoyed for generations, often prepared as a quick meal for families or shared at festive occasions, embodying both convenience and cultural heritage.",
        price: "650",
        ingredients: "Noodles, chicken, egg, cabbage, pepper, garlic, cooking oil",
      },
      {
        name: "Bolu Pandan (Pandan Sponge Cake)",
        img: "/imgfood/erni/bolupandan.jpg",
        desc: "Bolu Pandan is a soft, fluffy sponge cake infused with the natural aroma of pandan leaves, giving it a distinct green hue and fragrant taste. Pandan-flavored desserts have long been part of Southeast Asian cuisine, with roots tracing back to traditional home baking. Its light, airy texture and perfectly balanced sweetness make it a delightful treat for afternoon tea or as a festive dessert, cherished by both young and old.",
        price: "300",
        ingredients: "Eggs, flour, sugar, cooking oil, pandan extract",
      },
      {
        name: "Pastel (Indonesian Savory Pastry)",
        img: "/imgfood/erni/pastel.jpg",
        desc: "Pastel is a crispy, deep-fried pastry filled with a savory mix of vegetables, vermicelli (soun), and aromatic seasonings. This snack is widely enjoyed across Indonesia, often sold by street vendors during festivals or as a midday treat. The delicate balance between the crunchy outer layer and the flavorful filling makes Pastel a beloved comfort snack, reflecting Indonesia’s tradition of vibrant, diverse street foods.",
        price: "300",
        ingredients: "Potato, carrot, vermicelli, egg, flour, margarine, garlic, onion, pepper, chicken consommé, cooking oil",
      },
      {
        name: "Kolak Labu (Pumpkin in Coconut Milk Dessert)",
        img: "/imgfood/erni/kolaklabu.jpeg",
        desc: "Kolak Labu is a traditional Indonesian dessert often enjoyed during the holy month of Ramadan, especially to break the fast. The dish is made by simmering pumpkin in coconut milk with palm sugar, creating a sweet, creamy, and comforting flavor. Its origins trace back to Javanese cuisine, where coconut and palm sugar have long been staples in local sweets. Over time, Kolak evolved into many variations, including banana, sweet potato, or cassava, but pumpkin remains one of the most popular. Symbolizing warmth, togetherness, and celebration, Kolak Labu is not just a dessert—it’s a cultural expression of Indonesian hospitality.",
        price: "300",
        ingredients: "Pumpkin, tapioca flour, palm sugar, cane sugar, cornstarch, coconut milk",
      },
      {
        name: "Tahu Isi (Stuffed Tofu Fritters)",
        img: "/imgfood/erni/tahuisi.jpeg",
        desc: "Tahu Isi is a beloved Indonesian street food snack made by stuffing tofu with seasoned vegetables before dipping it in batter and deep-frying until crispy. This dish originated from Java, where tofu—introduced by Chinese traders centuries ago—was quickly embraced and adapted into local culinary traditions. The filling often includes cabbage, carrots, and bean sprouts, seasoned with garlic and pepper, giving it a crunchy texture and savory taste. Popular at street stalls, family gatherings, and celebrations, Tahu Isi reflects Indonesia’s creativity in turning simple ingredients into flavorful and satisfying bites.",
        price: "200",
        ingredients: "Tofu, carrot, bean sprouts, cabbage, salt, garlic, pepper, cooking oil, wheat flour, potato starch",
      },
    ]
  },
  {
    name: "Tusuki!",
    foods: [
      {
        name: "Sate Ayam",
        img: "/imgfood/baqir/sateayam.jpg",
        desc: "Sate Ayam, or chicken satay, is a classic Indonesian street food that has been enjoyed for generations. Tender pieces of chicken are skewered and grilled over charcoal, then served with a rich, sweet, and savory peanut sauce. Historically, satay originated as a humble street snack, but it has grown to become a national favorite, representing the vibrant flavors and communal spirit of Indonesian cuisine. Enjoyed at festivals, family gatherings, or casual dinners, each bite tells a story of tradition and flavor.",
        price: "3 Skewers - ￥350, 5 Skewers - ￥500",
        ingredients: "Chicken, peanuts (allergen), shallots & garlic, soy-based soy sauce (potential allergen: soy), coriander, margarine (potential dairy allergen)",
      }
    ]
  },
  {
    name: "Sulawesi",
    foods: [
      {
        name: "Yellow Rice (Nasi Kuning)",
        img: "/imgfood/mursyida/nasikuning.jpg",
        desc: "Nasi Kuning, or Yellow Rice, is a festive Indonesian dish traditionally prepared with turmeric and coconut milk, giving it a fragrant aroma and golden color. Served with a complete array of side dishes such as fried chicken, boiled egg, fried noodles, crackers, and sambal terasi, it is often enjoyed during special occasions and celebrations. This dish reflects the rich cultural heritage of Indonesia and symbolizes prosperity and happiness in communal gatherings.",
        price: "650",
        ingredients: "Rice, turmeric, coconut milk, shallots, garlic, candlenuts, lemongrass, bay leaves, kaffir lime leaves, fried chicken, fried noodles, egg, crackers, salad & cucumber, sambal terasi",
      },
      {
        name: "Donat Kampung",
        img: "/imgfood/mursyida/donatkampung.jpeg",
        desc: "Donat Kampung is a traditional Indonesian-style doughnut made with soft potato dough, fried to perfection, and topped with sweet layers like chocolate sprinkles, strawberry jam, or tiramisu. Loved by both children and adults, this snack has been a staple in local markets and home kitchens for decades, evoking memories of festive mornings and afternoon tea.",
        price: "350",
        ingredients: "Potatoes, egg yolk, sugar, flour, instant yeast, margarine, toppings: chocolate sprinkles, strawberry jam, tiramisu",
      },
      {
        name: "Es Pisang Ijo",
        img: "/imgfood/mursyida/espisangijo.jpg",
        desc: "Es Pisang Ijo is a refreshing Indonesian dessert featuring banana wrapped in green pandan-flavored dough, served with sweet coconut milk sauce, coco pandan syrup, and condensed milk. Originating from Makassar, this sweet treat is traditionally served during Ramadan as a light iftar dessert. Its vibrant colors and tropical flavors make it both visually appealing and deliciously satisfying.",
        price: "350",
        ingredients: "Banana, rice flour, wheat flour, coconut milk, pandan paste & sugar, Marjan coco pandan syrup, condensed milk",
      },
      {
        name: "Aneka Jajanan Indonesia",
        img: "/imgfood/mursyida/jajan.jpg",
        desc: "A selection of traditional Indonesian snacks perfect for snacking, ranging from sweet to savory delights. This assortment includes treats like Beng-Beng chocolate bars, tempeh chips, coated peanuts, chocolate wafers, and banana chips. Each bite carries a piece of Indonesia’s rich culinary diversity, often enjoyed during gatherings, festivals, or casual afternoons.",
        price: "100",
        ingredients: "Beng-Beng, tempeh chips, coated peanuts, chocolate wafers, banana chips",
      },
      {
        name: "Ice tea",
        img: "/imgfood/mursyida/icetea.jpg",
        desc: "A classic iced tea made from brewed black tea, served chilled with ice cubes. This refreshing beverage is a staple in Indonesian households and street food culture, often enjoyed to cool down on hot days. Simple yet satisfying, iced tea pairs perfectly with a variety of Indonesian snacks and meals.",
        price: "",
        ingredients: "Tea sariwangi (Indonesia brand tea), sugar, Mineral Water dan ice",
      },
    ]
  },
  {
  name: "Waroeng We 愛你",
  foods: [
    {
      name: "Iced Thai Tea",
      img: "/imgfood/aini/icethaitea.jpeg",
      desc: "Iced Thai Tea is a refreshing beverage from Thailand, made with strong brewed black tea, sweetened condensed milk, and fresh milk. This drink has become popular in Indonesia for its rich, creamy taste and striking amber color. Perfect to enjoy on a warm afternoon at the festival, it offers a sweet and cooling experience that transports you to the bustling streets of Thailand.",
      price: "300",
      ingredients: "Thai Tea Mix, Condensed Milk, Milk",
    },
    {
      name: "Cireng Isi (Stuffed Tapioca Fritters)",
      img: "/imgfood/aini/cirengisi.jpeg",
      desc: "Cireng Isi is a traditional fried snack from West Java, Indonesia, made from chewy tapioca flour dough and stuffed with a flavorful mixture of chicken and spiced vegetables. Often enjoyed as a street food treat, this snack has been a favorite among locals for decades, offering a crunchy exterior and a soft, savory inside, perfect for enjoying while exploring the festival.",
      price: "250",
      ingredients: "Tapioca Flour, Rice Paper, Chicken, Paprika, Chili, Onion, Garlic, Citrus Leaf, Salt, Pepper, MSG",
    },
    {
      name: "Martabak Telur (Savory Stuffed Pancake)",
      img: "/imgfood/aini/martabaktelur.jpeg",
      desc: "Martabak Telur is a savory Indonesian pancake filled with minced chicken, green onions, and selected spices, fried to perfection. The outer layer is crispy while the inside remains soft and flavorful. Originating from Indonesia’s street food culture, this dish has become a beloved snack for gatherings, festivals, and casual meals alike, carrying a rich heritage of local flavors.",
      price: "350",
      ingredients: "Flour, Egg, Green Onion, Curry Powder, Minced Chicken",
    },
    ]
  },
  
  {
  name: "Kedai Anak Muda",
  foods: [
    {
      name: "Nasi Bakar (Grilled Rice)",
      img: "/imgfood/afifah/nasibakar.jpeg",
      desc: "Nasi Bakar, or 'grilled rice,' is a fragrant Indonesian dish where rice is mixed with flavorful fillings, wrapped in banana leaves, and grilled over charcoal for a smoky aroma. This version combines chicken, potato, and tempeh, offering a balance of savory protein, hearty texture, and nutty taste. The banana leaf not only locks in the flavor but also gives a traditional presentation that reflects Indonesia’s rich culinary heritage.",
      price: "500",
      ingredients: "Chicken, potato, tempeh",
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
    <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 mb-6 lg:mt-10 xl:mt-14">
      <div className="p-6 bg-gradient-to-b from-yellow-50 via-orange-50 to-orange-100 ">
        {/* Header */}
        <header className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-2">🍂 Find your Taste</h2>
          <p className="text-gray-700 text-md">
            Explore each stand and discover irresistible flavors, hearty dishes, and unique creations waiting just for you at Autumn Fest 2025!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sidebar Stand */}
          <aside className="bg-white/80 backdrop-blur-sm shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-orange-800">List Menu of Stands</h2>
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
                  className="rounded-xl bg-gradient-to-br from-yellow-50 via-orange-50 to-orange-100 shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer relative"
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
                  {/* Price in the top right of the image */}
                  <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    ￥ {food.price}
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
                    className="absolute top-3 right-3 text-white hover:text-gray-700 z-10 bg-orange-600 hover:bg-orange-500 p-1 rounded-full"
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
