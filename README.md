## 🎬 Service Overview
`NewValance`는 긴 글의 뉴스를 읽을 여유가 없는 현대인들이 빠르고 간편하게 사회 이슈를 습득할 수 있도록 **뉴스 숏폼 영상**을 제공하는 서비스입니다. 뉴스 숏폼 영상은 다음 과정을 거쳐 생성됩니다:
1. 뉴스 사이트에서 기사 크롤링  
2. GPT-4o-mini API로 텍스트 요약 및 가공  
3. Text-To-Video 모델로 비디오 생성  
4. Text-To-Speech API로 음성 생성  
5. 영상 편집 라이브러리로 최종 숏폼 영상 편집 및 합산

사용자는 모바일 애플리케이션을 통해 생성된 뉴스 숏폼 영상을 시청할 수 있으며, **카테고리별 뉴스**, **오늘의 뉴스**, **추천 뉴스** 등 다양한 경로로 원하는 뉴스를 습득할 수 있습니다.

**Demo Video :** [(https://linktr.ee/gimyedev)](#)

## 🔧 설치 및 실행 방법

### 1. 저장소 클론

```bash
git clone https://github.com/SSambbongWarriors/NewValance-FE.git
cd NewValance
```

### 2. 의존성 설치
```bash

npm install
```

### 3. 프로젝트 실행
```bash
npx expo start
```
⚠️ 실행 전 Expo Go 앱을 모바일에 설치하세요.

### 4. 환경 변수 설정
프로젝트 실행을 위해 아래의 환경 변수를 설정해야 합니다.

```bash
EXPO_PUBLIC_API_URL=your_api_url_here
```

### 5. 프로덕션 빌드

```
eas build --platform android --profile production
```
