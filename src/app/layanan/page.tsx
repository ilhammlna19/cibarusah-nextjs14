import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, CheckCircle2, ArrowRight } from "lucide-react";

// Data Layanan Publik berdasarkan dokumen Laporan KKP Ilham Maulana
const DAFTAR_LAYANAN = [
  {
    id: 1,
    nama: "Pembuatan Kartu Tanda Penduduk (KTP Elektronik)",
    deskripsi: "Pelayanan perekaman data biometrik, pas foto, sidik jari, dan pencetakan kartu identitas resmi bagi warga Kecamatan Cibarusah.",
    syarat: [
      "Surat Pengantar dari RT/RW setempat",
      "Fotokopi Kartu Keluarga (KK) terbaru",
      "Sudah berusia 17 tahun atau sudah/pernah kawin"
    ],
    prosedur: "Pemohon membawa berkas persyaratan ke loket pelayanan umum kecamatan, melakukan antrean untuk perekaman biometrik (foto, retina, sidik jari), pemeriksaan data, dan menunggu proses penerbitan kartu dokumen resmi oleh dinas terkait."
  },
  {
    id: 2,
    nama: "Kartu Keluarga (KK) Baru / Perubahan Data",
    deskripsi: "Pelayanan penerbitan dokumen Kartu Keluarga baru karena faktor pernikahan, kelahiran anggota keluarga baru, pindah datang, maupun pembetulan elemen data.",
    syarat: [
      "Surat Pengantar dari Kantor Desa",
      "Dokumen Kartu Keluarga (KK) asli yang lama",
      "Fotokopi Akta Kelahiran atau Akta Nikah (jika ada penambahan/perubahan status)",
      "Surat Keterangan Pindah Datang (SKPWNI) bagi warga pendatang baru"
    ],
    prosedur: "Petugas loket memeriksa kelengkapan dokumen pendukung, menginput pembaharuan data ke dalam sistem SIAK terintegrasi, memproses validasi tanda tangan elektronik, dan mencetak dokumen KK baru."
  },
  {
    id: 3,
    nama: "Surat Keterangan Tidak Mampu (SKTM)",
    deskripsi: "Pelayanan dispensasi penerbitan surat keterangan resmi bagi warga kurang mampu untuk pemenuhan syarat jaminan kesehatan, beasiswa pendidikan, atau bantuan sosial.",
    syarat: [
      "Surat Pengantar RT/RW dan diketahui oleh Kantor Desa setempat",
      "Fotokopi KTP Elektronik dan Kartu Keluarga (KK) pemohon",
      "Surat pernyataan miskin tertulis bermaterai"
    ],
    prosedur: "Berkas diserahkan ke Seksi Kesejahteraan Sosial Kecamatan untuk proses verifikasi lapangan atau validasi basis data terpadu kependudukan, dilanjutkan dengan pencetakan lembar SKTM resmi yang disahkan oleh Camat."
  }
];

export default function LayananPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Menampilkan Navbar Utama */}
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        {/* Bagian Atas / Header Halaman */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3 text-amber-600 font-medium">
            <FileText size={22} />
            <span className="text-sm tracking-wider uppercase font-bold">Standard Operasional Prosedur</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Panduan Layanan Administrasi Publik
          </h1>
          <p className="mt-3 text-slate-600 text-base max-w-3xl leading-relaxed">
            Informasi transparan mengenai persyaratan dokumen, alur pendaftaran, dan prosedur pengajuan berbagai jenis dokumen kependudukan resmi di Kantor Kecamatan Cibarusah.
          </p>
        </div>

        {/* List / Grid Tampilan Layanan */}
        <div className="space-y-8">
          {DAFTAR_LAYANAN.map((layanan) => (
            <div 
              key={layanan.id} 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-200"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3 text-amber-600">
                {layanan.nama}
              </h2>
              <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
                {layanan.deskripsi}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Kolom Persyaratan */}
                <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                    📄 Persyaratan Dokumen:
                  </h3>
                  <ul className="space-y-2">
                    {layanan.syarat.map((syaratItem, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{syaratItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Kolom Alur Prosedur */}
                <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                      🔄 Alur & Prosedur Pengajuan:
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {layanan.prosedur}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                    <span>Estimasi Waktu: Kondisional</span>
                    <span className="font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Loket Umum</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Menampilkan Footer Utama */}
      <Footer />
    </div>
  );
}