'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Star, LogOut } from 'lucide-react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  tag?: string;
}


const categories = [
  { name: 'Refrigerator', icon: '🥶' },
  { name: 'Washing Machine', icon: '🧺' },
  { name: 'Air Conditioner', icon: '❄️' },
  { name: 'Television', icon: '📺' },
  { name: 'Microwave', icon: '🍽️' },
  { name: 'Vacuum Cleaner', icon: '🧹' },
];






const products: Product[] = [
  { id: 1, name: 'Kulkas 2 Pintu - Sharp SJ-236MG', price: 2749000, rating: 4.8, image: '/images/kulkas.jpg', tag: 'New' },
  { id: 2, name: 'Mesin Cuci - LG 7 Kg Front Load', price: 4100000, rating: 4.5, image: '/images/mesincuci.jpg', tag: 'Hot' },
  { id: 3, name: 'Dispenser -  PolytronBottomLoad', price: 1569000, rating: 4.9, image: '/images/dispenser.jpg', tag: 'Top' },
  { id: 4, name: 'AC Split" - Panasonic 1 PK', price: 4000000, rating: 4.6, image: '/images/ac.jpg', tag: 'Sale' },
  { id: 5, name: 'Setrika - Philips GC160', price: 450000, rating: 4.3, image: '/images/setrika.jpg' },
  { id: 6, name: 'Rice Cooker - Philips 2L', price: 830000, rating: 4.4, image: '/images/rice.jpg' },
  { id: 7, name: 'Microwave - Sharp R-21D0(S)', price: 1050000, rating: 4.4, image: '/images/microwave.jpg' },
  { id: 8, name: 'Blender - Miyako BL-101PL', price: 230000, rating: 4.4, image: '/images/blender.jpg' },
  { id: 9, name: 'Kompor Gas - Rinnai 2 Tungku', price: 560000, rating: 4.4, image: '/images/kompor.jpg' },
  { id: 10, name: 'TV LED - Samsung 32 Inch', price: 2488000, rating: 4.4, image: '/images/tv.jpg' },
];

const formatIDR = (n: number) => 'Rp ' + n.toLocaleString('id-ID');



export default function Page() {
const [showAlert, setShowAlert] = useState(false);
const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [tempName, setTempName] = useState('');
  const router = useRouter();

  // Load user and cart from localStorage once (inside component)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));

    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Cart handlers (contoh sinkron ke localStorage)
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const updated = [...prev, product];
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };



  const handleCheckout = () => {
    setCart([]);             // kosongkan keranjang
    setShowAlert(true);      // tampilkan notifikasi
  
    setTimeout(() => {
      setShowAlert(false);   // hilangkan otomatis
    }, 2000);
  };
  
  
  
  // Login/Logout handlers
  const handleLogin = () => {
    if (tempName.trim() === '') return alert('Masukkan nama terlebih dahulu!');
    const newUser = { name: tempName };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setShowLogin(false);
    setTempName('');
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedU = localStorage.getItem("user");
    if (savedU) setUser(JSON.parse(savedU));
  }, []);


  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Masukkan nama produk!");
      return;
    }
  
    router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
  };
  
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestionData = [
    "kunci set lengkap",
    "kulkas 1 pintu",
    "kuku palsu",
    "kursi lipat outdoor",
    "kulkas 2 pintu",
    "kunci shock set",
    "kulot wanita",
    "kutek peel off",
    "kulkas mini"
  ];
  
  

 
  return (
    <div className="min-h-screen bg-[#f7f6f3] font-poppins text-[#2e3a46]">

    
      {/*          NAVBAR              */}
     

      <header className="sticky top-0 z-50 bg-white shadow-md flex items-center px-6 py-3 justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo5.png" alt="ElectaHome Logo" width={105} height={20} />
        </div>

        {/* SEARCH */}
        <div className="flex-1 mx-8">
          <div className="flex bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Cari produk elektronik terbaik..."
              className="flex-1 px-4 py-2 text-gray-700 outline-none text-sm"
              value={searchTerm}
              onChange={(e) => {
                const value = e.target.value;
                setSearchTerm(value);

                if (!value.trim()) {
                  setSuggestions([]);
                  setShowSuggestions(false);
                  return;
                }

                const filtered = suggestionData.filter((item) =>
                  item.toLowerCase().includes(value.toLowerCase())
                );

                setSuggestions(filtered);
                setShowSuggestions(true);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <button
              onClick={handleSearch}
              className="bg-[#7ba9d0] hover:bg-[#5f93c5] px-5 flex items-center justify-center"
            >
              <Search className="text-white" size={20} />
            </button>
          </div>
        </div>

        {/* CART BUTTON */}
        <div className="relative mr-5">
          <button
            onClick={() => setShowCart(!showCart)}
            className="flex items-center gap-1 hover:opacity-90 transition"
          >
            🛒 <span>Keranjang</span>
          </button>

          {/* Badge */}
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#5f93c5] text-white text-xs font-bold rounded-full px-2 py-0.5">
              {cartItems.length}
            </span>
          )}

          {/* Popup Cart */}
          {showCart && (
  <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
    <div className="p-4 border-b font-semibold text-gray-700 flex justify-between items-center">
      <span>Keranjang</span>
      <button
        onClick={() => setShowCart(false)}
        className="text-gray-500 hover:text-red-500 text-sm"
      >
        ✕
      </button>
    </div>

    

    {cartItems.length === 0 ? (
      <p className="p-4 text-gray-500 text-sm text-center">Keranjang kosong</p>
    ) : (
      <>
        <ul className="max-h-64 overflow-y-auto">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center gap-3">
                <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-md" />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">Rp {item.price.toLocaleString("id-ID")}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-600 text-xs"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>

        {showAlert && (
  <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
    Barang berhasil dibeli!
  </div>
)}
 
        {/* CHECKOUT BUTTON */}
        <div className="p-4">
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm"
          >
            Checkout
          </button>
        </div>
      </>
    )}
  </div>
)}
</div>

        {/* USER BUTTON */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 border px-3 py-2 rounded-full hover:bg-gray-100 transition"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">{user.name}</span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg border z-50">
                <Link
                  href="/orders"
                  onClick={() => setShowDropdown(false)}
                  className="block w-full px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Pesanan Saya
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setShowDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm flex items-center gap-2"
                >
                  <LogOut size={14} /> Logout
                </button>
              </div>
            )}

          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 border px-3 py-2 rounded-full hover:bg-gray-100 transition"
          >
            <User className="w-5 h-5" /> <span className="text-sm">Akun</span>
          </Link>
        )}

      </header>
      
       
       {/* Hero section */}
