import { ShoppingCart, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  badge?: string;
  name: string;
  specs: string[];
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
}

export function ProductCard({ image, badge, name, specs, price, originalPrice, isPopular }: ProductCardProps) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        <ImageWithFallback 
          src={image}
          alt={`${name} - APEX BUILD 프리미엄 조립 PC`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isPopular && (
            <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-black rounded-full text-sm">
              <TrendingUp className="w-3 h-3" />
              <span>인기</span>
            </div>
          )}
          {badge && (
            <div className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
              {badge}
            </div>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors group/heart">
          <Heart className="w-5 h-5 text-white group-hover/heart:text-black" />
        </button>
      </div>

      {/* Content */}
      <article className="p-6">
        <h3 className="text-xl text-white mb-4 group-hover:text-yellow-500 transition-colors">
          {name}
        </h3>

        <div className="space-y-2 mb-6">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-start text-sm">
              <span className="text-yellow-500 mr-2">•</span>
              <span className="text-gray-400">{spec}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mb-4">
          <div>
            {originalPrice && (
              <div className="text-gray-500 line-through text-sm mb-1">
                {originalPrice}
              </div>
            )}
            <div className="text-2xl text-yellow-500">
              {price}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center gap-2 group/cart">
            <ShoppingCart className="w-4 h-4 group-hover/cart:scale-110 transition-transform" />
            <span>구매하기</span>
          </button>
          <button className="px-4 py-3 border border-yellow-500/30 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-all">
            상세정보
          </button>
        </div>
      </article>
    </div>
  );
}
