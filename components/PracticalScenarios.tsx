"use client";

import React, { useState } from "react";
import {
  Cloud,
  CreditCard,
  Truck,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldAlert,
  Server,
  FileSpreadsheet,
  PackageCheck,
  Printer,
} from "lucide-react";

export default function PracticalScenarios() {
  return (
    <section id="scenarios" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            현장 중심 B2B 실무 시나리오와 <br className="hidden sm:inline" />
            <span className="text-slate-500">무중단 연동 아키텍처</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal pt-2">
            실제 기업간 거래에서 발생하는 ERP 점검, 고액 결제 한도 분할, 일정별 분할 출고 문제를 완벽하게 해결합니다.
          </p>
        </div>

        {/* 3 Visual Flow Blocks Stack */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Block 1: AWS SQS 무중단 ERP 연동 파이프라인 (Dark Navy 강조 패널) */}
          <div
            className="rounded-3xl bg-[#0B1120] border border-slate-800 p-7 sm:p-9 shadow-2xl relative overflow-hidden"
          >
            {/* Top Glow & Badge */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                    ARCHITECTURE 01
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    01. AWS SQS 무중단 ERP 연동 파이프라인
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold self-start sm:self-auto">
                무중단 비동기 큐잉
              </span>
            </div>

            {/* Pipeline Flow Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-2 relative my-6">
              {[
                { title: "쇼핑몰 결제", subtitle: "실시간 주문 수신", badge: "Trigger" },
                { title: "AWS SQS 큐잉", subtitle: "비동기 버퍼 격리", badge: "Buffer" },
                { title: "비동기 Worker", subtitle: "재시도 및 변환", badge: "Processor" },
                { title: "ERP 자동 등록", subtitle: "SAP/더존 즉시 반영", badge: "Sync" },
              ].map((step, idx) => (
                <div key={step.title} className="relative group">
                  <div className="h-full border-t border-slate-700 pt-4 flex flex-col justify-between group-hover:border-emerald-500/60 transition">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-slate-400">STEP 0{idx + 1}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 border border-emerald-500/20">
                          {step.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{step.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Flow Arrow (Desktop) */}
                  {idx < 3 && (
                    <div className="hidden sm:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 items-center justify-center text-emerald-400">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Standard Interface Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 pb-4">
              <span className="text-xs text-slate-500 font-medium mr-1">표준 인터페이스 태그:</span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-blue-300 border border-slate-700">
                IF-ORDER (주문등록)
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-indigo-300 border border-slate-700">
                IF-CANCEL (취소전송)
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-teal-300 border border-slate-700">
                IF-BP (고객사 동기화)
              </span>
            </div>

            {/* Bottom Note */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>ERP 점검 중에도 주문 무손실 수용</strong>: 사내 ERP 정기 점검 또는 네트워크 일시 장애가 발생해도 SQS 큐에 안전 보관되며, 10분 주기 Sweeper 엔진이 정상화 즉시 자동 반영합니다.
              </span>
            </div>
          </div>

          {/* Block 2: 고액 주문 법인카드 분할결제 시나리오 (White Card) */}
          <div
            className="border-t border-slate-200 pt-9 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
                    SCENARIO 02
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    02. 고액 주문 법인카드 분할결제 시나리오
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold self-start sm:self-auto">
                한도 초과 방지 분할 승인
              </span>
            </div>

            {/* Split Payment Flow */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center my-6">
              {/* Total Order */}
              <div className="md:col-span-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-500 block">총 주문 금액</span>
                <span className="text-lg font-black text-slate-900 mt-1 block">3,000만 원</span>
                <span className="text-xs text-slate-500 mt-0.5 block">단일 발주서 번호</span>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex items-center justify-center text-slate-500">
                <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
              </div>

              {/* Card A + Card B */}
              <div className="md:col-span-4 space-y-2">
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">1차 법인카드 A</span>
                  <span className="text-xs font-extrabold text-blue-600">1,500만 원 (승인완료)</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">2차 법인카드 B</span>
                  <span className="text-xs font-extrabold text-blue-600">1,500만 원 (승인완료)</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex items-center justify-center text-slate-500">
                <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
              </div>

              {/* Final Confirm */}
              <div className="md:col-span-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <span className="text-xs font-bold text-emerald-700 block">최종 주문 확정</span>
                <span className="text-sm font-extrabold text-emerald-800 mt-1 block">
                  자동 확정 및 ERP 즉시 전송
                </span>
                <span className="text-xs text-emerald-600 mt-0.5 block">전액 결제 완료 시 출고 요청</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-normal leading-relaxed mt-4">
              고액 결제가 잦은 B2B 거래 특성상, 법인카드의 1회 한도나 일일 한도 초과 문제를 해결하기 위해 여러 장의 카드로 원하는 금액만큼 나누어 결제할 수 있으며 잔여 금액 완납 시 하나의 주문 데이터로 ERP에 실시간 전송됩니다.
            </p>
          </div>

          {/* Block 3: 1주문 다회차 분할배송 & 로젠 송장 자동화 (White Card) */}
          <div
            className="border-t border-slate-200 pt-9 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block">
                    SCENARIO 03
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    03. 1주문 다회차 분할배송 & 로젠 송장 자동화
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold self-start sm:self-auto">
                로젠택배 API 송장 자동 연동
              </span>
            </div>

            {/* Split Delivery Flow */}
            <div className="my-4 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <span className="text-sm font-bold text-slate-800">100박스 대량 발주</span>
                <span className="text-xs text-slate-500">회차별 희망 배송 일정 지정 출고</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-700">1차 출고</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold">즉시 출고</span>
                  </div>
                  <p className="text-sm font-black text-slate-900">30박스 (송장 30건)</p>
                  <p className="text-xs text-slate-500 mt-1">로젠 송장 실시간 자동 채번</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-blue-700">2차 출고</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-bold">2주 후 출고</span>
                  </div>
                  <p className="text-sm font-black text-slate-900">40박스 (송장 40건)</p>
                  <p className="text-xs text-slate-500 mt-1">예약 발송 일자 스케줄링</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-indigo-700">3차 출고</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 font-bold">4주 후 출고</span>
                  </div>
                  <p className="text-sm font-black text-slate-900">30박스 (송장 30건)</p>
                  <p className="text-xs text-slate-500 mt-1">최종 잔여분 출고 완료</p>
                </div>
              </div>
            </div>

            {/* Note & Rules (Rosen Courier Only) */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-600">
              <PackageCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>1박스 = 1송장 단위 개별 추적</strong>: 로젠택배 API와 직접 연동되어 N박스 대량 출고 시에도 원클릭으로 로젠 송장을 자동 채번 및 일괄 출력하고, 배송 현황이 고객사 주문 상세에 실시간 동기화됩니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
