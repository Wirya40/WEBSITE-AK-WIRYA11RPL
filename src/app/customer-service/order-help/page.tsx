"use client";


import React, { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";



export default function OrderHelpPage() {
const [orderId, setOrderId] = useState("");
const [issue, setIssue] = useState("");
const [showAlert, setShowAlert] = useState(false);


const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (!orderId.trim() || !issue.trim()) {
setShowAlert(true);
setTimeout(() => setShowAlert(false), 3000);
return;
}


// simulate submit
setShowAlert(true);
setTimeout(() => setShowAlert(false), 3000);
setOrderId("");
setIssue("");
};


return (
<section className="max-w-3xl mx-auto px-6 py-12">
<h1 className="text-3xl font-bold text-[#2e3a46] mb-2">Bantuan Pesanan</h1>
<p className="text-gray-600 mb-6">Masukkan ID pesanan dan deskripsikan masalah Anda. Tim kami akan membantu.</p>


{showAlert && (
<div className="mb-4 p-3 rounded-lg text-white bg-green-500 font-semibold">Permintaan bantuan telah dikirim. Tim kami akan menghubungi Anda.</div>
)}


<form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm grid gap-4">
<div>
<label className="text-sm font-medium text-[#2e3a46]">Order ID</label>
<input value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="Contoh: ORD-123456" className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ba9d0]" />
</div>


<div>
<label className="text-sm font-medium text-[#2e3a46]">Deskripsi Masalah</label>
<textarea value={issue} onChange={(e) => setIssue(e.target.value)} rows={5} placeholder="Tulis detail masalah (barang rusak, belum dikirim, dsb)" className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ba9d0]" />
</div>


<div className="flex items-center gap-3">
<button type="submit" className="inline-flex items-center gap-2 bg-[#7ba9d0] text-white px-4 py-2 rounded-lg hover:bg-[#5f93c5] transition"><FileText className="w-4 h-4" /> Kirim Permintaan</button>
<Link href="/customer-service" className="text-sm text-gray-600 hover:underline">← Kembali ke Customer Service</Link>
</div>
</form>
</section>
);
}