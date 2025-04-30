# 수업내용 (9주차)

## ✅ Event Handling in React

- `onClick={handleClick}` 와 같이 **camelCase**로 이벤트 속성 지정
- 이벤트 핸들러 함수는 `function handleClick(e) { ... }`
- React는 `SyntheticEvent` 객체 사용 → 브라우저 간 호환성 제공
- `event.preventDefault()` 로 기본 동작 방지
- `event.stopPropagation()` 으로 이벤트 전파 차단
- `useCallback()` 으로 성능 최적화 가능

```jsx
function Button() {
  function handleClick() {
    alert("버튼이 클릭됨!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

---

### 💡 인자 전달 예시

```jsx
function GreetButton() {
  const greet = (name) => alert(`${name}님 안녕하세요`);
  return <button onClick={() => greet("홍길동")}>인사하기</button>;
}
```

---

### 🏷️ 클래스 컴포넌트 바인딩

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prev) => ({ isOn: !prev.isOn }));
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.isOn ? "ON" : "OFF"}</button>;
  }
}
```

---

## 🔀 Conditional Rendering

### 🔹 삼항 연산자 (Ternary Operator)

```jsx
<h1>{isLoggedIn ? "환영합니다!" : "로그인 해주세요."}</h1>
```

### 🔹 논리 연산자 (`&&`)

```jsx
{
  hasMessage && <p>새로운 메시지가 도착했습니다!</p>;
}
```

### 🔹 `if` 문 또는 `switch` 문

```jsx
if (isLoggedIn) {
  return <Welcome />;
} else {
  return <PleaseLogin />;
}
```

---

## 🧪 실습 예제

### ✅ 상태와 버튼 이벤트 결합

```jsx
function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "숨기기" : "보이기"}</button>
      {isVisible && <p>이 메시지가 보입니다!</p>}
    </div>
  );
}
```
