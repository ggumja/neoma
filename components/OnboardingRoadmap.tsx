"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Shield,
  Layers,
  ArrowRight,
  ShieldCheck,
  Server,
  Key,
} from "lucide-react";

export default function OnboardingRoadmap() {
  const roadmapSteps = [
    {
      period: "1~2주",
      title: "요건 분석 & ERP 정의",
      desc: "거래처 단가 체계 및 ERP 연동 인터페이스(주문·취소·BP) 명세 확정",
      badgeBg: "bg-blue-500",
    },
    {
      period: "3~4주",
      title: "AWS VPC 단독 구축",
      desc: "고객사 전용 클라우드 인프라 프로비저닝 및 보안 격리 환경 배포",
      badgeBg: "bg-blue-600",
    },
    {
      period: "5~6주",
      title: "E2E 통합 테스트",
      desc: "카드 분할결제, 로젠 송장 채번, ERP 비동기 큐잉 무손실 정합성 검증",
      badgeBg: "bg-blue-700",
    },
    {
      period: "7~8주",
      title: "파일럿 & 그랜드 오픈",
      desc: "주요 대리점·바이어 대상 사전 교육 및 실거래 전환 안정화 운영",
      badgeBg: "bg-emerald-600",
    },
  ];

  const onboardingSteps = [
    {
      step: "STEP 01",
      title: "1:1 라이브 데모 시연",
      desc: "귀사 비즈니스 모델에 맞춘 커머스 관리자 및 바이어 화면 실시간 시연",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      step: "STEP 02",
      title: "ERP 연동 사전 진단",
      desc: "기존 사용 중인 SAP / 더존 / 영림원 / 자체 레거시 데이터 인터페이스 분석",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      step: "STEP 03",
      title: "맞춤형 견적 & PoC",
      desc: "예산 및 일정에 최적화된 구축 제안서 전달 및 핵심 기능 실증(PoC) 착수",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            05. 단독 인프라 구축 & 도입 안내
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            엔터프라이즈 단독 구축과{" "}
            <span className="text-blue-600">신속한 도입 로드맵</span>
          </h2>

          <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mt-2" />

          <p className="text-slate-600 text-sm sm:text-base font-normal pt-2">
            보안 감사와 데이터 주권을 보장하는 전용 클라우드 환경에서 8주 이내 초고속 구축을 실현합니다.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Block 1: Enterprise Dedicated (AWS VPC 단독 구축) — Dark Navy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#0B1120] border border-slate-800 p-7 sm:p-9 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  Enterprise Dedicated{" "}
                  <span className="text-emerald-400 text-sm font-semibold">(AWS VPC 단독 구축)</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                  <Server className="w-4 h-4" />
                  <span className="text-xs font-bold">완전 격리 인프라</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  타사와 인프라·DB 완전 격리로 엄격한 금융·엔터프라이즈 보안 감사 100% 충족
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-bold">1:1 맞춤 커넥터</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  SAP·더존·영림원 및 사내 레거시 ERP와 무제한 1:1 맞춤 인터페이스 개발 지원
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-teal-400">
                  <Key className="w-4 h-4" />
                  <span className="text-xs font-bold">영구 라이선스</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  매월 나가는 임대료 종속 없는 영구 라이선스 공급으로 기업의 디지털 자산 완전 내재화
                </p>
              </div>
            </div>
          </motion.div>

          {/* Block 2: 평균 6~8주 4단계 신속 구축 로드맵 (White Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                평균 6~8주 4단계 신속 구축 로드맵
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roadmapSteps.map((step, idx) => (
                <div
                  key={step.period}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition flex flex-col justify-between"
                >
                  <div>
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-extrabold text-white mb-3 ${step.badgeBg}`}
                    >
                      {step.period}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Block 3: 3단계 도입 프로세스 (White Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                3단계 도입 프로세스
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {onboardingSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-black text-blue-600 block mb-2">
                      {item.step}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
