import React, { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import AddBarang from "./AddBarang";

const BarangCrud = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Pumpkin Pie", img: "https://picsum.photos/200?1" },
    { id: 2, name: "Autumn Leaves Tea", img: "https://picsum.photos/200?2" },
    { id: 3, name: "Chestnut Latte", img: "https://picsum.photos/200?3" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-100 to-orange-200 px-6 py-8 z-99999 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-900">🍁 Autumn Items</h1>
            <AddBarang/>
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-4 flex flex-col items-center border border-orange-200"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-cover rounded-xl mb-3"
            />
            <h2 className="text-lg font-semibold text-orange-800 mb-3">
              {item.name}
            </h2>
            <div className="flex gap-2">
              <button
                // onClick={() => editItem(item.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg shadow"
              >
                <Edit2 size={18} />
              </button>
              <button
                // onClick={() => deleteItem(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarangCrud;
