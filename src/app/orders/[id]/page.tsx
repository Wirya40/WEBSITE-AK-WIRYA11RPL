"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Truck } from "lucide-react";

export default function OrderDetail() {
  const { id } = useParams();

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">

      <Link href="/orders" className="flex items-center gap-2 text-[#4a6fa5] mb-6">
        <ArrowLeft className="w-4 h-4" />
        Kembali
      </Link>

      <h1 className="text-2xl font-bold text-[#2e3a46]">Detail Pesanan</h1>

      <div className="bg-white p-6 rounded-xl border shadow-sm mt-4 grid gap-4">
        <p><strong>ID Pesanan:</strong> {id}</p>
        <p><strong>Status:</strong> Dalam Pengiriman</p>
        <p><strong>Kurir:</strong> JNE Express</p>
        <p><strong>Tracking:</strong> JN123456789</p>

        <div className="mt-4">
          <p className="font-semibold mb-2">Tracking Pengiriman:</p>

          <div className="flex items-center gap-3 text-[#4a6fa5]">
            <Truck />
            Sedang dikirim ke alamat Anda...
          </div>
        </div>
      </div>
    </section>
  );
}
