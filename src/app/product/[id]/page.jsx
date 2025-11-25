'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// ================== DATA PRODUK ==================
const products = [
  { id: 1, name: 'Kulkas 2 Pintu - Sharp SJ-236MG', price: 2749000, rating: 4.8, image: '/images/kulkas.jpg', description: 'Kulkas 2 pintu hemat energi dengan teknologi cooling cepat dan kapasitas besar.' },
  { id: 2, name: 'Mesin Cuci - LG 7 Kg Front Load', price: 4100000, rating: 4.5, image: '/images/mesincuci.jpg', description: 'Mesin cuci hemat air dan listrik dengan sistem pencucian cepat.' },
  { id: 3, name: 'Dispenser - Polytron Bottom Load', price: 1569000, rating: 4.9, image: '/images/dispenser.jpg', description: 'Dispenser air panas dan dingin dengan sistem bottom load yang praktis.' },
  { id: 4, name: 'AC Split - Panasonic 1 PK', price: 4000000, rating: 4.6, image: '/images/ac.jpg', description: 'AC hemat energi dengan fitur pendingin cepat dan ramah lingkungan.' },
  { id: 5, name: 'Setrika - Philips GC160', price: 450000, rating: 4.3, image: '/images/setrika.jpg', description: 'Setrika dengan lapisan anti lengket dan pemanas cepat.' },
  { id: 6, name: 'Rice Cooker - Philips 2L', price: 830000, rating: 4.4, image: '/images/rice.jpg', description: 'Rice cooker hemat energi dengan kapasitas besar.' },
  { id: 7, name: 'Microwave - Sharp R-21D0(S)', price: 1050000, rating: 4.4, image: '/images/microwave.jpg', description: 'Microwave hemat energi dengan fitur pemanasan cepat.' },
  { id: 8, name: 'Blender - Miyako BL-101PL', price: 230000, rating: 4.4, image: '/images/blender.jpg', description: 'Blender kuat untuk kebutuhan dapur harian.' },
  { id: 9, name: 'Kompor Gas - Rinnai 2 Tungku', price: 560000, rating: 4.4, image: '/images/kompor.jpg', description: 'Kompor gas efisien dengan 2 tungku.' },
  { id: 10, name: 'TV LED - Samsung 32 Inch', price: 2488000, rating: 4.4, image: '/images/tv.jpg', description: 'TV LED hemat energi dengan tampilan jernih.' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  
  
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  // Load cart dari localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Fungsi tambah ke keranjang
  const addToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg">Produk tidak ditemukan 😢</p>
        <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-[#4a6fa5] text-white rounded-md">
          Kembali
        </button>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== Number(id));

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-white">

      {/* ================== ALERT ================== */}
      {showAlert && (
        <div className="w-full bg-green-500 text-white text-center py-3 mb-6 font-semibold rounded-md shadow">
          🛒 Produk berhasil ditambahkan ke keranjang
        </div>
      )}

      {/* ================== NAVBAR KERANJANG ================== */}
      <div className="w-full flex justify-end mb-6">
        <div className="relative">
          <button
            onClick={() => setShowCartMenu(!showCartMenu)}
            className="px-4 py-2 bg-[#A7C8F2] hover:bg-[#94B9E0] text-[#374151] rounded-lg shadow font-semibold"
          >
            🛒 Keranjang ({cart.length})
          </button>

          {showCartMenu && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-64 p-3 z-50">
              <h3 className="font-semibold text-[#374151] mb-2">Barang di Keranjang</h3>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Keranjang masih kosong</p>
              ) : (
                <div className="max-h-56 overflow-y-auto">
                  {cart.map((item, i) => (
                    <div key={i} className="border-b py-2">
                      <p className="font-semibold text-sm text-[#374151]">{item.name}</p>
                      <p className="text-gray-600 text-sm">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => router.push('/')}
                className="w-full mt-3 py-2 bg-[#A7C8F2] text-[#374151] rounded-md font-semibold hover:bg-[#94B9E0]"
              >
                Checkout / Ke Home
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================== DETAIL PRODUK ================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* FOTO PRODUK */}
        <div className="relative w-full h-[450px] bg-[#FFFFFF] rounded-xl shadow p-4 border">
          <Image src={product.image} alt={product.name} fill className="object-contain rounded-lg" />
        </div>

        {/* DETAIL PRODUK */}
        <div>
          <div className="inline-block bg-[#F7EEDB] text-[#374151] px-3 py-1 rounded-md text-sm font-semibold shadow">
            Official Store
          </div>

          <h1 className="text-3xl font-bold mt-3 text-[#374151]">{product.name}</h1>

          <div className="flex items-center gap-2 mt-2 text-sm text-[#6B7280]">
            <span className="text-yellow-500">⭐ {product.rating}</span>
            <span>| 1 Penilaian</span>
          </div>

          <div className="mt-4">
            <p className="line-through text-gray-400 text-lg">
              Rp {(product.price + 1500000).toLocaleString('id-ID')}
            </p>
            <p className="text-3xl font-bold text-[#374151]">
              Rp {product.price.toLocaleString('id-ID')}
            </p>
          </div>

          {/* Tombol */}
          <div className="mt-6 flex gap-4">
            <button className="bg-[#A7C8F2] hover:bg-[#94B9E0] text-[#374151] px-6 py-3 rounded-lg font-semibold shadow-md transition">
              Beli Sekarang
            </button>

            <button
              onClick={addToCart}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-[#F2F2F2] transition"
            >
              Tambah ke Keranjang
            </button>
          </div>

        </div>
      </div>

      {/* ================== PRODUK LAINNYA ================== */}
      <h2 className="text-2xl font-semibold mt-14 mb-4 text-[#374151]">Produk Lainnya</h2>

      <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">
        {otherProducts.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`} className="min-w-[180px] bg-white border rounded-lg shadow p-3 hover:shadow-lg transition">
            <div className="relative w-full h-40 bg-[#FFFFFF] rounded-md">
              <Image src={item.image} alt={item.name} fill className="object-contain" />
            </div>
            <p className="mt-2 font-semibold text-sm text-[#374151]">{item.name}</p>
            <p className="text-[#374151] font-bold text-sm">Rp {item.price.toLocaleString('id-ID')}</p>
          </Link>
        ))}
      </div>

      {/* BACK HOME */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-[#A7C8F2] hover:bg-[#94B9E0] text-[#374151] rounded-lg shadow transition font-semibold"
        >
          Kembali ke Home
        </button>
      </div>

    </div>
  );
}
