# 수업내용 (12주차)

> React + styled-components 기반의 투두 리스트 앱

## 📦 사용 기술 스택

- **⚛️ React** - 컴포넌트 기반 UI 라이브러리

- **💅 styled-components** - CSS-in-JS 스타일링

- **🎨 react-icons** - 아이콘 사용을 위한 라이브러리

- **⚙️ Context API + useReducer** - 상태 및 전역 관리

## 📁 주요 컴포넌트 구조

| 컴포넌트       | 설명                                            |
| -------------- | ----------------------------------------------- |
| `TodoTemplate` | 앱의 레이아웃을 설정, 중앙 정렬된 박스를 렌더링 |
| `TodoHead`     | 오늘의 날짜, 요일, 남은 할 일 수 표시           |
| `TodoList`     | 할 일 목록을 렌더링                             |
| `TodoItem `    | 개별 할 일 항목, 완료/삭제 가능                 |
| `TodoCreate`   | 새로운 할 일 추가 버튼 및 입력 폼 제공          |

## 🧠 상태 관리 구조

- `TodoProvider`: Context API로 상태 전역 관리

- `useTodoState`, `useTodoDispatch`, `useTodoNextId`: 커스텀 Hook으로 분리하여 사용성 향상

- `useReducer`로 상태 트랜잭션 (`CREATE`, `TOGGLE`, `REMOVE`) 처리

## 🧩 주요 기능

- ✅ 할 일 추가 / 완료 / 삭제

- 📅 날짜 및 요일 표시 (toLocaleDateString)

- 🌀 불필요한 리렌더링 방지를 위한 `React.memo`

- 🛠 글로벌 스타일 적용 (`createGlobalStyle`)
