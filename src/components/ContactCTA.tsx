import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactCTA() {
  return (
    <>
      {/* Contact CTA Section */}
      <section id="contact" className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1623351143485-b1d4937747f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2NDk0MDAzNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500">맞춤 제작 문의</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                당신만을 위한<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  완벽한 PC를 설계하세요
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                전문 상담사가 고객님의 용도와 예산에 맞춰<br />
                최적의 시스템을 추천해드립니다
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3 p-4 bg-zinc-900/50 rounded-lg border border-yellow-500/20">
                  <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">전화 상담</h4>
                    <p className="text-gray-400 text-sm">1588-APEX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-zinc-900/50 rounded-lg border border-yellow-500/20">
                  <MessageCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">카카오톡</h4>
                    <p className="text-gray-400 text-sm">24시간 상담</p>
                  </div>
                </div>
              </div>

              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all text-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>무료 견적 상담 시작하기</span>
              </button>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-zinc-900/80 backdrop-blur-lg p-8 rounded-2xl border border-yellow-500/30">
              <h3 className="text-2xl text-white mb-6">빠른 견적 문의</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">이름</label>
                  <input 
                    type="text"
                    placeholder="홍길동"
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">연락처</label>
                  <input 
                    type="tel"
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">이메일</label>
                  <input 
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">용도</label>
                  <select className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors">
                    <option>게이밍</option>
                    <option>영상 편집</option>
                    <option>3D 작업</option>
                    <option>사무용</option>
                    <option>기타</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">예산</label>
                  <select className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors">
                    <option>100만원 이하</option>
                    <option>100~200만원</option>
                    <option>200~300만원</option>
                    <option>300~500만원</option>
                    <option>500만원 이상</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">문의 내용</label>
                  <textarea 
                    rows={4}
                    placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all"
                >
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="text-white mb-2">오시는 길</h4>
                <p className="text-gray-400 text-sm">
                  서울특별시 강남구 테헤란로<br />
                  APEX 빌딩 5층
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="text-white mb-2">고객센터</h4>
                <p className="text-gray-400 text-sm">
                  전화: 1588-APEX<br />
                  운영시간: 평일 09:00 - 18:00
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="text-white mb-2">이메일 문의</h4>
                <p className="text-gray-400 text-sm">
                  contact@apexbuild.com<br />
                  support@apexbuild.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
