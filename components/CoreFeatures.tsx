"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Database,
  CalendarClock,
  Truck,
  Users,
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function CoreFeatures() {
  const features = [
    {
      num: "01",
      title: "결제 · 여신 관리",
      icon: CreditCard,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      bullets: [
        "복수 법인카드 분할결제 · 선결제 지원",
        "무통장 입금 엑셀 자동 매칭 (SHA-256 암호화)",
        "고객사별 맞춤 여신한도 설정 및 자동 환불 처리",
      ],
      highlight: "고액 결제 한도 초과 원천 해결",
    },
    {
      num: "02",
      title: "무중단 ERP 연동",
      icon: Database,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      bullets: [
        "SAP · 더존 · 영림원 엔터프라이즈 표준 커넥터",
        "AWS SQS 기반 100% 비동기 무손실 큐잉",
        "ERP 점검/장애 시 자가 복구 스위퍼(Sweeper) 엔진",
      ],
      highlight: "ERP 점검 중에도 주문 무손실",
    },
    {
      num: "03",
      title: "정기공급 · 자동 빌링",
      icon: CalendarClock,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      bullets: [
        "1~3개월 맞춤형 주기 자동 발주 & 자동 결제",
        "PG사 빌링키 보안 토큰 분리 암호화 저장",
        "고객사 자가 일시정지 및 한도 초과 시 자동 재시도",
      ],
      highlight: "반복 소모품 고정 MRR 42% 성장",
    },
    {
      num: "04",
      title: "지능형 분할배송 · 물류",
      icon: Truck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      bullets: [
        "1개 대량 주문건에 대한 N회차 일정별 분할 출고",
        "로젠택배 API 연동 송장 자동 채번 & 원클릭 인쇄",
        "박스/회차 단위 실시간 배송 추적 및 배송완료 자동화",
      ],
      highlight: "로젠 송장 실시간 자동 채번",
    },
    {
      num: "05",
      title: "영업 · 폐쇄형 승인제",
      icon: Users,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      bullets: [
        "필드 영업사원 모바일 원클릭 바이어 대리주문",
        "사업자등록증 서류 심사 기반 폐쇄형 회원 승인제",
        "바이어 등급·그룹별 개별 단가표 및 비노출 카탈로그",
      ],
      highlight: "영업사원 대리 발주 특화 지원",
    },
    {
      num: "06",
      title: "클라우드 자동화 · 알림",
      icon: Cpu,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      bullets: [
        "AWS VPC 전용 격리 단독 인프라 아키텍처",
        "9종 EventBridge 기반 24/7 자동 정합성 스케줄러",
        "카카오 비즈니스 알림톡 · SMS · AWS SES 연동 통보",
      ],
      highlight: "24/7 무인 자동화 파이프라인",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            02. 핵심 기능셋 요약
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            기업간 거래를 완성하는{" "}
            <span className="text-blue-600">6대 핵심 기능 아키텍처</span>
          </h2>

          <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mt-2" />

          <p className="text-slate-600 text-sm sm:text-base font-normal pt-2">
            기존 B2C 쇼핑몰 솔루션으로는 불가능했던 B2B 현장의 특수 거래 조건들을 표준 엔진으로 완벽히 구현했습니다.
          </p>
        </div>

        {/* 3x2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl p-7 bg-[#F8FAFC] border border-slate-200/90 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${feat.bg} ${feat.border} border flex items-center justify-center group-hover:scale-105 transition-transform`}
                    >
                      <feat.icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 block">
                        MODULE {feat.num}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {feat.num}. {feat.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 my-5">
                  {feat.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:bg-emerald-500 transition-colors" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Feature Tag */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xl">
                  {feat.highlight}
                </span>
                <span className="text-xs text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  표준 탑재
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Headline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-[#0F172A] py-6 px-8 text-center text-white shadow-xl border border-slate-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              주문부터 결제 · ERP · 물류까지 하나의 플랫폼으로 통합
            </h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
