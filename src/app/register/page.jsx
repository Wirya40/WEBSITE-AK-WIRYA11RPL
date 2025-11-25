'use client';
import React, { useState } from 'react';
import { UserPlus, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      alert('Semua data wajib diisi!');
      return;
    }

    // Simpan data (contoh sederhana, biasanya pakai backend)
    localStorage.setItem(
      'newUser',
      JSON.stringify({ username, email, password })
    );

    alert('Pendaftaran berhasil! Silakan login.');
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7e6e1] px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

        {/* Tombol Kembali */}
        <button
          onClick={() => router.push('/login')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Login
        </button>

        <h1 className="text-3xl font-bold text-center text-[#5f93c5] mb-8">
          Daftar Akun Baru
        </h1>

        {/* Username */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <div className="flex items-center bg-[#d5dfe8] rounded-lg px-4 py-2">
            <UserPlus className="w-5 h-5 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="flex items-center bg-[#d5dfe8] rounded-lg px-4 py-2">
            <Mail className="w-5 h-5 mr-2 text-gray-500" />
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center bg-[#d5dfe8] rounded-lg px-4 py-2">
            <Lock className="w-5 h-5 mr-2 text-gray-500" />
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Tombol Register */}
        <button
          onClick={handleRegister}
          className="w-full bg-[#5f93c5] hover:bg-[#4a6fa5] transition-colors text-white font-semibold rounded-lg py-3"
        >
          Daftar
        </button>

        {/* Sudah punya akun */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Sudah punya akun?{' '}
          <button
            onClick={() => router.push('/login')}
            className="text-[#5f93c5] hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
