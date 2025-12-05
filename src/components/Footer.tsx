import { Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-600/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">A</span>
              </div>
              <span className="text-xl text-white">
                APEX <span className="text-yellow-500">BUILD</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              프리미엄 조립 PC 전문<br />
              당신만의 완벽한 시스템
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-zinc-900 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-900 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group">
                <Youtube className="w-4 h-4 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-900 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-4">제품</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">게이밍 PC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">워크스테이션</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">크리에이터 PC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">사무용 PC</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4">고객 지원</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">견적 문의</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">A/S 신청</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">자주 묻는 질문</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">배송 조회</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">회사</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">회사 소개</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">이용 약관</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">개인정보 처리방침</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">제휴 문의</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-yellow-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 APEX BUILD. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              사업자등록번호: 123-45-67890 | 대표: 김상우
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
