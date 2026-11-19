"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Building,
  User,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    erp: "SAP",
    inquiryType: "1:1 라이브 데모 시연",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company.trim()) {
      setError("회사명을 입력해주세요.");
      return;
    }
    if (!formData.name.trim()) {
      setError("담당자명 및 직책을 입력해주세요.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("연락처를 입력해주세요.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("올바른 이메일 주소를 입력해주세요.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Introduction & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              신청 및 문의
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              차세대 B2B 커머스로의 전환, <br />
              <span className="text-blue-600">지금 바로 상담받으세요</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              귀사의 거래 구조와 ERP 연동 환경을 분석하여 가장 빠르고 안전한 1:1 맞춤 데모 및 도입 견적을 제안해 드립니다.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3.5 text-sm text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">직통 문의 (대표/COO 정재풍)</span>
                  <a href="tel:010-9018-0310" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    010-9018-0310
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">공식 이메일</span>
                  <a href="mailto:zaipong0417@gmail.com" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    zaipong0417@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">본사 소재지</span>
                  <span className="font-bold text-slate-900">
                    서울특별시 중구 남대문로9길 24 1048호
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0F172A] text-white border border-slate-800">
              <div className="flex items-center gap-2 mb-1.5 text-emerald-400 text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>영업일 기준 24시간 이내 신속 회신</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                신청 접수 즉시 B2B 엔지니어링 전담팀이 검토 후 맞춤 데모 일정을 조율해 드립니다.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-8 sm:p-10 shadow-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    상담 신청이 정상 접수되었습니다!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    입력해 주신 정보({formData.email} / {formData.phone})로 담당자가 확인 후 24시간 이내에 신속히 연락드리겠습니다.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow hover:bg-blue-700 transition-colors"
                    >
                      추가 문의 작성하기
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    라이브 데모 & 사전 진단 신청서
                  </h3>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        회사명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="예: (주)네오마"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        담당자명 및 직책 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="예: 홍길동 팀장"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="예: 010-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        이메일 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="예: contact@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        현재 사용 중인 ERP (선택)
                      </label>
                      <select
                        value={formData.erp}
                        onChange={(e) => setFormData({ ...formData, erp: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="SAP">SAP</option>
                        <option value="더존 (iCUBE / Smart A)">더존 (iCUBE / Smart A)</option>
                        <option value="영림원 K-System">영림원 K-System</option>
                        <option value="자체 구축 ERP">자체 구축 ERP</option>
                        <option value="ERP 미사용 / 엑셀 관리">ERP 미사용 / 엑셀 관리</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        문의 유형
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="1:1 라이브 데모 시연">1:1 라이브 데모 시연</option>
                        <option value="ERP 연동 사전 진단">ERP 연동 사전 진단</option>
                        <option value="맞춤형 견적 & PoC">맞춤형 견적 & PoC</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      상세 문의 내용 (선택)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="현재 거래 구조의 병목이나 필요한 커스텀 기능, 예상 오픈 일정을 적어주시면 더욱 정밀한 데모가 준비됩니다."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2"
                    >
                      <span>라이브 데모 & PoC 신청 완료하기</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      입력하신 정보는 상담 및 데모 일정 조율 목적으로만 안전하게 보관됩니다.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
