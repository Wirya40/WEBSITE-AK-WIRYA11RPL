"use client";


import React, { useState } from "react";
import Link from "next/link";


const faqData = [
{ q: "Bagaimana cara mengajukan retur?", a: "Masuk ke halaman Bantuan Pesanan, pilih pesanan yang ingin diretur, lalu ikuti langkah retur." },
{ q: "Berapa lama garansi produk?", a: "Garansi resmi biasanya 1–2 tahun tergantung merek. Cek spesifikasi produk untuk detail." },
{ q: "Bagaimana cek status pesanan?", a: "Masuk ke Profil → Pesanan saya → Pilih pesanan untuk melihat status dan tracking." },
];


export default function FAQPage() {
const [openIndex, setOpenIndex] = useState<number | null>(null);


return (
<section className="max-w-3xl mx-auto px-6 py-12">
<h1 className="text-3xl font-bold text-[#2e3a46] mb-4">FAQ - Pertanyaan yang sering diajukan</h1>
<div className="bg-white rounded-2xl p-4 shadow-sm">
{faqData.map((f, i) => (
<div key={i} className="border-b last:border-none">
<button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full text-left p-4 flex justify-between items-center">
<span className="font-medium text-[#2e3a46]">{f.q}</span>
<span className="text-gray-500">{openIndex === i ? "-" : "+"}</span>
</button>
{openIndex === i && (
<div className="p-4 pt-0 text-gray-700">{f.a}</div>
)}
</div>
))}
</div>


<div className="mt-6">
<Link href="/customer-service" className="text-[#7ba9d0] hover:underline">← Kembali ke Customer Service</Link>
</div>
</section>
);
}