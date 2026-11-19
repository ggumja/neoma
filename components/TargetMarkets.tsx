"use client";

import React from "react";
import {
  Cog,
  Store,
  Layers,
  Building,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function TargetMarkets() {
  const industries = [
    {
      id: "01",
      icon: Cog,
      title: "장비 기반 전용 소모품",
      desc: "의료·산업 장비 이력 연동 및 정기공급",
      tag: "소모품 정기발주",
      color: "text-blue-600",
      bg: "bg-blue-50/70",
      border: "border-blue-100",
    },
    {
      id: "02",
      icon: Store,
      title: "프랜차이즈 본사·지사 물류",
      desc: "가맹점 전용 폐쇄몰 및 무통장 자동 매칭",
      tag: "가맹점 폐쇄몰",
      color: "text-emerald-600",
      bg: "bg-emerald-50/70",
      border: "border-emerald-100",
    },
    {
      id: "03",
      icon: Layers,
      title: "제조·수입사 대리점 발주망",
      desc: "ERP 무중단 연동 및 등급별 차등 단가",
      tag: "대리점망 ERP 연동",
      color: "text-blue-600",
      bg: "bg-blue-50/70",
      border: "border-blue-100",
    },
    {
      id: "04",
      icon: Building,
      title: "MRO · 건축·산업자재 유통",
      desc: "법인카드 분할결제 및 공정별 분할배송",
      tag: "고액 분할결제",
      color: "text-indigo-600",
      bg: "bg-indigo-50/70",
      border: "border-indigo-100",
    },
    {
      id: "05",
      icon: Sparkles,
      title: "뷰티·에스테틱·동물병원",
      desc: "서류 심사 폐쇄형 승인제 및 소모품 통제",
      tag: "사업자 승인제",
      color: "text-purple-600",
      bg: "bg-purple-50/70",
      border: "border-purple-100",
    },
    {
      id: "06",
      icon: ShoppingBag,
      title: "식자재·오피스 정기공급",
      desc: "주기별 자동 빌링 및 24/7 자동화 운영",
      tag: "자동 빌링/배송",
      color: "text-teal-600",
      bg: "bg-teal-50/70",
      border: "border-teal-100",
    },
  ];

  return (
    <section id="targets" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background dots */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            다양한 B2B 산업을 아우르는{" "}
            <span className="text-slate-500">6대 핵심 적용 분야</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal pt-2">
            업종별로 서로 다른 거래 관행과 결제·물류 규칙을 유연하게 수용하는 맞춤형 아키텍처를 제공합니다.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition group relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 font-mono tracking-wider">
                    TARGET {item.id}
                  </span>
                </div>

                <div className="inline-block mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>자세히 보기</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner (Dark Navy) */}
        <div
          className="mt-12 rounded-2xl bg-[#0F172A] p-6 sm:p-8 text-center text-white shadow-xl relative overflow-hidden border border-slate-800"
        >
          <div className="absolute inset-0 bg-dot-pattern-dark opacity-30 pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                귀사의 B2B 유통 구조에 맞춘 전용 플랫폼
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                기존 ERP 환경과 결제 규칙을 변경하지 않고, NEXUS 어댑터를 통해 원클릭으로 결합됩니다.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition shrink-0"
            >
              <span>맞춤형 PoC 문의하기</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
