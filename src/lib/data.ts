// src/lib/data.ts
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Profil Kecamatan", href: "/profil" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export const LEADER = {
  name: "Drs. Ruslan Abdulgani",
  title: "Camat Cibarusah",
  photo: "/images/camat.jpg",
  greeting: [
    "Assalamualaikum Warahmatullahi Wabarakatuh. Selamat datang di portal resmi Kecamatan Cibarusah. Melalui platform digital ini, kami berkomitmen untuk menghadirkan keterbukaan informasi publik dan kemudahan akses layanan bagi seluruh elemen masyarakat.",
    "Kami percaya bahwa sinergi antara pemerintah dan warga adalah kunci utama pembangunan. Dengan semangat gotong royong dan integritas, mari kita bersama-sama mewujudkan Kecamatan Cibarusah sebagai wilayah yang unggul di Kabupaten Bekasi.",
    "Terima kasih atas kunjungan Anda, semoga informasi yang kami sediakan dapat bermanfaat untuk kemajuan kita semua.",
  ],
  motto: "Melayani Dengan Hati",
};

export const STATS = [
  { icon: "users",          value: "94.200+", label: "Jumlah Penduduk",     color: "#1B4F9B" },
  { icon: "check-circle",   value: "12.450",  label: "Layanan Selesai",     color: "#10B981" },
  { icon: "store",          value: "850+",    label: "Pelaku UMKM",         color: "#F59E0B" },
  { icon: "graduation-cap", value: "45",      label: "Sekolah & Institusi", color: "#8B5CF6" },
];

export const NEWS = [
  {
    id: 1,
    date: "20 Mei 2026",
    title: "Musrenbang Kecamatan Cibarusah dalam Rangka Penyusunan RKPD Tahun 2027",
    excerpt: "Pemerintah Kecamatan Cibarusah bersama Bappeda Kabupaten Bekasi menggelar Musyawarah Perencanaan Pembangunan (Musrenbang) dalam rangka penyusunan RKPD Tahun 2027.",
    category: "Kegiatan",
    image: "/kegiatan/kegiatan1.jpeg",
  },
  {
    id: 2,
    date: "17 Agustus 2025",
    title: "Pengukuhan Paskibra Tingkat Kecamatan Cibarusah Tahun 2025",
    excerpt: "Kecamatan Cibarusah menggelar upacara Pengukuhan Pasukan Pengibar Bendera (Paskibra) tingkat kecamatan tahun 2025 yang telah melalui seleksi dan pelatihan ketat.",
    category: "Kegiatan",
    image: "/kegiatan/kegiatan2.jpeg",
  },
  {
    id: 3,
    date: "23 Agustus 2025",
    title: "PMI Kabupaten Bekasi: Donor Darah dan Cek Kesehatan Gratis di Kecamatan Cibarusah",
    excerpt: "PMI Kabupaten Bekasi hadir memberikan pelayanan donor darah dan pemeriksaan kesehatan gratis kepada masyarakat dalam program B-TRAM di Kecamatan Cibarusah.",
    category: "Sosial",
    image: "/kegiatan/kegiatan3.jpeg",
  },
];

export const ANNOUNCEMENTS = [
  {
    id: 1,
    date: "15 Mei 2024",
    title: "Jadwal Pelayanan Keliling Adminduk Semester II Tahun 2024",
    tag: "PENTING",
    tagColor: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    date: "12 Mei 2024",
    title: "Pengumuman Seleksi Calon Anggota Karang Taruna Tingkat Kecamatan",
    tag: null,
    tagColor: null,
  },
  {
    id: 3,
    date: "05 Mei 2024",
    title: "Syarat dan Ketentuan Pengajuan IMB Melalui Sistem OSS Terbaru",
    tag: null,
    tagColor: null,
  },
];

export const OFFICE_INFO = {
  address: "Jl. Raya Cibarusah No. 1, Bekasi, Jawa Barat 17340",
  phone: "(021) 8999-XXXX",
  email: "info@cibarusah.go.id",
  hours: {
    weekday: "Senin – Jumat",
    time: "08.00 – 16.00 WIB",
  },
  maps_url: "https://maps.google.com/?q=Kecamatan+Cibarusah+Bekasi",
  social: {
    facebook: "https://facebook.com/kecamatancibarusah",
    instagram: "https://instagram.com/kec.cibarusah",
  },
};

export const FOOTER_LINKS = {
  quick: [
    { label: "Sejarah", href: "/profil/sejarah" },
    { label: "Visi & Misi", href: "/profil/visi-misi" },
    { label: "Struktur Organisasi", href: "/profil/struktur" },
  ],
  services: [
    { label: "Layanan Publik", href: "/layanan" },
    { label: "Peta Wilayah", href: "/peta" },
    { label: "Hubungi Kami", href: "/kontak" },
  ],
};

export const VISI_MISI = {
  visi: "Terwujudnya Kecamatan Cibarusah yang Maju, Mandiri, dan Sejahtera Berbasis Pelayanan Prima.",
  misi: [
    "Meningkatkan kualitas pelayanan publik yang cepat, tepat, dan transparan.",
    "Mendorong pertumbuhan ekonomi masyarakat melalui pemberdayaan UMKM dan koperasi.",
    "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan kesehatan.",
    "Mewujudkan tata kelola pemerintahan yang bersih dan akuntabel.",
    "Meningkatkan infrastruktur dan lingkungan hidup yang berkelanjutan.",
  ],
};

export const VILLAGES = [
  { name: "Desa Cibarusah Jaya", head: "H. Ahmad Fauzi",     population: 12400 },
  { name: "Desa Cibarusah Kota", head: "Sudirman, S.Sos",    population: 11800 },
  { name: "Desa Ridogalih",      head: "Drs. Hendra Wijaya", population: 9600  },
  { name: "Desa Ridomanah",      head: "Siti Rohmah, S.Pd",  population: 8900  },
  { name: "Desa Sirnajati",      head: "Asep Kurniawan",     population: 10200 },
  { name: "Desa Sindangmulya",   head: "Rudi Hartono, S.E",  population: 7800  },
  { name: "Desa Wibawamulya",    head: "Hj. Nurhayati",      population: 13200 },
  { name: "Desa Nagacipta",      head: "Budi Santoso, S.H",  population: 9300  },
];