"use client";

import Link from "next/link";
import {
  MessageCircle,
  Package,
  Truck,
  Info,
  Headphones,
} from "lucide-react";

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-[#2e3a46] mb-3">
        Customer Service ElectaHome
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Kami hadir untuk membantu Anda. Pilih layanan yang Anda butuhkan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/customer-service/chat"
          className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
        >
          <MessageCircle className="w-10 h-10 text-[#7ba9d0]" />
          <div>
            <p className="font-semibold text-[#2e3a46]">Live Chat</p>
            <p className="text-sm text-gray-500">
              Hubungi CS secara langsung
            </p>
          </div>
        </Link>

        <Link
          href="/customer-service/order-help"
          className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
        >
          <Package className="w-10 h-10 text-[#7ba9d0]" />
          <div>
            <p className="font-semibold text-[#2e3a46]">Bantuan Pesanan</p>
            <p className="text-sm text-gray-500">
              Lacak atau keluhkan pesanan
            </p>
          </div>
        </Link>

        <Link
          href="/customer-service/shipping"
          className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
        >
          <Truck className="w-10 h-10 text-[#7ba9d0]" />
          <div>
            <p className="font-semibold text-[#2e3a46]">Pengiriman</p>
            <p className="text-sm text-gray-500">
              Informasi dan kendala pengiriman
            </p>
          </div>
        </Link>

        <Link
          href="/customer-service/faq"
          className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
        >
          <Info className="w-10 h-10 text-[#7ba9d0]" />
          <div>
            <p className="font-semibold text-[#2e3a46]">FAQ</p>
            <p className="text-sm text-gray-500">
              Pertanyaan yang sering diajukan
            </p>
          </div>
        </Link>

        <Link
          href="/customer-service/support"
          className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
        >
          <Headphones className="w-10 h-10 text-[#7ba9d0]" />
          <div>
            <p className="font-semibold text-[#2e3a46]">Customer Care</p>
            <p className="text-sm text-gray-500">
              Pusat bantuan resmi ElectaHome
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-[#7ba9d0] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#5f93c5] transition"
        >
          ← Kembali ke Home
        </Link>
      </div>
    </section>
  );
}
