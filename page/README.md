# Kecamatan Cibarusah - Website Resmi

Website resmi Kecamatan Cibarusah dibuat dengan **Next.js 14**, **TypeScript**, dan **Tailwind CSS**.

## 🚀 Cara Menjalankan di VS Code

### Prasyarat
- Node.js versi 18.17 atau lebih baru
- npm atau yarn

### Instalasi

1. **Buka folder project di VS Code**
   ```bash
   code cibarusah-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser** dan akses `http://localhost:3000`

---

## 📁 Struktur Project

```
cibarusah-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Halaman utama (Home)
│   │   ├── globals.css         # Global styles
│   │   ├── kegiatan/
│   │   │   └── page.tsx        # Halaman semua kegiatan
│   │   ├── pengumuman/
│   │   │   └── page.tsx        # Halaman pengumuman
│   │   ├── kontak/
│   │   │   └── page.tsx        # Halaman kontak
│   │   └── admin/
│   │       └── login/
│   │           └── page.tsx    # Login admin
│   ├── components/
│   │   ├── Navbar.tsx          # Navigasi (sticky, responsive)
│   │   ├── HeroSection.tsx     # Banner utama
│   │   ├── LeaderSection.tsx   # Sambutan Camat
│   │   ├── StatsSection.tsx    # Statistik kecamatan
│   │   ├── NewsSection.tsx     # Kegiatan terbaru
│   │   ├── AnnouncementSection.tsx  # Pengumuman resmi
│   │   └── Footer.tsx          # Footer
│   └── lib/
│       └── data.ts             # Data & konstanta
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## ✨ Fitur

- ✅ **Next.js 14** dengan App Router
- ✅ **TypeScript** untuk type safety
- ✅ **Tailwind CSS** untuk styling
- ✅ **Responsive** (Mobile, Tablet, Desktop)
- ✅ **Navbar sticky** dengan animasi scroll
- ✅ **Mobile menu** hamburger
- ✅ Halaman: Home, Kegiatan, Pengumuman, Kontak, Login Admin
- ✅ Komponen modular dan reusable

---

## 🛠 Perintah Berguna

```bash
# Development
npm run dev

# Build production
npm run build

# Jalankan production build
npm start

# Cek lint
npm run lint
```

---

## 🎨 Warna Brand

| Nama | Hex |
|------|-----|
| Primary Blue | `#1B4F9B` |
| Primary Dark | `#153D7A` |
| Accent Gold | `#F59E0B` |

---

## 📞 Kontak Pengembang

Untuk pertanyaan teknis atau pengembangan lebih lanjut, hubungi tim IT Kecamatan Cibarusah.
