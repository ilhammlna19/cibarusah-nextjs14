"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Landmark } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  // Hanya menampilkan menu yang sudah aktif dan terisi kontennya
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Layanan Publik", path: "/layanan" },
    { name: "Pengumuman", path: "/pengumuman" },
    { name: "Kegiatan", path: "/kegiatan" },
    { name: "Kontak & Aduan", path: "/kontak" },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* BAGIAN LOGO KIRI */}
          <Link href="/" className="flex items-center gap-2 font-black text-slate-800 tracking-tight">
            <Landmark className="text-amber-500" size={24} />
            <div className="flex flex-col border-l-2 border-slate-300 pl-2 leading-none">
              <span className="text-sm font-extrabold text-slate-800">CIBARUSAH</span>
              <span className="text-[10px] font-bold text-slate-500 tracking-wider">PORTAL WEBSITE</span>
            </div>
          </Link>

          {/* BAGIAN MENU NAVIGASI KANAN */}
          <div className="flex items-center gap-1 md:gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-amber-500 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}