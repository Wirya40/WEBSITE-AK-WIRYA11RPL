'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { User, Lock, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert('Isi username dan password terlebih dahulu');
      return;
    }
    localStorage.setItem('user', JSON.stringify({ name: username }));
    router.push('/');
  };

  const handleBackHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Kiri: Ilustrasi */}
      <div className="hidden md:flex w-1/2 bg-[#ffffff] items-center justify-center relative overflow-hidden">

  <div className="absolute w-[600px] h-[600px] bg-[#f3f2ef] rounded-full opacity-50 blur-3xl -z-10" />


        <div className="text-center">
        <Image
          src="/images/logo5.png"
          alt="Ilustrasi Belanja"
          width={320}
          height={320}
          className="mx-auto"
        />
          <h2 className="text-2xl font-semibold text-[#5f93c5] mt-6">
            Selamat Datang di ElectaHome
          </h2>
          <p className="text-white-600 mt-2">
            Belanja kebutuhan rumah Anda dengan mudah dan cepat
          </p>
        </div>
      </div>

      {/* Kanan: Form Login */}
      <div className="w-full md:w-1/2 bg-[#2e3a46] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">LOGIN</h1>

        {/* Username */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Username</label>
          <div className="flex items-center bg-[#4a6fa5] rounded-full px-4 py-2">
            <User className="w-5 h-5 mr-2 text-gray-300" />
            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent outline-none flex-1 text-white placeholder-white-400"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="flex items-center bg-[#4a6fa5] rounded-full px-4 py-2">
            <Lock className="w-5 h-5 mr-2 text-gray-300" />
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none flex-1 text-white placeholder-white-400"
            />
          </div>
        </div>

        {/* Tombol Login */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#4a6fa5] hover:bg-[#5f93c5] transition-colors text-white font-semibold rounded-full py-2"
        >
          LOGIN
        </button>

        {/* Tombol Kembali ke Home */}
        <button
          onClick={handleBackHome}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-[#4a6fa5] hover:bg-[#5f93c5] transition-colors text-white font-medium rounded-full py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Home
        </button>

        <p className="text-sm text-center text-gray-300 mt-6">
          Belum punya akun?{' '}
          <Link href="/register" className="text-[#f7f6f3] hover:underline">
          Daftar sekarang
        </Link>

        </p>
      </div>
    </div>
  );
}
