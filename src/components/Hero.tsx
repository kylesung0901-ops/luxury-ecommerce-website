import { ArrowRight, Cpu, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1733945761533-727f49908d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21wdXRlciUyMHNldHVwfGVufDF8fHx8MTc2NDg2OTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="APEX BUILD 프리미엄 게이밍 PC 설정 - 고성능 게이밍 컴퓨터 워크스테이션"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-500">프리미엄 조립 PC 전문</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            당신만의<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              완벽한 시스템
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10" role="doc-subtitle">
            최고급 부품과 전문 기술력으로 제작하는<br className="hidden sm:block" />
            맞춤형 고성능 PC 솔루션
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all group"
            >
              <span>제품 둘러보기</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-yellow-500/30 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-all"
            >
              맞춤 견적 받기
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <article className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Cpu className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-white mb-1 font-semibold">최신 부품</h2>
                <p className="text-gray-400 text-sm">정품 인증 부품만 사용</p>
              </div>
            </article>
            <article className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-white mb-1 font-semibold">고성능</h2>
                <p className="text-gray-400 text-sm">최상의 성능 보장</p>
              </div>
            </article>
            <article className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Shield className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-white mb-1 font-semibold">3년 보증</h2>
                <p className="text-gray-400 text-sm">안심 A/S 서비스</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
