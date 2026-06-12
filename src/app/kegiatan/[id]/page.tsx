import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
// 1. Import data pusat NEWS kamu
import { NEWS } from "@/lib/data"; 

export default function DetailKegiatanPage({ params }: { params: { id: string } }) {
  
  // 2. Cari data berita yang ID-nya cocok dengan yang diklik user
const detailBerita = NEWS.find((item) => item.id === Number(params.id));
  // 3. Jika data tidak ditemukan, tampilkan pesan peringatan
  if (!detailBerita) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="pt-32 text-center">
          <h2 className="text-xl font-bold text-slate-800">Maaf, data kegiatan tidak ditemukan.</h2>
          <Link href="/" className="text-blue-600 font-semibold mt-4 inline-block">Kembali ke Beranda</Link>
        </div>
      </main>
    );
  }

  // 4. Jika data ketemu, tampilkan data aslinya di bawah ini
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-24 pb-16 max-w-4xl mx-auto px-4">
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B4F9B] hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>

        {/* Konten Utama Box */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-full uppercase">
            {detailBerita.category}
          </span>
          
          {/* Judul Asli */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 mb-3 leading-tight">
            {detailBerita.title}
          </h1>

          {/* Tanggal Asli */}
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-6">
            <Calendar size={12} /> {detailBerita.date}
          </div>

          {/* Gambar Asli Berita */}
          <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-2xl mb-6 shadow-sm">
            <img 
              src={detailBerita.image} 
              alt={detailBerita.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Deskripsi/Isi Berita Lengkap */}
          <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
            {detailBerita.excerpt} Bagian ini menampilkan isi konten lengkap mengenai liputan acara {detailBerita.title} yang diselenggarakan di wilayah Kecamatan Cibarusah secara mendetail.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}