<section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

<div>
  <p className="text-sm text-[#4a6fa5] font-semibold">100% Products Asli</p>
  <h1 className="text-4xl md:text-5xl font-extrabold text-[#2e3a46] leading-tight mt-3">
    Elektronik Modern,
    <br />
    Handal & Hemat Energi
  </h1>

  <p className="mt-6 text-gray-700 max-w-xl">
    Temukan peralatan elektronik rumah dengan desain modern, efisiensi energi tinggi, dan garansi resmi.
    Pilihan terbaik untuk kenyamanan rumah Anda.
  </p>

  <div className="mt-6 flex items-center gap-4">
    <button>
      <Link
        href="/about"
        className="bg-[#7ba9d0] hover:bg-[#5f93c5] text-white font-semibold px-6 py-3 rounded-lg shadow"
      >
        About Us
      </Link>
    </button>
  </div>

  <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
    <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
      <Image src="/images/garansi.webp" alt="" width={40} height={30} className="w-16 h-12 object-cover rounded" />
      <div>
        <p className="text-sm font-semibold">Garansi Resmi</p>
        <p className="text-xs text-gray-500">Layanan resmi 2 tahun</p>
      </div>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
      <Image src="/images/cepat.webp" alt="" width={40} height={30} className="w-16 h-12 object-cover rounded" />
      <div>
        <p className="text-sm font-semibold">Pengiriman Cepat</p>
        <p className="text-xs text-gray-500">Dikirim dalam 1-3 hari</p>
      </div>
    </div>
  </div>
</div>

<div className="relative">
  <div className="bg-white rounded-3xl p-8 shadow-xl flex items-center justify-center">
    <div className="flex items-center justify-center">
      <div className="w-[400px] h-[350px] flex items-center justify-center">
        <Image
          src="/images/Pera.jpg"
          alt="produk"
          width={400}
          height={350}
          className="object-contain"
        />
      </div>
    </div>
  </div>
</div>

</section>


      {/* Promo banners */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-[#f5f8fa] rounded-lg p-6 flex items-center justify-between">
          <div>
          <h4 className="font-semibold text-[#2e3a46]">Promo Hemat Minggu Ini</h4>
        <p className="text-sm text-gray-700 mt-2">Diskon hingga 30%...</p>
        <button className="mt-4 bg-white px-4 py-2 rounded shadow text-sm border border-gray-200">
          Belanja Sekarang
        </button>
          </div>
          <Image src="/images/promo.png" alt="promo" width={100} height={80} className="hidden md:block" />

        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4">
        <Image src="/images/gratis.jpg" alt="" width={60} height={60} />
          <div>
            <p className="text-sm font-semibold">Gratis Ongkir</p>
            <p className="text-xs text-gray-500">Untuk pembelian di atas Rp 1.000.000</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4">
        <Image src="/images/support.jpg" alt="" width={60} height={60} />
          <div>
            <p className="text-sm font-semibold">Layanan 24/7</p>
            <p className="text-xs text-gray-500">Customer support siap membantu</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h3 className="text-xl font-semibold text-[#2e3a46] mb-4">Kategori Populer</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition text-center">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products section styled like the image's product grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
  <h3 className="text-3xl font-extrabold text-[#4a6fa5] mb-6">Our Products</h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((p) => (
      <Link href={`/product/${p.id}`} key={p.id}>
      <motion.article
        className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-lg transition relative cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 14,
          duration: 0.8
        }}
        viewport={{ margin: "-50px", once: false }}
      >


          {p.tag && (
            <span className="absolute top-4 left-4 bg-[#2e3a46] text-white text-xs px-2 py-1 rounded">
              {p.tag}
            </span>
          )}

<div className="w-full h-64 flex items-center justify-center overflow-hidden bg-white rounded-xl">
  <Image
    src={p.image}
    alt={p.name}
    width={300}
    height={300}
    className="object-contain h-full"
  />
</div>




          <h4 className="font-semibold text-gray-800">{p.name}</h4>
          <div className="flex items-center justify-between mt-2 mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">{p.rating}</span>
            </div>
            <div className="text-black-700 font-bold">{formatIDR(p.price)}</div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(p);
            }}
            className="w-full px-3 py-2 bg-[#4a6fa5] text-white rounded-md text-sm hover:bg-[#4a6fa5]"
          >
            Tambah ke Keranjang
          </button>
        </motion.article>
      </Link>
    ))}
  </div>
