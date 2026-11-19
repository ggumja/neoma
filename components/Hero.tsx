"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  CreditCard,
  RefreshCw,
  Truck,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Building2,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const coreFeatures = [
    {
      icon: Database,
      title: "무중단 ERP / SAP 연동",
      desc: "실시간 ERP 연동 및 데이터 동기화",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: CreditCard,
      title: "복수 법인카드 분할결제",
      desc: "고액 거래를 위한 분할 및 선결제 지원",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: RefreshCw,
      title: "정기공급 & 자동 빌링",
      desc: "소모품 정기 발주 및 자동 결제 엔진",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
    },
    {
      icon: Truck,
      title: "지능형 분할배송 & 대리주문",
      desc: "다회 분할 출고 및 영업사원 대리 발주",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -ml-20" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0F172A] text-white shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                ENTERPRISE B2B SOLUTION
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                Built for Enterprise. Designed for B2B.
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.18] text-[#0F172A]">
                복잡한 기업간 거래 관행을 <br />
                <span className="text-[#2563EB] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  완벽한 디지털로 통합
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium pt-2">
                제조사·유통사를 위한 검증된 차세대 B2B 커머스 플랫폼
              </p>
            </div>

            {/* Core 4 Feature Cards (Manage. Integrate. Grow.) */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Manage. Integrate. Grow.
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coreFeatures.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition group flex items-start gap-3"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition transform hover:-translate-y-0.5"
              >
                <span>라이브 데모 & PoC 신청</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-base border border-slate-300/80 shadow-sm transition"
              >
                <span>도입 효과 살펴보기</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Metallic Cube Visual Matrix & Dark Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-200 via-slate-100 to-white shadow-2xl border border-slate-200/80">
                <div className="relative overflow-hidden rounded-2xl bg-[#0B1120] aspect-[4/4.2] flex items-center justify-center">
                  {/* Background Glow inside visual card */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/30 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-emerald-500/25 rounded-full blur-2xl" />

                  {/* High Quality Cube Graphic */}
                  <Image
                    src="/slides/hero-cube.jpg"
                    alt="NEXUS B2B Enterprise Solutions 3D Matrix"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Corner Accent Overlay */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE READY
                  </div>
                </div>
              </div>

              {/* Bottom Dark Navy Conversion Banner */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 rounded-2xl bg-[#0F172A] p-5 text-white border border-slate-800 shadow-xl relative overflow-hidden"
              >
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      아직도 전화와 엑셀로 거래하시나요?
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      이제 NEXUS B2B와 함께 기업간 거래를 자동화하세요.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-colors shrink-0 self-start sm:self-auto"
                  >
                    <span>라이브 데모 & PoC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
