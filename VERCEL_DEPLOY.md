# Vercel 배포 가이드

## 환경 변수 설정

Vercel에 배포하기 전에 환경 변수를 설정해야 합니다.

### Vercel 대시보드에서 환경 변수 설정

1. Vercel 대시보드 접속: https://vercel.com/dashboard
2. 프로젝트 선택 또는 새 프로젝트 생성
3. **Settings** → **Environment Variables** 이동
4. 다음 환경 변수들을 추가:

```
VITE_FIREBASE_API_KEY=AIzaSyDoaZiNPxc8N_X00gNSdjPM6-I2yrSOGwI
VITE_FIREBASE_AUTH_DOMAIN=luxury-e-commerce-website.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=luxury-e-commerce-website
VITE_FIREBASE_STORAGE_BUCKET=luxury-e-commerce-website.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=426090554506
VITE_FIREBASE_APP_ID=1:426090554506:web:ddb3e6ba39ed7cb42c7973
VITE_FIREBASE_MEASUREMENT_ID=G-MWGT3KWNWG
```

5. 각 환경 변수에 대해 **Production**, **Preview**, **Development** 환경을 선택
6. **Save** 클릭

### GitHub 연동을 통한 자동 배포

1. Vercel 대시보드에서 **Settings** → **Git** 탭
2. **Connect Git Repository** 클릭
3. GitHub 저장소 선택: `kylesung0901-ops/luxury-ecommerce-website`
4. 연결 후 자동 배포 활성화

### 수동 배포 (Vercel CLI 사용)

```bash
# Vercel 로그인
vercel login

# 프로덕션 배포
vercel --prod
```

## 배포 확인

배포가 완료되면 Vercel에서 제공하는 URL로 접속하여 확인할 수 있습니다.

## 참고사항

- `.env` 파일은 로컬 개발용이며, Git에 커밋되지 않습니다 (`.gitignore`에 포함)
- `.env.example` 파일은 환경 변수 템플릿입니다
- Vercel에서는 환경 변수를 대시보드에서 설정해야 합니다

