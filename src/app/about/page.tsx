'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f6fdf8] text-gray-800 font-poppins overflow-hidden">

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-[#4a6fa5] text-white py-16 text-center shadow-md"
      >
        <h1 className="text-4xl font-extrabold tracking-wide">
          Tentang ElectaHome
        </h1>
        <p className="mt-3 text-gray-200 text-lg">
          Elektronik Modern, Andal, dan Efisien Energi untuk Setiap Rumah
        </p>
      </motion.section>

      {/* Company Background */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#4a6fa5] mb-4">Latar Belakang Perusahaan</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>ElectaHome</strong> berdiri sejak tahun <b>2020</b> sebagai perusahaan
            yang berfokus pada penyediaan produk elektronik rumah tangga modern.
            Kami memahami bahwa kebutuhan rumah tangga tidak hanya soal fungsionalitas,
            tetapi juga efisiensi energi dan kenyamanan jangka panjang.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Dengan dukungan berbagai merek ternama, ElectaHome terus berinovasi
            menghadirkan produk yang berkualitas, tahan lama, dan ramah lingkungan —
            menjadikan pengalaman berbelanja rumah Anda lebih mudah, cepat, dan menyenangkan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-96"
        >
          <Image
            src="/images/perusahaan1.jpg"
            alt="ElectaHome Company"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-[#4a6fa5] p-6 rounded-xl shadow-sm text-white"
>
  <h3 className="text-xl font-semibold mb-3">Visi Kami</h3>
  <p className="leading-relaxed">
    Menjadi perusahaan elektronik rumah tangga terpercaya di Indonesia
    yang menghadirkan produk inovatif dan ramah lingkungan untuk meningkatkan
    kualitas hidup masyarakat.
  </p>
</motion.div>

<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-[#4a6fa5] p-6 rounded-xl shadow-sm text-white"
>
  <h3 className="text-xl font-semibold mb-3">Misi Kami</h3>
  <ul className="space-y-2 list-disc pl-5">
    <li>Menyediakan produk elektronik berkualitas tinggi dengan garansi resmi.</li>
    <li>Mengutamakan efisiensi energi dan keberlanjutan lingkungan.</li>
    <li>Memberikan pelayanan cepat, ramah, dan profesional.</li>
    <li>Berinovasi mengikuti perkembangan teknologi global.</li>
  </ul>
</motion.div>

        </div>
      </motion.section>

      {/* CTA Back */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center py-12"
      >
        <Link
          href="/"
          className="inline-block bg-[#2e3a46] hover:bg-[#2e3a46] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all"
        >
          ← Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
