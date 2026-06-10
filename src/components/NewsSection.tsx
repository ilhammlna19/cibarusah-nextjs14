import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { NEWS } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Kegiatan: "bg-blue-100 text-blue-700",
  Program: "bg-emerald-100 text-emerald-700",
  Sosial: "bg-rose-100 text-rose-700",
};

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
              Kegiatan Terbaru
            </h2>
            <p className="text-slate-500 text-sm">
              Liputan agenda pembangunan dan sosial di wilayah Cibarusah.
            </p>
          </div>
          <Link
            href="/kegiatan"
            className="hidden sm:flex items-center gap-1.5 text-[#1B4F9B] hover:text-[#153D7A] font-semibold text-sm transition-colors group"
          >
            Lihat Semua
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((item) => (
            <Link
              key={item.id}
              href={`/kegiatan/${item.id}`}
              className="news-card bg-white border border-slate-100 rounded-2xl overflow-hidden group block"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                    categoryColors[item.category] || "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-3">
                  <Calendar size={12} />
                  {item.date}
                </div>
                <h3 className="text-slate-800 font-bold text-base leading-snug mb-3 group-hover:text-[#1B4F9B] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#1B4F9B] text-sm font-semibold group-hover:gap-2 transition-all">
                  Baca Selengkapnya
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "Lihat Semua" */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-2 text-[#1B4F9B] font-semibold text-sm border border-[#1B4F9B] px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Lihat Semua Kegiatan
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
