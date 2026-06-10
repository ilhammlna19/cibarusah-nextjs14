"use client";

import React, { useState, useEffect } from "react";
import { Megaphone, Calendar, FileText, X, Search, Filter } from "lucide-react";

export default function PengumumanPage() {
  const [pengumumanTerpilih, setPengumumanTerpilih] = useState<any | null>(null);
  const [kataKunci, setKataKunci] = useState("");
  const [kategoriAktif, setKategoriAktif] = useState("SEMUA");
  const [daftarPengumuman, setDaftarPengumuman] = useState<any[]>([]);

  // KUNCI UTAMA: MEMBACA DATABASE YANG SAMA DENGAN ADMIN DASHBOARD
  useEffect(() => {
    const dbPengumuman = localStorage.getItem("db_pengumuman");
    if (dbPengumuman) {
      setDaftarPengumuman(JSON.parse(dbPengumuman));
    } else {
      // Data cadangan otomatis tahun 2026 jika database belum terisi dari admin
      const dataAwal = [
        {
          id: 1,
          judul: "Jadwal Pelayanan Keliling Adminduk Semester I Tersinkronisasi 2026",
          kategori: "PENTING",
          warnaKategori: "bg-red-100 text-red-800 border-red-200",
          tanggal: "15 Mei 2026",
          ringkasan: "Pelayanan administrasi kependudukan (KTP-el, KK, KIA) keliling akan dilaksanakan di 8 desa wilayah Kecamatan Cibarusah.",
          isiLengkap: "Dalam rangka meningkatkan cakupan kepemilikan dokumen kependudukan, Dinas Kependudukan dan Pencatatan Sipil Kabupaten Bekasi bekerja sama dengan Pemerintah Kecamatan Cibarusah mengadakan pelayanan jemput bola cetak dokumen langsung jadi di tiap balai desa..."
        }
      ];
      setDaftarPengumuman(dataAwal);
    }
  }, []);

  // FUNGSI PENCARIAN & FILTER KATEGORI (DIKLIK LANGSUNG RESPONS)
  const pengumumanTersaring = daftarPengumuman.filter((item) => {
    const cocokKataKunci = item.judul.toLowerCase().includes(kataKunci.toLowerCase()) || 
                           item.ringkasan.toLowerCase().includes(kataKunci.toLowerCase());
    const cocokKategori = kategoriAktif === "SEMUA" || item.kategori === kategoriAktif;
    return cocokKataKunci && cocokKategori;
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 text-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* HEADER HALAMAN */}
        <div className="mb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
            <Megaphone size={16} />
            <span>Portal Resmi Kecamatan Cibarusah</span>
          </div>
          <h1 className="text-3xl font-black text-slate-950 tracking-tight mb-2 sm:text-4xl">Pengumuman & Informasi Resmi</h1>
          <p className="text-slate-500 text-xs sm:text-sm">Pusat publikasi digital dinamis hasil input data panel kontrol admin.</p>
        </div>

        {/* KOLOM PENCARIAN & FILTER KATEGORI */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8 shadow-sm space-y-4">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
            <input 
              type="text"
              placeholder="Cari judul pengumuman yang ada di database..."
              value={kataKunci}
              onChange={(e) => setKataKunci(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
            {["SEMUA", "PENTING", "KEGIATAN", "LAYANAN"].map((kat) => (
              <button 
                key={kat} 
                onClick={() => setKategoriAktif(kat)} 
                className={`px-3.5 py-1.5 text-[11px] font-bold rounded-xl border transition-all cursor-pointer ${
                  kategoriAktif ===  kat 
                    ? "bg-amber-500 border-amber-500 text-white shadow-sm" 
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        {/* DAFTAR KARTU PENGUMUMAN */}
        <div className="space-y-4">
          {pengumumanTersaring.length > 0 ? (
            pengumumanTersaring.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm border-l-4 border-l-amber-500 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[9px] font-extrabold tracking-wider px-2 py-0.5 rounded border uppercase ${item.warnaKategori || "bg-slate-100 text-slate-700"}`}>
                    {item.kategori}
                  </span>
                  <span className="text-slate-400 text-[11px] font-medium flex items-center gap-1">
                    <Calendar size={12} /> {item.tanggal}
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">{item.judul}</h2>
                <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">{item.ringkasan}</p>
                <button 
                  onClick={() => setPengumumanTerpilih(item)} 
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <FileText size={14} /> Baca Detail Lengkap →
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <p className="text-slate-400 text-xs sm:text-sm font-medium">Tidak ada data pengumuman yang cocok dengan pencarian kamu, Ham.</p>
            </div>
          )}
        </div>

        {/* MODAL POPUP JIKA TOMBOL DETAIL DIKLIK */}
        {pengumumanTerpilih && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col border border-slate-100">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded border uppercase ${pengumumanTerpilih.warnaKategori || "bg-slate-100 text-slate-700"}`}>
                  {pengumumanTerpilih.kategori}
                </span>
                <button 
                  onClick={() => setPengumumanTerpilih(null)} 
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-xl transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 overflow-y-auto space-y-4">
                <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight leading-snug">{pengumumanTerpilih.judul}</h3>
                <p className="text-slate-400 text-[11px] font-semibold flex items-center gap-1 pb-3 border-b border-slate-100">
                  <Calendar size={12} /> Tanggal Rilis: {pengumumanTerpilih.tanggal}
                </p>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                  {pengumumanTerpilih.isiLengkap}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}