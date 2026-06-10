"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Megaphone, ShieldCheck, Trash2, Users, MessageSquare, LogOut } from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [menuAktif, setMenuAktif] = useState("dashboard");

  // DATABASE STATE
  const [dataPengumuman, setDataPengumuman] = useState<any[]>([]);
  const [inputJudul, setInputJudul] = useState("");
  const [inputKategori, setInputKategori] = useState("PENTING");
  const [inputRingkasan, setInputRingkasan] = useState("");
  const [inputIsiLengkap, setInputIsiLengkap] = useState("");

  // SENSOR VALIDASI - HANYA BERJALAN 1 KALI SAAT HALAMAN DI-LOAD (ANTI-FREEZE)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const statusLogin = localStorage.getItem("isLoggedIn");
      
      if (statusLogin !== "true") {
        alert("Akses ditolak! Silakan login terlebih dahulu, Ham.");
        router.push("/admin/login");
      } else {
        setIsVerified(true); // Kunci layar terbuka aman
      }

      // Load data pengumuman
      const dbPengumuman = localStorage.getItem("db_pengumuman");
      if (dbPengumuman) {
        setDataPengumuman(JSON.parse(dbPengumuman));
      }
    }
  }, [router]);

  // FUNGSI LOGOUT (KELUAR SISTEM)
  const tanganiLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Hapus kunci akses
    alert("Berhasil keluar dari sistem admin.");
    router.push("/admin/login");
  };

  const tanganiTambah = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputJudul || !inputRingkasan || !inputIsiLengkap) {
      alert("Semua kolom wajib diisi, Ham!");
      return;
    }

    const warna = inputKategori === "PENTING" ? "bg-red-100 text-red-800 border-red-200" :
                  inputKategori === "KEGIATAN" ? "bg-blue-100 text-blue-800 border-blue-200" : 
                  "bg-amber-100 text-amber-800 border-amber-200";

    const dataBaru = {
      id: Date.now(),
      judul: inputJudul,
      kategori: inputKategori,
      warnaKategori: warna,
      tanggal: "20 Mei 2026",
      ringkasan: inputRingkasan,
      isiLengkap: inputIsiLengkap
    };

    const updateData = [dataBaru, ...dataPengumuman];
    setDataPengumuman(updateData);
    localStorage.setItem("db_pengumuman", JSON.stringify(updateData));

    setInputJudul("");
    setInputRingkasan("");
    setInputIsiLengkap("");
    alert("Sukses tersimpan ke database!");
  };

  const tanganiHapus = (id: number) => {
    const sisaData = dataPengumuman.filter(item => item.id !== id);
    setDataPengumuman(sisaData);
    localStorage.setItem("db_pengumuman", JSON.stringify(sisaData));
  };

  // Jika belum lolos sensor login, tampilkan layar kosong sebentar (Mencegah kedipan data)
  if (!isVerified) return <div className="min-h-screen bg-slate-900 text-white p-6 text-xs">Memeriksa otoritas admin...</div>;

  return (
    <div className="min-h-screen bg-slate-100 flex text-slate-900 selection:bg-amber-500 selection:text-white">
      
      {/* SIDEBAR KIRI */}
      <div className="w-64 bg-slate-900 text-slate-400 p-5 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 text-white border-b border-slate-800 pb-4">
            <ShieldCheck className="text-amber-500" size={24} />
            <div>
              <h2 className="font-black text-sm tracking-tight text-slate-100">CMS CIBARUSAH</h2>
              <p className="text-[10px] text-emerald-400 font-bold">🟢 Secure Session Active</p>
            </div>
          </div>

          <div className="space-y-1">
            <button 
              type="button"
              onClick={() => setMenuAktif("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                menuAktif === "dashboard" ? "bg-amber-500 text-white" : "hover:bg-slate-800 text-slate-400 hover:text-slate-100"
              }`}
            >
              <LayoutDashboard size={16} /> <span>Dashboard Utama</span>
            </button>

            <button 
              type="button"
              onClick={() => setMenuAktif("pengumuman")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                menuAktif === "pengumuman" ? "bg-amber-500 text-white" : "hover:bg-slate-800 text-slate-400 hover:text-slate-100"
              }`}
            >
              <Megaphone size={16} /> <span>Kelola Pengumuman</span>
            </button>
          </div>
        </div>

        {/* TOMBOL KELUAR SISTEM (LOGOUT) */}
        <button 
          type="button"
          onClick={tanganiLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer border border-dashed border-red-500/20"
        >
          <LogOut size={16} /> <span>Keluar Sistem</span>
        </button>
      </div>

      {/* KONTEN KANAN */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h1 className="text-xl font-black text-slate-900">Panel Kontrol Utama</h1>
          <p className="text-xs text-slate-500">Sistem terproteksi username & password.</p>
        </div>

        {/* HALAMAN DASHBOARD UTAMA */}
        {menuAktif === "dashboard" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 border border-slate-200 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Pengumuman</p>
                  <h3 className="text-xl font-black text-slate-900 mt-1">{dataPengumuman.length} Data</h3>
                </div>
                <div className="p-3 bg-amber-50 text-amber-500 rounded-xl"><Megaphone size={18} /></div>
              </div>
              <div className="bg-white p-5 border border-slate-200 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Laporan Aduan</p>
                  <h3 className="text-xl font-black text-slate-900 mt-1">12 Laporan</h3>
                </div>
                <div className="p-3 bg-slate-50 text-slate-500 rounded-xl"><MessageSquare size={18} /></div>
              </div>
              <div className="bg-white p-5 border border-slate-200 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Otoritas</p>
                  <h3 className="text-xs font-bold text-emerald-600 mt-2">Admin Terverifikasi</h3>
                </div>
                <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl"><Users size={18} /></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">Log Real-Time Database Browser:</h3>
              <div className="space-y-2">
                {dataPengumuman.map((item, i) => (
                  <div key={item.id} className="text-xs bg-slate-50 p-3 border border-slate-100 rounded-xl flex justify-between">
                    <span>{i + 1}. <strong>[{item.kategori}]</strong> {item.judul}</span>
                    <span className="text-slate-400">{item.tanggal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* HALAMAN KELOLA PENGUMUMAN */}
        {menuAktif === "pengumuman" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-max">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Input Data Baru</h3>
              <form onSubmit={tanganiTambah} className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">KATEGORI</label>
                  <select value={inputKategori} onChange={(e) => setInputKategori(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-xl text-xs font-semibold">
                    <option value="PENTING">PENTING</option>
                    <option value="KEGIATAN">KEGIATAN</option>
                    <option value="LAYANAN">LAYANAN</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">JUDUL INFORMATION</label>
                  <input type="text" value={inputJudul} onChange={(e) => setInputJudul(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-xl text-xs text-slate-900" placeholder="Ketik judul..." />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">RINGKASAN</label>
                  <input type="text" value={inputRingkasan} onChange={(e) => setInputRingkasan(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-xl text-xs text-slate-900" placeholder="Ketik ringkasan..." />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">ISI LENGKAP</label>
                  <textarea rows={3} value={inputIsiLengkap} onChange={(e) => setInputIsiLengkap(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-xl text-xs text-slate-900 resize-none" placeholder="Ketik narasi lengkap..."></textarea>
                </div>
                <button type="submit" className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase rounded-xl transition-all cursor-pointer">Simpan Ke Database</button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Isi Records Database</h3>
              <div className="space-y-3">
                {dataPengumuman.map((item) => (
                  <div key={item.id} className="p-3 bg-slate-50 border rounded-xl flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 bg-white border rounded uppercase">{item.kategori}</span>
                      <h4 className="text-xs font-bold text-slate-900 mt-1">{item.judul}</h4>
                      <p className="text-[11px] text-slate-500">{item.ringkasan}</p>
                    </div>
                    <button type="button" onClick={() => tanganiHapus(item.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}