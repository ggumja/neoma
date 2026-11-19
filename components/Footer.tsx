import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-800">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 to-blue-600 border border-white/10 flex items-center justify-center text-white font-mono font-black text-xl">
              N
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-lg tracking-tight">
                  NEOMA
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-400 font-semibold border border-blue-700/50">
                  NEXUS B2B
                </span>
              </div>
              <p className="text-xs text-slate-400">
                차세대 엔터프라이즈 B2B 커머스 솔루션
              </p>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#targets" className="hover:text-blue-400 transition-colors">
              타겟 시장
            </a>
            <a href="#features" className="hover:text-blue-400 transition-colors">
              핵심 기능
            </a>
            <a href="#scenarios" className="hover:text-blue-400 transition-colors">
              실무 시나리오
            </a>
            <a href="#results" className="hover:text-blue-400 transition-colors">
              도입 효과
            </a>
            <a href="#roadmap" className="hover:text-blue-400 transition-colors">
              구축 로드맵
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
              aria-label="맨 위로 이동"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </a>
          </div>
        </div>

        {/* Company & Legal Info */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-400">
          <div className="space-y-1.5 leading-relaxed">
            <p className="font-bold text-slate-200">
              주식회사 네오마 (Neoma Inc.)
            </p>
            <p>
              대표 / COO : 정재풍 &nbsp;|&nbsp; 연락처 :{" "}
              <a href="tel:010-9018-0310" className="hover:text-white underline">
                010-9018-0310
              </a>{" "}
              &nbsp;|&nbsp; 이메일 :{" "}
              <a href="mailto:zaipong0417@gmail.com" className="hover:text-white underline">
                zaipong0417@gmail.com
              </a>
            </p>
            <p>본사 소재지 : 서울특별시 중구 남대문로9길 24 1048호</p>
          </div>

          <div className="md:text-right space-y-2 flex flex-col justify-end">
            <p className="text-[11px] text-slate-500">
              NEOMA · NEXUS B2B Commerce Platform &copy; {new Date().getFullYear()} Neoma Inc. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600">
              AWS SQS, SAP, 더존, 영림원, 로젠택배 API 표준 커넥터 연동 호환
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
