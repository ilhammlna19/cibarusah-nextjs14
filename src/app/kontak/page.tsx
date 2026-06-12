"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontakPage() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [subjek, setSubjek] = useState("");
  const [pesan, setPesan] = useState("");
  const [sedangMemuat, setSedangMemuat] = useState(false);
  const [berhasilKirim, setBerhasilKirim] = useState(false);
  const [errorForm, setErrorForm] = useState("");

  const tanganiKirimPesan = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorForm("");
    if (!nama || !email || !subjek || !pesan) {
      setErrorForm("Semua kolom formulir wajib diisi dengan lengkap!");
      return;
    }
    setSedangMemuat(true);
    setTimeout(() => {
      setSedangMemuat(false);
      setBerhasilKirim(true);
      setNama(""); setEmail(""); setSubjek(""); setPesan("");
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-black text-slate-950 tracking-tight sm:text-4xl mb-3">
              Hubungi Kami & Layanan Pengaduan
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Silakan hubungi kontak resmi atau isi formulir di bawah untuk menyampaikan aspirasi, aduan masyarakat, maupun pertanyaan seputar layanan Kecamatan Cibarusah.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4 lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <Clock className="text-amber-500" size={20} />
                  Informasi Kontak
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-xl border border-amber-100 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Alamat Kantor</h3>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-0.5">
                        Jl. Raya Cibarusah No.1, Kec. Cibarusah, Kabupaten Bekasi, Jawa Barat 17340
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-xl border border-amber-100 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telepon</h3>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-0.5">
                        0853-6952-4643
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-xl border border-amber-100 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Surel Resmi</h3>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-0.5">
                        cibarusahkecamatan@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Formulir Aspirasi & Aduan Warga</h2>
                <p className="text-slate-500 text-xs sm:text-sm mb-6">Identitas pelapor dijamin kerahasiaannya oleh pihak administrasi kecamatan.</p>

                {berhasilKirim && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-800">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Aduan Berhasil Dikirim!</p>
                      <p className="text-emerald-600/90 mt-0.5">Terima kasih atas laporan Anda.</p>
                    </div>
                  </div>
                )}

                {errorForm && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-xs sm:text-sm font-medium">{errorForm}</p>
                  </div>
                )}

                <form onSubmit={tanganiKirimPesan} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nama Lengkap</label>
                      <input type="text" value={nama} onChange={(e) => setNama(e.target.value)}
                        placeholder="Masukkan nama Anda..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-slate-900" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="contoh@email.com..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-slate-900" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Topik / Subjek Aduan</label>
                    <input type="text" value={subjek} onChange={(e) => setSubjek(e.target.value)}
                      placeholder="Contoh: Keluhan Infrastruktur Jalan, Pelayanan KTP, dll..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-slate-900" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Detail Laporan Aduan</label>
                    <textarea rows={4} value={pesan} onChange={(e) => setPesan(e.target.value)}
                      placeholder="Tuliskan laporan aduan atau aspirasi Anda secara kronologis dan jelas..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-slate-900 resize-none">
                    </textarea>
                  </div>
                  <button type="submit" disabled={sedangMemuat}
                    className={`w-full sm:w-auto px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      sedangMemuat ? "bg-slate-300 text-slate-500 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 text-white"
                    }`}>
                    <Send size={14} className={sedangMemuat ? "animate-pulse" : ""} />
                    <span>{sedangMemuat ? "Sedang Mengirim..." : "Kirim Pengaduan Warga"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}