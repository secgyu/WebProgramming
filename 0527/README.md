# 수업내용 (13주차)

## 🚀 React Router란?

React Router는 **SPA(Single Page Application)** 에서 사용자의 URL 경로에 따라  
**다른 컴포넌트를 보여주는 라우팅 라이브러리**입니다.

- 📄 한 개의 HTML만 로드하고, URL 경로만 바꿔서 페이지처럼 보이게 함
- ⏱ 페이지 새로고침 없이 빠르게 이동
- 🔗 링크 이동도 `<a>` 대신 `<Link>` 사용

---

## 🛠️ 설치하기

```bash
npm install react-router-dom
```

```bash
yarn add react-router-dom
```

---

## 📦 주요 컴포넌트 정리

### ✅ BrowserRouter

앱의 최상단에 위치하며, 라우팅 기능을 사용하기 위한 필수 컴포넌트입니다.

```jsx
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### ✅ Routes & Route

라우팅 규칙을 설정하는 컴포넌트입니다.

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>;
```

---

### ✅ Link

페이지 이동을 위한 컴포넌트입니다. `a` 태그와 달리 **페이지 새로고침 없이** 이동합니다.

```jsx
import { Link } from "react-router-dom";

<Link to="/about">소개</Link>;
```

---

### ✅ useParams

URL 경로에 포함된 동적 값을 받아옵니다.

```jsx
<Route path="/profiles/:username" element={<Profile />} />;

// 컴포넌트 내부
const { username } = useParams();
```

---

### ✅ useSearchParams

쿼리스트링을 쉽게 다루기 위한 훅입니다.

```jsx
const [searchParams, setSearchParams] = useSearchParams();
const mode = searchParams.get("mode");
```

---

### ✅ Outlet

중첩 라우트에서 자식 컴포넌트를 렌더링할 위치를 지정합니다.

```jsx
<Layout>
  <Outlet />
</Layout>
```

---

### ✅ Navigate

조건에 따라 특정 페이지로 **리다이렉트**할 수 있습니다.

```jsx
if (!isLoggedIn) {
  return <Navigate to="/login" replace={true} />;
}
```

---

### ✅ NotFound 페이지

모든 라우터 규칙에 일치하지 않을 때 보여줄 컴포넌트입니다.

```jsx
<Route path="*" element={<NotFound />} />
```
