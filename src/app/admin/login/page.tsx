"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // VALIDASI USERNAME & PASSWORD
    if (username === "admin" && password === "admin123") {
      // Simpan status login ke memori browser agar diizinkan masuk
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Sukses! Selamat datang, Admin.");
      router.push("/admin/dashboard");
    } else {
      alert("Username atau Password salah, Ham!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 text-slate-100">
      <div className="bg-slate-850 border border-slate-800 p-8 rounded-2xl w-full max-w-sm shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <ShieldCheck className="mx-auto text-amber-500" size={40} />
          <h1 className="text-xl font-black tracking-tight">GATED CMS LOGIN</h1>
          <p className="text-xs text-slate-400">Masukkan akun administrator Kecamatan Cibarusah</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500" 
              placeholder="Ketik admin..." 
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500" 
              placeholder="Ketik admin123..." 
            />
          </div>
          <button type="submit" className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase rounded-xl transition-all cursor-pointer">
            Masuk Sistem
          </button>
        </form>
      </div>
    </div>
  );
}