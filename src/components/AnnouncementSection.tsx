import Link from "next/link";
import { FileText, Clock, ArrowRight } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/data";

export default function AnnouncementSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 leading-tight">
              Pengumuman{" "}
              <span className="text-[#1B4F9B]">Resmi</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Dapatkan informasi resmi terkait administrasi, jadwal pelayanan,
              dan kebijakan terbaru dari Kecamatan Cibarusah.
            </p>

            {/* Office Hours Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#1B4F9B] font-semibold text-sm mb-2">
                <Clock size={16} />
                Layanan Terpadu
              </div>
              <p className="text-slate-500 text-sm">
                <span className="font-medium text-slate-700">Senin – Jumat:</span>{" "}
                08.00 – 16.00 WIB
              </p>
            </div>

            <Link
              href="/pengumuman"
              className="inline-flex items-center gap-2 mt-6 bg-[#1B4F9B] hover:bg-[#153D7A] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors group"
            >
              Semua Pengumuman
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Right: Announcement List */}
          <div className="lg:col-span-3 space-y-3">
            {ANNOUNCEMENTS.map((item) => (
              <Link
                key={item.id}
                href={`/pengumuman/${item.id}`}
                className="announcement-item flex items-start gap-4 bg-white border border-slate-200 border-l-4 border-l-slate-200 rounded-xl p-4 shadow-sm group block transition-all"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mt-0.5">
                  <FileText size={18} className="text-[#1B4F9B]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-xs text-slate-400 font-medium">
                      {item.date}
                    </span>
                    {item.tag && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${item.tagColor}`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-700 font-semibold text-sm leading-snug group-hover:text-[#1B4F9B] transition-colors">
                    {item.title}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-300 group-hover:text-[#1B4F9B] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
