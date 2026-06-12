"use client";

import React from "react";
import Link from "next/link";
import { Landmark, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const tahunSekarang = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 sm:grid-cols-3">
        
        {/* KOLOM 1: LOGO & TENTANG */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-black tracking-tight">
            <Landmark className="text-amber-500" size={24} />
            <span className="text-base uppercase">Kecamatan Cibarusah</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Portal Aplikasi KKP Terintegrasi Pelayanan Publik dan Pusat Aspirasi Online Masyarakat Kecamatan Cibarusah.
          </p>
        </div>

        {/* KOLOM 2: TAUTAN CEPAT */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Tautan Pintas</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-amber-400 transition-colors">Beranda</Link></li>
            <li><Link href="/layanan" className="hover:text-amber-400 transition-colors">Layanan Publik</Link></li>
            <li><Link href="/pengumuman" className="hover:text-amber-400 transition-colors">Pengumuman</Link></li>
            <li><Link href="/kegiatan" className="hover:text-amber-400 transition-colors">Kegiatan Resmi</Link></li>
            <li><Link href="/kontak" className="hover:text-amber-400 transition-colors">Pusat Kontak & Aduan</Link></li>
          </ul>
        </div>

        {/* KOLOM 3: KONTAK KANTOR */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Kontak Utama</h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Jl. Raya Cibarusah No. 1, Kabupaten Bekasi, Jawa Barat.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-amber-500 flex-shrink-0" />
              <span>0853-6952-4643</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-amber-500 flex-shrink-0" />
              <span>cibarusahkecamatan@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BAWAH */}
      <div className="max-w-5xl mx-auto px-4 mt-10 pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {tahunSekarang} Kecamatan Cibarusah. All Rights Reserved.</p>
        <p className="font-semibold text-slate-400">WEBSITE KECAMATAN CIBARUSAH</p>
      </div>
    </footer>
  );
}