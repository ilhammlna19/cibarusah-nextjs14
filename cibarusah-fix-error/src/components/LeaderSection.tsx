"use client";

import { LEADER } from "@/lib/data";

export default function LeaderSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F9B] to-[#153D7A]" />
              <img
                src={LEADER.photo}
                alt={`${LEADER.title} - ${LEADER.name}`}
                className="relative w-full h-80 object-cover object-top"
                
              />
              <div className="relative bg-gradient-to-r from-[#1B4F9B] to-[#153D7A] px-6 py-4">
                <p className="text-white font-bold text-lg">{LEADER.name}</p>
                <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mt-0.5">
                  {LEADER.title}
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#1B4F9B]/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F59E0B]/10 rounded-2xl -z-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B4F9B] bg-blue-50 px-3 py-1 rounded-full">
              Sambutan Pimpinan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-4 mb-6 leading-tight">
              Membangun Cibarusah yang Lebih Maju, Berdaya Saing, dan Transparan
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {LEADER.greeting.map((paragraph, index) => (
                <p key={index}>
                  {index < 2 ? `\u201c${paragraph}\u201d` : paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-slate-400 italic text-sm">{`\u2014 ${LEADER.motto}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
