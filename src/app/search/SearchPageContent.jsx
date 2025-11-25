"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Kulkas 2 Pintu - Sharp SJ-236MG", price: 2749000, image: "/images/kulkas.jpg" },
  { id: 2, name: "Mesin Cuci - LG 7 Kg Front Load", price: 4100000, image: "/images/mesin-cuci.jpg" },
];

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/" className="inline-block mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow">
        ← Kembali ke Home
      </Link>

      <h1 className="text-2xl font-bold mb-6">
        Hasil pencarian untuk: <span className="text-blue-600">"{query}"</span>
      </h1>

      {results.length === 0 && (
        <p className="text-gray-500">Tidak ada produk yang cocok.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {results.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`} className="bg-white p-3 rounded-lg shadow hover:shadow-lg">
            <div className="relative w-full h-36">
              <Image src={item.image} alt={item.name} fill className="object-contain rounded" />
            </div>
            <p className="mt-2 font-semibold text-sm">{item.name}</p>
            <p className="text-blue-600 font-bold text-sm">Rp {item.price.toLocaleString("id-ID")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
