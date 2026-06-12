import Link from "next/link";
import { ChevronRight, Bell, Calendar, FileText, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[620px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=800&fit=crop')"}}
      />
      <div className="absolute inset-0"
        style={{background: "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(27,79,155,0.85) 50%, rgba(13,59,122,0.80) 100%)"}}
      />
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px"}}
      />
      <div className="absolute right-8 top-16 hidden xl:flex flex-col gap-3">
        {[
          { icon: Bell, label: "Pengumuman Baru", value: "3 hari lalu", color: "bg-amber-500" },
          { icon: Calendar, label: "Kegiatan Bulan Ini", value: "12 Agenda", color: "bg-emerald-500" },
          { icon: FileText, label: "Layanan Aktif", value: "6 Layanan", color: "bg-blue-400" },
          { icon: Users, label: "Warga Terlayani", value: "94.200+", color: "bg-violet-500" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 w-56">
            <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <item.icon size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-xs">{item.label}</p>
              <p className="text-white font-bold text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
            Portal Resmi Kecamatan Cibarusah
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-tight mb-5">
            Sistem Informasi{" "}
            <span className="text-[#F59E0B]">Kegiatan</span>
            <br />
            <span className="text-[#F59E0B]">&</span> Pengumuman
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
            Pusat layanan digital dan transparansi informasi bagi seluruh warga
            Kecamatan Cibarusah. Melayani dengan integritas untuk kemajuan bersama.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/layanan"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5">
              Layanan Publik <ChevronRight size={18} />
            </Link>
            <Link href="/pengumuman"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Lihat Pengumuman
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/15">
            {[
              { value: "94.200+", label: "Warga" },
              { value: "6", label: "Layanan" },
              { value: "8", label: "Desa" },
              { value: "24/7", label: "Akses Digital" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-white font-bold text-2xl">{stat.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}