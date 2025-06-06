# 수업내용 (6주차) 🎓

## 상태 (state) 🚦

- **리액트에서의 state**: 리액트 컴포넌트의 **변경 가능한 데이터**를 의미합니다.
- 상태가 변경되면 컴포넌트가 **재렌더링** 되어 화면에 최신 데이터가 반영됩니다.
- 렌더링과 직접적인 관계가 없는 데이터를 state에 포함시키면 불필요한 재렌더링이 발생해 **성능 저하**를 유발할 수 있으므로 주의해야 합니다.
- state는 컴포넌트 내부에서 관리되는 **동적 데이터**입니다.

## State 사용 이유 💡

- 일반 변수는 값이 변경되어도 화면이 자동으로 업데이트되지 않습니다.
- **State**는 값이 변경될 때마다 컴포넌트를 **자동으로 재렌더링** 하여, 화면에 변경사항이 바로 반영됩니다.
- 따라서, 화면에 반영되어야 하는 **유동적인 데이터**를 관리할 때 state를 사용합니다.

## Hook 🔄

- **React Hook**은 리액트 v16.8에 도입되어 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있도록 해줍니다.
- 대표적인 예로 **useState**와 **useEffect**가 있으며, 이 외에도 여러 Hook들이 존재합니다.
- **클래스 컴포넌트**에서는 생성자에서 state를 정의하고 `setState`를 통해 상태를 업데이트하지만,
- **함수형 컴포넌트**는 Hook을 사용하여 **더 간단하게 상태 관리** 및 생명주기 관련 기능을 구현할 수 있습니다.
- Hook의 이름은 **반드시 "use"**로 시작하는 점이 특징입니다.

## Hook 장점 🚀

- **상태 로직 단순화**:
  - 함수형 컴포넌트에 상태를 추가하여 전반적인 로직을 단순화하고 코드를 더 쉽게 이해할 수 있습니다.
- **코드 재사용성과 관심사 분리**:
  - 컴포넌트 계층 구조를 변경하지 않고도 여러 컴포넌트 간에 상태 로직을 재사용할 수 있습니다.
- **사이드 이펙트 감소**:
  - Hook을 통해 컴포넌트 생명주기와 유사한 기능을 제공하여, 사이드 이펙트를 보다 효율적으로 처리할 수 있습니다.

## useState 🛠

- **useState**는 함수형 컴포넌트에서 상태를 선언하고 관리하기 위한 **기본 Hook**입니다.
- 사용 예시:

  ```jsx
  import React, { useState } from "react";

  function Example() {
    // count 라는 상태 변수와, 이를 업데이트하기 위한 setCount 함수 생성
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>현재 카운트: {count}번 클릭됨</p>
        <button onClick={() => setCount(count + 1)}>클릭하세요! 👍</button>
      </div>
    );
  }
  ```