</section>



      {/* CTA */}
      <motion.section
   className="bg-[#f5f8fa] py-16"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center place-items-stretch">
    {/* Fitur 1 */}
    <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow p-6">
      <Image src="/images/toko.png" alt="Transparan" width={100} height={100} className="mb-4" />
      <h3 className="text-xl font-bold text-[#4a6fa5]">Transparan</h3>
      <p className="text-gray-600 mt-2 text-sm max-w-xs">
        Pembayaran Anda baru diteruskan ke penjual setelah barang Anda terima.
      </p>
    </div>

    {/* Fitur 2 */}
    <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow p-6">
      <Image src="/images/aman.png" alt="Aman" width={100} height={100} className="mb-4" />
      <h3 className="text-xl font-bold text-[#4a6fa5]">Aman</h3>
      <p className="text-gray-600 mt-2 text-sm max-w-xs">
        Bandingkan review untuk berbagai online shop terpercaya se-Indonesia.
      </p>
    </div>

    {/* Fitur 3 */}
    <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow p-6">
      <Image src="/images/biaya.png" alt="Fasilitas Escrow Gratis" width={100} height={100} className="mb-4" />
      <h3 className="text-xl font-bold text-[#4a6fa5]">Fasilitas Escrow Gratis</h3>
      <p className="text-gray-600 mt-2 text-sm max-w-xs">
        Fasilitas Escrow (Rekening Bersama) ElectaHome tidak dikenakan biaya tambahan.
      </p>
    </div>
  </div>
</motion.section>


      {/* Footer styled like image (dark green) */}
      <motion.footer
  className="bg-[#2e3a46] text-white mt-12"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 50,
    damping: 16,
    duration: 1
  }}
  viewport={{ margin: "-50px", once: false }}
>


        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#f5f8fa]">ElectaHome</h2>
            <p className="text-sm text-gray-200 mt-3">Peralatan elektronik berkualitas tinggi untuk kenyamanan rumah Anda.</p>
            <div className="flex gap-3 mt-4">
    <a
      href="https://www.facebook.com/?locale=id_ID"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f5f8fa] transition-colors"
    >
      <Facebook size={18} />
    </a>
    <a
      href="https://twitter.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f5f8fa] transition-colors"
    >
      <Twitter size={18} />
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f5f8fa] transition-colors"
    >
      <Instagram size={18} />
    </a>

    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f5f8fa] transition-colors"
    >
      <Youtube size={18} />
    </a>
  </div>
          </div>

          <div>
          <h3 className="text-white-300 font-semibold mb-3">Company</h3>
          <ul className="text-sm text-gray-200 space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>
          <div>
            <h3 className="text-white-300 font-semibold mb-3">Customer Services</h3>
            <ul className="text-sm text-gray-200 space-y-2">
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/customer-service" className="hover:text-white transition">
                Customer Service
              </Link>
            </li>
             
            </ul>
          </div>

          <div>
  <h3 className="text-white-300 font-semibold mb-3">Info Kontak</h3>
  <ul className="text-sm text-gray-200 space-y-2">
    <li>
      <a
        href="https://wa.me/6289677896703"
        target="_blank"
        className="hover:underline"
      >
        📞 +62 896-7789-6703
      </a>
    </li>

    <li>
    <a href="mailto:ud.electahome@gmail.com" className="hover:underline">
  📧 ud.electahome@gmail.com
    </a>
    </li>

    <li>
      📍 Apartemen Bandar Kemayoran Tower A2, Jalan Benyamin Suaeb Blok C3,  
      Pademangan Timur, Jakarta Utara RT 17 RW 10
    </li>
  </ul>
</div>

        </div>

        <div className="border-t border-gray-600 py-4 text-center text-sm text-gray-300">
      © 2025 <span className="text-[#a1c4fd]">ElectaHome</span>. All Rights Reserved.
    </div>
      </motion.footer>
    </div>
  );
}
