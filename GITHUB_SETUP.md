# GitHub 연동 가이드

## 1. Git 사용자 정보 설정

먼저 Git 사용자 정보를 설정해주세요:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

또는 이 저장소에만 적용하려면:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## 2. GitHub 저장소 생성

1. GitHub에 로그인: https://github.com
2. 우측 상단의 "+" 버튼 클릭 → "New repository" 선택
3. 저장소 정보 입력:
   - Repository name: `luxury-ecommerce-website` (또는 원하는 이름)
   - Description: "Luxury E-commerce Website with Firebase Auth"
   - Public 또는 Private 선택
   - **"Initialize this repository with a README" 체크 해제** (이미 로컬에 파일이 있으므로)
4. "Create repository" 클릭

## 3. 로컬 저장소와 GitHub 연결

GitHub에서 생성한 저장소의 URL을 복사한 후 아래 명령어를 실행하세요:

```bash
# 원격 저장소 추가 (YOUR_USERNAME과 REPO_NAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 또는 SSH 사용 시
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
```

## 4. 코드 푸시

```bash
# 기본 브랜치 이름을 main으로 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## 5. Vercel과 GitHub 연동

1. Vercel 대시보드 접속: https://vercel.com/dashboard
2. 프로젝트 설정으로 이동
3. "Settings" → "Git" 탭 선택
4. "Connect Git Repository" 클릭
5. GitHub 저장소 선택 및 연결
6. 자동 배포가 활성화됩니다

또는 새로 프로젝트를 생성할 때:
1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. GitHub 저장소 선택
3. 프로젝트 설정 후 "Deploy" 클릭

## 참고사항

- Firebase API 키는 이미 코드에 포함되어 있지만, 프로덕션 환경에서는 환경 변수로 관리하는 것을 권장합니다.
- Vercel 환경 변수 설정: Settings → Environment Variables

