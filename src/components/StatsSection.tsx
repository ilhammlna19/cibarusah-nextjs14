import { Users, CheckCircle, Store, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "94.200+",
    label: "Jumlah Penduduk",
    iconColor: "text-[#1B4F9B]",
    bgColor: "bg-blue-50",
  },
  {
    icon: CheckCircle,
    value: "12.450",
    label: "Layanan Selesai",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Store,
    value: "850+",
    label: "Pelaku UMKM",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: GraduationCap,
    value: "45",
    label: "Sekolah & Institusi",
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-xl mb-4`}
                >
                  <Icon size={24} className={stat.iconColor} />
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
