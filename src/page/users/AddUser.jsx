import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddUser = ({ refreshTable }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // state form
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const createHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !img) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Nama dan URL gambar tidak boleh kosong",
      });
    }

    try {
      const response = await axios.post(
        `${serverSourceDev}barang/create`,
        {
          name,
          img,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Barang berhasil ditambahkan 🎉",
        }).then(() => {
          setVisible(false);
          refreshTable();
          setName("");
          setImg("");
        });
      }
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        icon: "error",
        title: "Gagal menambah barang",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Tombol Add */}
      <button
        onClick={() => setVisible(true)}
        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-300 text-white px-4 py-2 rounded-xl shadow-md transition"
      >
        ➕ Item
      </button>

      {/* Modal */}
      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
            <h2 className="text-xl font-bold text-orange-700 mb-4">
              Tambah Barang Baru
            </h2>
            <form onSubmit={createHandler} className="space-y-4">
              {/* Nama Barang */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nama Barang
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama barang"
                  className="w-full mt-1 p-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              {/* URL Gambar */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  URL Gambar
                </label>
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  placeholder="https://..."
                  className="w-full mt-1 p-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              {/* Tombol Action */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setVisible(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Confirm"}
                </button>
              </div>
            </form>

            {/* Tombol Close di pojok */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUser;
