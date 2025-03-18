# 수업내용 (3주차)

## Element

React에서 Element는 UI의 가장 작은 단위이며, 화면에 표시될 내용을 담고 있는 JavaScript 객체입니다.
Element는 HTML의 요소와 비슷하지만, 실제 DOM 요소가 아닌 가상 DOM(Virtual DOM)에 존재하는 객
체입니다.

### Element 생성

1. JSX

```js
const element = <div>Hello, world!</div>;
```

HTML과 유사하게 React Element를 생성하는 방법입니다.

2. React.createElement()

```js
const element = React.createElement("div", null, "Hello, world!");
```

React.createElement()함수를 사용하여 직접 Element를 생성할 수 있습니다.

### Element VS Component

| 구분     | React Element                    | React Component                              |
| -------- | -------------------------------- | -------------------------------------------- |
| 정의     | UI의 가장 작은 단위              | 여러 개의 Element를 포함하는 독립적인 UI블록 |
| 형태     | 변경 불가능한 객체               | 함수 또는 클래스                             |
| 재사용   | 불가능                           | 가능                                         |
| 리렌더링 | 새로운 Element를 생성해야 변경됨 | 상태(state) 변화에 따라 자동으로 업데이트됨  |

## Rendering

1. 초기 렌더링

- 리액트 애플리케이션이 처음 실행되면, 컴포넌트가 렌더링되고 가상 DOM이 생성됩니다.
- 가상 DOM은 실제 DOM에 반영되기 전에 미리 어떤 변화가 있는지 점검합니다.
- Virtual DOM을 통해 불필요한 부분을 제외하고 필요한 부분만 실제 DOM을 만들어 렌더링합니다.

2. 상태 변화

- 상태(state)나 속성(props)이 변경되면, 리액트는 해당 컴포넌트를 다시 렌더링하여 새로운 가상 DOM을 생성합니다.

3. 비교(Diff)

- 변경된 이전 가상 DOM과 새로운 가상 DOM을 비교하여 어떤 부분이 변경되었는지 확인합니다.
- 이를 "Diff(디핑)"이라 부르며, 차이점이 없는 부분은 그대로 두고, 변경된 부분만 업데이트합니다.

4. 업데이트

- 변경된 부분이 확인되면, 리액트는 실제 DOM을 업데이트합니다.
- 이 때, 필요한 부분만 DOM 조작을 하여 효율성을 극대화합니다.

## 컴포넌트(Component)

리액트에서 컴포넌트는 화면을 이루는 **UI 요소를 독립적이고 재사용 가능한 형태**로 분리한 것입니다.  
컴포넌트를 적절히 나누면, 유지보수와 재사용성이 크게 향상됩니다.

### 컴포넌트 작성 규칙

1. **이름 규칙**

   - **컴포넌트 이름은 반드시 대문자로 시작**해야 합니다.
   - 예: `MyComponent`, `UserProfile`
   - 소문자로 시작하면 HTML 태그로 인식될 수 있으므로 주의해야 합니다.

2. **파일 이름 규칙(권장 사항)**

   - 컴포넌트 파일도 주로 **PascalCase**(단어의 첫 글자를 대문자로 하는 표기법)로 작성합니다.
   - 예: `MyComponent.jsx`, `UserProfile.jsx`

3. **역할 분리**

   - 하나의 컴포넌트는 하나의 명확한 역할(또는 UI 영역)을 가지도록 설계합니다.
   - 너무 많은 역할을 한 컴포넌트가 맡으면 복잡해지므로, 필요한 경우 여러 작은 컴포넌트로 나누는 것이 좋습니다.

4. **재사용성**
   - 컴포넌트는 필요한 데이터만 주입받아(Props) 화면을 렌더링하므로, 같은 컴포넌트를 다른 데이터와 함께 여러 곳에서 재사용할 수 있습니다.

---

### 함수형 컴포넌트(Functional Component) vs 클래스형 컴포넌트(Class Component)

| 구분                | 함수형 컴포넌트                                                    | 클래스형 컴포넌트                                                                               |
| ------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 선언 방식           | **JavaScript 함수**로 작성                                         | **ES6 클래스**로 작성                                                                           |
| 상태 관리           | **useState, useReducer** 등 리액트 훅(Hooks)을 통해 상태를 관리    | **this.state**로 상태 관리                                                                      |
| 라이프사이클 메서드 | 리액트 훅(Hooks)을 통해 라이프사이클 관련 작업 수행 (useEffect 등) | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 등의 라이프사이클 메서드 사용 |
| 문법적 간결함       | 간단한 문법으로 작성 가능. 코드가 비교적 짧고 가독성이 좋음        | 클래스 문법을 사용하기 때문에 비교적 코드가 길고 복잡함                                         |
| 성능 및 활용        | 리액트 훅의 등장 이후로 권장되는 방식. 가벼운 컴포넌트 작성에 적합 | 기존 코드베이스와의 호환성 등으로 여전히 사용되지만, 신규 프로젝트에는 함수형이 주로 사용됨     |

### 함수형과 클래스형 문법

함수형

```jsx
import React from "react";
import "./App.css";

export default function App() {
  const name = "react";
  return <div className="react">{name}</div>;
}
```

클래스형

```jsx
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}
```

## Props(Properties)

**Props**(프로퍼티)는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 **읽기 전용 데이터**입니다.  
React에서는 **단방향 데이터 흐름**(One-way data flow)을 따르기 때문에, 자식 컴포넌트는 Props를 변경할 수 없고,  
오직 부모가 전달해 준 값을 화면에 반영만 할 수 있습니다.

### Props 사용 예시

```jsx
// 부모 컴포넌트
function App() {
  return (
    <div>
      {/* name이라는 Props에 "React"라는 문자열을 전달 */}
      <Greeting name="React" />
    </div>
  );
}

// 자식 컴포넌트
function Greeting(props) {
  // props.name을 통해 부모에서 전달된 값을 읽을 수 있음
  return <h1>Hello, {props.name}!</h1>;
}
```
