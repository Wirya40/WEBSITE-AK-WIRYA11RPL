"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Kulkas 2 Pintu - Sharp SJ-236MG", price: 2749000, image: "/images/kulkas.jpg" },
  { id: 2, name: "Mesin Cuci - LG 7 Kg Front Load", price: 4100000, image: "/images/mesin cuci.jpg" },
  { id: 3, name: "Dispenser - Polytron Bottom Load", price: 1569000, image: "/images/dispenser.jpg" },
  { id: 4, name: "AC Split - Panasonic 1 PK", price: 4000000, image: "/images/ac.jpg" },
  { id: 5, name: "Setrika - Philips GC160", price: 450000, image: "/images/setrika.jpg" },
  { id: 6, name: "Rice Cooker - Philips 2L", price: 830000, image: "/images/rice.jpg" },
  { id: 7, name: "Microwave - Sharp R-21D0(S)", price: 1050000, image: "/images/microwave.jpg" },
  { id: 8, name: "Blender - Miyako BL-101PL", price: 230000, image: "/images/blender.jpg" },
  { id: 9, name: "Kompor Gas - Rinnai 2 Tungku", price: 560000, image: "/images/kompor.jpg" },
  { id: 10, name: "TV LED - Samsung 32 Inch", price: 2488000, image: "/images/tv.jpg" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
      >
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
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="bg-white p-3 rounded-lg shadow hover:shadow-lg"
          >
            <div className="relative w-full h-36">
              <Image src={item.image} alt={item.name} fill className="object-contain rounded" />
            </div>
            <p className="mt-2 font-semibold text-sm">{item.name}</p>
            <p className="text-blue-600 font-bold text-sm">
              Rp {item.price.toLocaleString("id-ID")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
