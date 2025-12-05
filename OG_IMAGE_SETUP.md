# 카카오톡 링크 미리보기 이미지 설정 가이드

## 완료된 작업

✅ Open Graph 메타 태그 추가 완료
✅ 카카오톡 링크 미리보기 지원 설정 완료
✅ 동적 메타 태그 관리 컴포넌트 추가

## 이미지 파일 추가 방법

### 1. 이미지 준비
- 제공하신 로고 이미지를 사용하거나
- 1200 x 630 픽셀 크기의 이미지 준비
- PNG 또는 JPG 형식
- 권장 용량: 1MB 이하

### 2. 이미지 파일 배치
```
public/
  └── og-image.png  (여기에 이미지 파일 추가)
```

### 3. 배포 URL 업데이트

배포 후 실제 Vercel URL로 업데이트:

1. **Vercel 배포 후 제공되는 URL 확인**
   - 예: `https://your-project.vercel.app`

2. **index.html의 URL 업데이트**
   - `og:url` 값을 실제 배포 URL로 변경
   - `og:image` 값을 `https://your-project.vercel.app/og-image.png`로 변경
   - `twitter:url`과 `twitter:image`도 동일하게 업데이트

3. **또는 환경 변수 사용 (권장)**
   - Vercel 환경 변수에 `VITE_SITE_URL` 추가
   - 코드에서 동적으로 URL 생성

## 카카오톡 링크 미리보기 테스트

### 1. 카카오톡 개발자 도구 사용
1. https://developers.kakao.com/tool/clear/og 접속
2. 배포된 사이트 URL 입력
3. "요청하기" 클릭
4. 미리보기 이미지 확인

### 2. 카카오톡 앱에서 직접 테스트
1. 배포된 사이트 URL을 카카오톡에서 공유
2. 링크 미리보기 확인

## 중요 사항

⚠️ **HTTPS 필수**: 카카오톡은 HTTPS URL만 지원합니다
⚠️ **절대 URL 사용**: 상대 경로가 아닌 전체 URL 사용
⚠️ **이미지 크기**: 1200x630 픽셀 권장 (최소 600x315)
⚠️ **캐시**: 카카오톡은 이미지를 캐시하므로, 변경 후에는 개발자 도구에서 캐시 삭제 필요

## 현재 설정된 메타 태그

- ✅ `og:title` - 사이트 제목
- ✅ `og:description` - 사이트 설명
- ✅ `og:image` - 미리보기 이미지 (1200x630)
- ✅ `og:url` - 사이트 URL
- ✅ `og:type` - website
- ✅ `og:locale` - ko_KR
- ✅ `og:image:secure_url` - 카카오톡용
- ✅ `twitter:card` - summary_large_image
- ✅ `twitter:image` - 트위터용 이미지

## 문제 해결

### 이미지가 표시되지 않는 경우
1. 이미지 파일이 `public/` 폴더에 있는지 확인
2. 이미지 URL이 절대 경로인지 확인
3. HTTPS로 배포되었는지 확인
4. 카카오톡 개발자 도구에서 캐시 삭제

### 이미지가 오래된 경우
1. 카카오톡 개발자 도구에서 캐시 삭제
2. 이미지 파일명 변경 (예: `og-image-v2.png`)
3. 메타 태그의 이미지 URL 업데이트

