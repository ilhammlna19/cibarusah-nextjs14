"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Tag, Filter } from "lucide-react";

// =========================================================================
// TAHAP EDIT: GANTI TEKS & FOTO DI BAWAH INI DENGAN PUNYA KAMU SENDIRI
// =========================================================================
const DAFTAR_KEGIATAN = [
  {
    id: 1,
    judul: "Musrenbang Kecamatan Cibarusah dalam Rangka Penyusunan RKPD Tahun 2027",
    kategori: "pemerintahan",
    tanggal: "20 Mei 2026",
    lokasi: "Aula Kantor Kecamatan Cibarusah",
    deskripsi: "Pemerintah Kecamatan Cibarusah bersama Bappeda Kabupaten Bekasi menggelar Musyawarah Perencanaan Pembangunan (Musrenbang) dalam rangka penyusunan Rencana Kerja Pemerintah Daerah (RKPD) Tahun 2027. Kegiatan ini dihadiri oleh para pejabat kecamatan, tokoh masyarakat, dan perwakilan desa se-Kecamatan Cibarusah.",
    gambar: "/kegiatan/kegiatan1.jpeg"
  },
  {
    id: 2,
    judul: "Pengukuhan Paskibra Tingkat Kecamatan Cibarusah Tahun 2025",
    kategori: "pemuda",
    tanggal: "17 Agustus 2025",
    lokasi: "Lapangan Kantor Kecamatan Cibarusah",
    deskripsi: "Kecamatan Cibarusah menggelar upacara Pengukuhan Pasukan Pengibar Bendera (Paskibra) tingkat kecamatan tahun 2025. Para anggota Paskibra yang telah melalui seleksi dan pelatihan ketat dikukuhkan secara resmi untuk bertugas mengibarkan bendera Merah Putih dalam rangka peringatan Hari Kemerdekaan Republik Indonesia.",
    gambar: "/kegiatan/kegiatan2.jpeg"
  },
  {
    id: 3,
    judul: "PMI Kabupaten Bekasi: Donor Darah dan Cek Kesehatan Gratis di Kecamatan Cibarusah",
    kategori: "sosial",
    tanggal: "23 Agustus 2025",
    lokasi: "Kecamatan Cibarusah",
    deskripsi: "PMI Kabupaten Bekasi hadir kembali memberikan pelayanan donor darah dan pemeriksaan kesehatan gratis kepada masyarakat dalam program B-TRAM (Berkolaborasi Tanpa Batas) di Kecamatan Cibarusah. Kegiatan ini diikuti oleh ratusan warga dan bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya donor darah serta kesehatan.",
    gambar: "/kegiatan/kegiatan3.jpeg"
  },
  // Tambah kegiatan baru di sini dengan format yang sama
];
export default function KegiatanPage() {
  const [filterKategori, setFilterKategori] = useState<string>("semua");

  const kegiatanTersaring = filterKategori === "semua" 
    ? DAFTAR_KEGIATAN 
    : DAFTAR_KEGIATAN.filter(item => item.kategori === filterKategori);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-amber-600 font-medium mb-2 text-sm uppercase tracking-wider">
            <Tag size={16} />
            <span>Dokumentasi Milik Ilham</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Laporan Kegiatan Resmi
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl text-sm md:text-base">
            Arsip foto dan catatan kegiatan yang telah dilaksanakan di wilayah Kecamatan Cibarusah.
          </p>
        </div>

        {/* Tombol Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold uppercase tracking-wider px-2 border-r pr-4 hidden sm:flex">
            <Filter size={14} />
            <span>Filter:</span>
          </div>
          <button onClick={() => setFilterKategori("semua")} className={`px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${filterKategori === "semua" ? "bg-amber-500 text-white" : "bg-slate-50 text-slate-600"}`}>Semua</button>
          <button onClick={() => setFilterKategori("pemerintahan")} className={`px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${filterKategori === "pemerintahan" ? "bg-amber-500 text-white" : "bg-slate-50 text-slate-600"}`}>Pemerintahan</button>
          <button onClick={() => setFilterKategori("sosial")} className={`px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${filterKategori === "sosial" ? "bg-amber-500 text-white" : "bg-slate-50 text-slate-600"}`}>Sosial</button>
          <button onClick={() => setFilterKategori("pemuda")} className={`px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${filterKategori === "pemuda" ? "bg-amber-500 text-white" : "bg-slate-50 text-slate-600"}`}>Kepemudaan</button>
        </div>

        {/* Grid Kartu */}
        <div className="grid gap-6 sm:grid-cols-2">
          {kegiatanTersaring.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="h-48 w-full overflow-hidden relative bg-slate-100">
                <img src={item.gambar} alt={item.judul} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                  {item.kategori}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-medium mb-3">
                  <div className="flex items-center gap-1"><Calendar size={12} /><span>{item.tanggal}</span></div>
                  <div className="flex items-center gap-1"><MapPin size={12} /><span>{item.lokasi}</span></div>
                </div>
                <h2 className="text-lg font-bold text-slate-900 leading-snug mb-2">{item.judul}</h2>
                <p className="text-slate-600 text-xs leading-relaxed">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}