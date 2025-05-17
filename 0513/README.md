# 수업내용 (11주차)

## 📌 1. Lists & Keys

React에서 배열을 기반으로 컴포넌트를 렌더링할 때 `map()` 함수와 고유한 `key` 속성이 필수적으로 사용됩니다.

### ✅ 핵심 개념

- `map()` 함수는 배열을 반복하여 각 요소를 JSX로 변환합니다.
- `key`는 각 리스트 아이템을 고유하게 식별하기 위한 값이며, 효율적인 리렌더링을 가능하게 합니다.

### 💡 예제 코드

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 📌 2. Lifting State Up

**Lifting State Up**은 여러 컴포넌트가 동일한 상태를 공유해야 할 때 사용하는 리액트의 디자인 패턴입니다.

### ✅ 핵심 개념

- 상태를 하위 컴포넌트에서 부모 컴포넌트로 "끌어올려" 공유 상태로 관리

- 자식 컴포넌트는 props를 통해 상태 값과 변경 함수를 전달받음

```jsx
function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </>
  );
}

function ChildA({ text, setText }) {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function ChildB({ text }) {
  return <p>{text}</p>;
}
```
