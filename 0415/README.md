# 수업내용 (7주차)

## hooks

🧠 개념: Hook이란?

- Hook은 React 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 함수입니다.
- 클래스 없이도 동적인 기능 구현이 가능하게 만들어줍니다.

## 🪄 useState

상태값을 저장하고 변경하는 데 사용되는 Hook입니다.

📦 문법:

```jsx
const [state, setState] = useState(초기값);
```

🧪 예시:

```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

🔁 상태가 바뀌면 컴포넌트가 리렌더링됩니다.

## ⏱️ useEffect

컴포넌트가 마운트되거나 업데이트될 때 실행되는 부수 효과를 정의합니다.

📦 문법:

```jsx
useEffect(() => {
  // 실행할 코드
  return () => {
    // cleanup 함수
  };
}, [의존성]);
```

🧪 예시:

```jsx
useEffect(() => {
  console.log("마운트됨!");
  return () => console.log("언마운트됨!");
}, []);
```

## 💾 useMemo

비싼 계산 결과를 기억(memoize)하여 성능을 최적화합니다.

📦 문법:

```jsx
const memoizedValue = useMemo(() => 계산함수, [의존성]);
```

🧪 예시:

```jsx
const result = useMemo(() => heavyCalc(a, b), [a, b]);
```

⚠️ 의존성이 변경되지 않으면 이전 값을 재사용합니다.

## 🪢 useCallback

함수를 기억(memoize)하여 불필요한 함수 재생성을 막습니다.

📦 문법:

```jsx
const memoizedFn = useCallback(() => 함수내용, [의존성]);
```

🧪 예시:

````jsx
const handleClick = useCallback(() => {
console.log("클릭됨");
}, []);
```

⚠️ 주로 자식 컴포넌트에 콜백을 넘길 때 사용합니다.
````

## 🎯 useRef

DOM을 직접 조작하거나 값을 유지하기 위한 ref 객체를 생성합니다.

📦 문법:

```jsx
const ref = useRef(초기값);
```

🧪 예시:

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />;
inputRef.current.focus();
```

⚠️ 값이 바뀌어도 리렌더링되지 않습니다.

## 🛠️ Custom Hook

Hook을 조합하여 공통 로직을 재사용할 수 있는 사용자 정의 Hook입니다.

📦 문법:

```jsx
function useSomething() {
  const [value, setValue] = useState(0);
  // ...
  return { value, setValue };
}
```

🧪 예시:

```jsx
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increase = () => setCount((c) => c + 1);
  return { count, increase };
}

const { count, increase } = useCounter();
```

---

## 💡 분류별 라이브러리

- **UI**:  
  `Material-UI`, `Ant Design`, `Chakra UI`, `React Bootstrap`

- **상태 관리**:  
  `Redux`, `MobX`, `Recoil`, `Zustand`

- **라우팅**:  
  `React Router`, `Reach Router`

- **폼 관리**:  
  `Formik`, `React Hook Form`

- **스타일링**:  
  `Styled Components`, `Emotion`

- **데이터 Fetching**:  
  `Axios`, `Fetch API`, `React Query`

- **애니메이션**:  
  `Framer Motion`, `React Spring`

- **테스트**:  
  `Jest`, `React Testing Library`
