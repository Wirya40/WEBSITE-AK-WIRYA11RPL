"use client";



import Link from "next/link";
import { Truck } from "lucide-react";


export default function ShippingPage() {
return (
<section className="max-w-4xl mx-auto px-6 py-12">
<div className="flex items-center gap-4 mb-6">
<Truck className="w-8 h-8 text-[#7ba9d0]" />
<h1 className="text-2xl font-bold text-[#2e3a46]">Informasi Pengiriman</h1>
</div>


<div className="bg-white rounded-2xl p-6 shadow-sm grid gap-4">
<p className="text-gray-700">Estimasi pengiriman biasanya 1–3 hari kerja (Jabodetabek) dan 3–7 hari untuk luar kota tergantung kurir.</p>


<h3 className="font-semibold text-[#2e3a46]">Kendala umum</h3>
<ul className="list-disc pl-6 text-gray-700">
<li>Paket tertunda karena cuti atau cuaca buruk</li>
<li>Alamat tidak lengkap</li>
<li>Nomor telepon penerima tidak aktif</li>
</ul>


<p className="text-gray-700">Jika Anda mengalami masalah pengiriman, kunjungi <Link href="/customer-service/order-help" className="text-[#7ba9d0] hover:underline">Bantuan Pesanan</Link> untuk mengajukan komplain.</p>


<div className="mt-4">
<Link href="/customer-service" className="inline-block bg-[#7ba9d0] text-white px-5 py-2 rounded-lg hover:bg-[#5f93c5] transition">← Kembali ke Customer Service</Link>
</div>
</div>
</section>
);
}