# 📖 리액트+vite 실습 - useReducer 상태 훅 활용
- react+ts 공부 로그 링크 [리액트+타입스크립트 이론 공부 리포지토리 👉](https://github.com/dfizae/react-ts-log)

## 🤨 취지
- 이론 공부로만으로는 부족한 느낌이 들어서 `gemini`를 통해 문제를 짜서 문제 해결 능력을 향상시키기로 했습니다.
- `typescript`, `react`, `vite`를 이용해서 코드를 짜는 것에 익숙해지기 위해서 입니다.
- `JS, TS`로 로직을 짜는 능력이 아직 많이 부족해서 극복을 하기 위해 기획했습니다.


## 🧩 Challenges (`Gemini` 활용)

### 🎯 Challenge 1: useState 심화 (객체 상태 관리)

#### 기능
단순한 숫자 카운터 대신, 사용자 정보 수정 폼을 만들어 봅니다. 
객체 형태의 상태를 안전하게 업데이트하는 것이 핵심입니다.

#### 요구 사항


### 🎯 Challenge 2: useReducer 기초 (복잡한 상태 로직)

#### 기능
나만의 미니 은행 만들기
단순히 잔액만 바뀌는 것이 아니라, **거래 내역(Log)**이 쌓여야 하고, 출금 조건을 체크해야 합니다.

#### 요구 사항

1. 상태 구조 (State Shape):

- balance: 현재 잔액 (숫자, 초기값 0)

- error: 에러 메시지 (문자열 혹은 null, 초기값 null)

- history: 거래 내역 배열 (초기값 빈 배열 [])

- - 내역 하나는 { id, type, amount, date } 형태를 가집니다.

2. 구현해야 할 액션 (Actions):

- `DEPOSIT (입금):`

- - 잔액을 증가시킵니다.

- - `history`에 "입금" 내역을 추가합니다.

- - 기존 에러 메시지가 있다면 없앱니다(null).

- `WITHDRAW (출금):`

- 조건: 출금하려는 금액이 잔액보다 크면 잔액을 바꾸지 말고, `error`에 "잔액이 부족합니다."라고 남깁니다.

- 잔액이 충분하면 차감하고, `history`에 "출금" 내역을 추가합니다.

- `RESET (초기화):`

- - 모든 상태를 초기값으로 되돌립니다.

3. UI 구성:

- 금액을 입력하는 `input` 창이 필요합니다. (이건 `useState`로 따로 관리해도 됩니다)

- 입금, 출금, 초기화 버튼을 만듭니다.

- 화면에 **현재 잔액, 에러 메시지(있을 때만 빨간색으로), 거래 내역 리스트**를 보여주세요.

## 📁 폴더 구성
```
REACT-TS-LOG/
├── node_modules/
│   │   ├── .../
├── public/
│   │   ├── .../
├── src/
│   │
│   ├── components/
│   │   ├── UserProfile.tsx: Challenge 1 컴포넌트
│   │   ├── 
│   │   └── 
│   │
│   ├── types/
│   │   └── User.d.ts : User 타입
│   │
│   ├── App.css
│   ├── App.tsx : 리액트 애플리케이션의 시작점
│   ├── index.css 
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```


