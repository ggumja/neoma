"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  FileCheck2,
  TrendingUp,
  UserCheck,
  Scale,
  ThumbsUp,
  Sparkles,
} from "lucide-react";

export default function ProvenResults() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const kpis = [
    {
      label: "주문 처리 소요시간",
      val: "0분",
      sub: "건당 25분 수기 → 실시간 자동화",
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "발주 데이터 오기율",
      val: "0.0%",
      sub: "기존 4.8% → 오주문·오배송 근절",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "무통장 입금 매칭",
      val: "3초",
      sub: "일 2시간 수기 → 엑셀 원클릭 매칭",
      icon: FileCheck2,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "정기공급 고객 LTV",
      val: "+38%",
      sub: "고정 정기 매출(MRR) 42% 성장 기여",
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const innovations = [
    {
      icon: UserCheck,
      title: "영업 조직 생산성 극대화",
      desc: "단순 발주·입금 확인 리소스 80% 이상 절감, 신규 개척 및 바이어 케어 집중",
    },
    {
      icon: Scale,
      title: "회계·물류 정합성 100% 달성",
      desc: "결제-ERP-로젠 송장 무중단 단절 없는 연동으로 월말 결산 및 재고 오차 제로",
    },
    {
      icon: ThumbsUp,
      title: "바이어 만족도 96.4점 기록",
      desc: "모바일 24시간 실시간 발주, 법인카드 분할결제 및 배송 추적으로 고객 이탈 방지",
    },
  ];

  return (
    <section id="results" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            04. 도입 효과 및 기대 성과
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            숫자로 검증된{" "}
            <span className="text-blue-600">B2B 디지털 전환 도입효과</span>
          </h2>

          <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mt-2" />

          <p className="text-slate-600 text-sm sm:text-base font-normal pt-2">
            단순한 쇼핑몰 구축을 넘어, 영업과 재경, 물류 부서의 수기 업무 비용을 혁신적으로 제거합니다.
          </p>
        </div>

        {/* 4 Quantitative KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-2 rounded-xl ${kpi.bg} ${kpi.color}`}>
                    <kpi.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{kpi.label}</span>
                </div>

                <div className="my-2">
                  <span className={`text-3xl sm:text-4xl font-black tracking-tight ${kpi.color}`}>
                    {kpi.val}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 mt-3">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{kpi.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Organizational Innovation Effect (Dark Navy Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl bg-[#0B1120] border border-slate-800 p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              조직 전반의 핵심 비즈니스 혁신 효과
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {innovations.map((item, i) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
