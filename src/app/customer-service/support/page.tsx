"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // show alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);

    // show modal
    setShowModal(true);

    // reset
    setName("");
    setMessage("");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[#2e3a46] mb-2">Customer Care</h1>
      <p className="text-gray-600 mb-6">
        Tim Customer Care ElectaHome siap membantu kebutuhan Anda.
      </p>

      {showAlert && (
        <div className="mb-4 p-3 rounded-lg text-white bg-green-500 font-semibold">
          Pesan dikirim (preview)...
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 shadow-sm grid gap-4"
      >
        <div>
          <label className="text-sm font-medium text-[#2e3a46]">Nama</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ba9d0]"
            placeholder="Nama lengkap"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#2e3a46]">Pesan</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ba9d0]"
            placeholder="Tulis pesan Anda..."
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#7ba9d0] text-white px-4 py-2 rounded-lg hover:bg-[#5f93c5] transition"
          >
            <Send className="w-4 h-4" /> Kirim
          </button>

          <Link
            href="/customer-service"
            className="text-sm text-gray-600 hover:underline"
          >
            ← Kembali ke Customer Service
          </Link>
        </div>
      </form>

      {/* Minimal modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowModal(false)}
          />
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <CheckCircle className="mx-auto text-green-500 w-10 h-10 mb-3" />
            <p className="font-semibold text-[#2e3a46] mb-4">
              Pesan berhasil dikirim
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[#7ba9d0] text-white rounded-lg"
            >
              Oke
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
