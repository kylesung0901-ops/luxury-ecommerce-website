import { ProductCard } from './ProductCard';
import { Monitor, Gamepad2, Briefcase, Palette } from 'lucide-react';

export function Products() {
  const categories = [
    { icon: Gamepad2, name: '게이밍 PC', active: true },
    { icon: Briefcase, name: '워크스테이션', active: false },
    { icon: Palette, name: '크리에이터 PC', active: false },
    { icon: Monitor, name: '사무용 PC', active: false },
  ];

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1704871132546-d1d3b845ae65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZ2IlMjBnYW1pbmclMjBwY3xlbnwxfHx8fDE3NjQ5NDAwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: '20% OFF',
      name: 'APEX ULTIMATE 게이밍 시스템',
      specs: [
        'Intel Core i9-14900K',
        'NVIDIA RTX 4090 24GB',
        'DDR5 64GB RAM',
        'Gen5 NVMe 2TB SSD'
      ],
      price: '₩4,890,000',
      originalPrice: '₩6,100,000',
      isPopular: true
    },
    {
      image: 'https://images.unsplash.com/photo-1660855551570-dd44e0ab800c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBwYyUyMGJ1aWxkfGVufDF8fHx8MTc2NDk0MDAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'APEX PRO 게이밍 시스템',
      specs: [
        'AMD Ryzen 9 7950X3D',
        'NVIDIA RTX 4080 16GB',
        'DDR5 32GB RAM',
        'Gen4 NVMe 1TB SSD'
      ],
      price: '₩3,290,000',
      isPopular: true
    },
    {
      image: 'https://images.unsplash.com/photo-1600614518987-f9c081f69e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3RhdGlvbiUyMGNvbXB1dGVyfGVufDF8fHx8MTc2NDk0MDAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'NEW',
      name: 'APEX ELITE 워크스테이션',
      specs: [
        'AMD Threadripper PRO',
        'NVIDIA RTX A5000 24GB',
        'DDR5 ECC 128GB RAM',
        'Gen4 NVMe 4TB SSD'
      ],
      price: '₩7,890,000'
    },
    {
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzY0OTQwMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'APEX CORE 게이밍 시스템',
      specs: [
        'Intel Core i7-14700K',
        'NVIDIA RTX 4070 Ti 12GB',
        'DDR5 32GB RAM',
        'Gen4 NVMe 1TB SSD'
      ],
      price: '₩2,590,000',
      originalPrice: '₩2,890,000'
    },
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-500">프리미엄 라인업</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            완벽한 성능의 <span className="text-yellow-500">조립 PC</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            게이밍부터 전문가용까지, 모든 용도에 최적화된 시스템을 제공합니다
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  category.active
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                    : 'bg-zinc-900 text-gray-400 hover:text-yellow-500 border border-zinc-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-4 border border-yellow-500/30 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-all">
            전체 제품 보기
          </button>
        </div>
      </div>
    </section>
  );
}
