import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[580px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1600&h=800&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full animate-pulse" />
            Portal Resmi Kecamatan Cibarusah
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-4">
            Sistem Informasi{" "}
            <span className="text-[#F59E0B]">Kegiatan &</span>
            <br />
            Pengumuman
          </h1>

          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Pusat layanan digital dan transparansi informasi bagi seluruh warga
            Kecamatan Cibarusah. Melayani dengan integritas untuk kemajuan
            bersama.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 bg-[#1B4F9B] hover:bg-[#153D7A] text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-900/30"
            >
              Layanan Publik
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/pengumuman"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Lihat Pengumuman
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
