import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    const baseUrl = window.location.origin;
    
    // Organization 스키마
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'APEX BUILD',
      alternateName: 'APEX BUILD 프리미엄 조립 PC',
      url: baseUrl,
      logo: `${baseUrl}/og-image.png`,
      description: '프리미엄 조립 PC 전문 업체. 최고급 부품과 전문 기술력으로 제작하는 맞춤형 고성능 PC 솔루션',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KR',
        addressLocality: '서울',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: '고객 지원',
        availableLanguage: 'Korean',
      },
      sameAs: [
        // 소셜 미디어 링크 추가 가능
      ],
    };

    // WebSite 스키마
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'APEX BUILD',
      url: baseUrl,
      description: '프리미엄 게이밍 PC와 워크스테이션 전문 쇼핑몰',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };

    // BreadcrumbList 스키마
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '제품',
          item: `${baseUrl}#products`,
        },
      ],
    };

    // LocalBusiness 스키마 (선택사항)
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'APEX BUILD',
      image: `${baseUrl}/og-image.png`,
      '@id': baseUrl,
      url: baseUrl,
      telephone: '02-1234-5678',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KR',
        addressLocality: '서울',
      },
    };

    // 스키마를 head에 추가
    const schemas = [
      organizationSchema,
      websiteSchema,
      breadcrumbSchema,
      localBusinessSchema,
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(schema);
      
      // 기존 스크립트가 있으면 제거
      const existing = document.getElementById(script.id);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}

