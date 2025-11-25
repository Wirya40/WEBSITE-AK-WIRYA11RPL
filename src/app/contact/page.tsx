'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [sent, setSent] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Logika submit form (kirim API, email, dll)
    // Untuk sekarang kita hanya tampilkan notifikasi
    setSent(true);

    // Hilangkan notifikasi otomatis setelah 3 detik
    setTimeout(() => setSent(false), 3000);
  };
  

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 bg-white">
      <h1 className="text-4xl font-extrabold text-[#2e3a46] mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-8 max-w-2xl">
        Hubungi kami untuk pertanyaan terkait produk, layanan, atau kerja sama.
      </p>

      {/* NOTIFIKASI */}
      {sent && (
        <div className="mb-4 p-3 rounded-lg text-white bg-green-500 font-semibold animate-pulse">
          Pesan berhasil dikirim!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 bg-[#f5ede1] p-8 rounded-2xl shadow-md"
      >
        <div>
          <label className="block text-sm font-semibold text-[#2e3a46] mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white 
            focus:outline-none focus:ring-2 focus:ring-[#7ba9d0]"
            placeholder="Nama Anda"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#2e3a46] mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white 
            focus:outline-none focus:ring-2 focus:ring-[#7ba9d0]"
            placeholder="email@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#2e3a46] mb-1">
            Pesan
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none bg-white
            focus:outline-none focus:ring-2 focus:ring-[#7ba9d0]"
            placeholder="Tulis pesan Anda..."
            required
          ></textarea>
        </div>
      

        <button
          type="submit"
          className="bg-[#7ba9d0] text-white py-3 rounded-lg font-semibold 
          hover:bg-[#5f93c5] transition"
        >
          Kirim Pesan
        </button>
        
        <div className="mt-6">
  <Link
    href="/"
    className="inline-block bg-[#7ba9d0] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#5f93c5] transition"
  >
    ← Balik ke Home
  </Link>
</div>

      </form>
    </section>
  );
}
