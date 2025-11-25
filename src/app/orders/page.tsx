"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Order {
  id: string;
  product: string;
  date: string;
  status: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders([
      {
        id: "ORD-123456",
        product: "Kulkas 2 Pintu Sharp",
        date: "2025-01-22",
        status: "Dalam Pengiriman",
      },
      {
        id: "ORD-987654",
        product: "AC Panasonic 1 PK",
        date: "2025-01-18",
        status: "Selesai",
      },
    ]);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#2e3a46] mb-4">Pesanan Saya</h1>

      {/* Tombol Back to Home */}
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition text-sm text-gray-700"
      >
        ← Back to Home
      </Link>

      <div className="grid gap-4">
        {orders.map((o) => (
          <Link
            key={o.id}
            href={`/orders/${o.id}`}
            className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-lg">{o.product}</p>
              <p className="text-sm text-gray-500">{o.date}</p>
            </div>

            <div className="text-right">
              <p className="text-[#4a6fa5] font-medium">{o.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
