# Vercel 배포 가이드

## 현재 상태
✅ 모든 코드가 GitHub에 푸시되었습니다
✅ 환경 변수 설정이 완료되었습니다
✅ Vercel 설정 파일(`vercel.json`)이 준비되었습니다

## Vercel 배포 방법

### 방법 1: Vercel 대시보드에서 GitHub 연동 (권장)

1. **Vercel 대시보드 접속**
   - https://vercel.com/dashboard 접속
   - 로그인 (GitHub 계정으로 로그인 권장)

2. **새 프로젝트 생성**
   - "Add New..." → "Project" 클릭
   - "Import Git Repository" 클릭

3. **GitHub 저장소 선택**
   - `kylesung0901-ops/luxury-ecommerce-website` 선택
   - "Import" 클릭

4. **프로젝트 설정**
   - Framework Preset: Vite (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `build` (자동 설정됨)
   - Install Command: `npm install` (자동 설정됨)

5. **환경 변수 설정** (중요!)
   - "Environment Variables" 섹션 클릭
   - 다음 변수들을 추가:
     ```
     VITE_FIREBASE_API_KEY = AIzaSyDoaZiNPxc8N_X00gNSdjPM6-I2yrSOGwI
     VITE_FIREBASE_AUTH_DOMAIN = luxury-e-commerce-website.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID = luxury-e-commerce-website
     VITE_FIREBASE_STORAGE_BUCKET = luxury-e-commerce-website.firebasestorage.app
     VITE_FIREBASE_MESSAGING_SENDER_ID = 426090554506
     VITE_FIREBASE_APP_ID = 1:426090554506:web:ddb3e6ba39ed7cb42c7973
     VITE_FIREBASE_MEASUREMENT_ID = G-MWGT3KWNWG
     ```
   - 각 변수에 대해 **Production**, **Preview**, **Development** 모두 선택
   - "Save" 클릭

6. **배포 시작**
   - "Deploy" 버튼 클릭
   - 배포가 완료되면 URL이 제공됩니다

### 방법 2: 기존 프로젝트에 GitHub 연동

1. **기존 프로젝트 선택**
   - Vercel 대시보드에서 기존 프로젝트 선택
   - Settings → Git 탭 이동

2. **GitHub 저장소 연결**
   - "Connect Git Repository" 클릭
   - `kylesung0901-ops/luxury-ecommerce-website` 선택
   - 연결 완료

3. **환경 변수 설정**
   - Settings → Environment Variables
   - 위의 환경 변수들 추가

4. **재배포**
   - Deployments 탭에서 "Redeploy" 클릭
   - 또는 GitHub에 푸시하면 자동 배포됩니다

### 방법 3: Vercel CLI 사용

```bash
# 1. Vercel 로그인
vercel login

# 2. 프로젝트 연결
vercel link

# 3. 환경 변수 설정 (각 변수마다 실행)
vercel env add VITE_FIREBASE_API_KEY production
vercel env add VITE_FIREBASE_AUTH_DOMAIN production
vercel env add VITE_FIREBASE_PROJECT_ID production
vercel env add VITE_FIREBASE_STORAGE_BUCKET production
vercel env add VITE_FIREBASE_MESSAGING_SENDER_ID production
vercel env add VITE_FIREBASE_APP_ID production
vercel env add VITE_FIREBASE_MEASUREMENT_ID production

# 4. 프로덕션 배포
vercel --prod
```

## 배포 후 확인사항

1. ✅ 배포 URL로 접속하여 사이트가 정상 작동하는지 확인
2. ✅ 로그인/회원가입 기능이 정상 작동하는지 확인
3. ✅ Firebase 연결이 정상인지 확인

## 자동 배포

GitHub와 연동되면:
- `main` 브랜치에 푸시할 때마다 자동으로 프로덕션 배포
- Pull Request 생성 시 Preview 배포
- 모든 배포는 Vercel 대시보드에서 확인 가능

## 문제 해결

### 빌드 실패 시
- Vercel 대시보드의 Deployments 탭에서 로그 확인
- 환경 변수가 모두 설정되었는지 확인
- `package.json`의 빌드 스크립트 확인

### 환경 변수 오류 시
- Vercel 대시보드에서 환경 변수 재확인
- 변수 이름이 `VITE_`로 시작하는지 확인
- Production, Preview, Development 모두 설정되었는지 확인

