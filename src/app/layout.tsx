import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Kecamatan Cibarusah - Sistem Informasi Kegiatan & Pengumuman",
  description:
    "Pusat layanan digital dan transparansi informasi bagi seluruh warga Kecamatan Cibarusah. Melayani dengan integritas untuk kemajuan bersama.",
  keywords: "Cibarusah, Kecamatan, Bekasi, Jawa Barat, Layanan Publik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
