"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LEADER, VISI_MISI, VILLAGES } from "@/lib/data";
import { CheckCircle, Users, MapPin } from "lucide-react";

export default function ProfilPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-[#1B4F9B] to-[#153D7A] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Profil Kecamatan</h1>
            <p className="text-blue-200">Mengenal lebih dekat Kecamatan Cibarusah</p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100">
              Pimpinan Kecamatan
            </h2>
            <div className="flex items-center gap-6">
              <img
                src={LEADER.photo}
                alt={LEADER.name}
                className="w-24 h-24 rounded-2xl object-cover shadow-md"
                
              />
              <div>
                <p className="text-xl font-bold text-slate-800">{LEADER.name}</p>
                <p className="text-[#1B4F9B] font-semibold text-sm uppercase tracking-widest mt-1">
                  {LEADER.title}
                </p>
                <p className="text-slate-500 text-sm italic mt-1">{LEADER.motto}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-200">
              Visi & Misi
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1B4F9B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  Visi
                </div>
                <p className="text-slate-700 text-lg font-semibold leading-relaxed">
                  {VISI_MISI.visi}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  Misi
                </div>
                <ul className="space-y-3">
                  {VISI_MISI.misi.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#1B4F9B] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Desa & Kelurahan</h2>
            <p className="text-slate-500 text-sm mb-8">
              Kecamatan Cibarusah terdiri dari {VILLAGES.length} desa/kelurahan
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {VILLAGES.map((village, index) => (
                <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-[#1B4F9B]/30 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-[#1B4F9B]" />
                    <p className="font-bold text-slate-800 text-sm">{village.name}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                    <Users size={12} />
                    <span>{village.population.toLocaleString("id-ID")} jiwa</span>
                  </div>
                  <p className="text-slate-400 text-xs">Kades: {village.head}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
