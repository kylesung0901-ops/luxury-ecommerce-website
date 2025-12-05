import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOHead({ 
  title = 'APEX BUILD - 프리미엄 게이밍 PC & 워크스테이션',
  description = '최고 성능의 게이밍 PC와 워크스테이션을 만나보세요. 맞춤 제작부터 프리미엄 PC까지, APEX BUILD에서 완벽한 PC를 경험하세요.',
  image,
  url
}: SEOHeadProps) {
  useEffect(() => {
    // 현재 URL 가져오기
    const currentUrl = url || window.location.origin;
    const ogImage = image || `${currentUrl}/og-image.png`;

    // 메타 태그 업데이트
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Title 업데이트
    document.title = title;

    // Open Graph 태그 업데이트
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:image:secure_url', ogImage);

    // Twitter 태그 업데이트
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:url', currentUrl);
  }, [title, description, image, url]);

  return null;
}

