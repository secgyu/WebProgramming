# 수업내용 (4주차)

## State

- State는 컴포넌트 내부에서 변화하는 데이터를 관리하는 핵심 개념입니다
- State는 컴포넌트의 동적인 데이터를 관리하는 방법입니다.
- State는 React 컴포넌트 내부에서 관리하는 변경 가능한 데이터입니다.
- 컴포넌트의 UI를 동적으로 변경할 때 사용합니다.
- State는 컴포넌트의 상태를 나타내며, 이 상태가 변경되면 컴포넌트가 다시 렌더링됩니다.
- 이를 통해 사용자 인터페이스(UI)가 사용자와의 상호작용에 따라 동적으로 변화할 수 있습니다.
- State는 컴포넌트 내부에서 동적으로 변하는 데이터를 저장하는 JavaScript 객체입니다.
- 컴포넌트가 렌더링될 때 state의 값이 사용되며, state 값이 변경되면 컴포넌트가 다시 렌더링되어
  화면에 업데이트된 내용을 표시합니다.
- State 값이 변경되면 React가 자동으로 렌더링을 다시 수행합니다.
- State는 React 컴포넌트에서 변화하는 데이터를 관리하는 핵심 개념입니다.
- State를 이해하고 효과적으로 사용하는 것은 React 개발 능력을 향상시키는 데 필수적입니다

## Component LifeCycle

- React 컴포넌트는 탄생(Mount) → 변화(Update) → 제거(Unmount) 과정을 거칩니다.
- 컴포넌트가 생성되고, 업데이트되며, 제거되는 과정을 나타냅니다. 각 생명 주기 단계에서 특정 메서드가 호출되며,
  이를 통해 컴포넌트의 상태를 관리하고, 필요한 작업을 수행할 수 있습니다.
- 리액트의 생명 주기는 크게 세 가지 주요 단계로 나눌 수 있습니다: 마운트(Mount), 업데이트(Update), 언마운트
  (Unmount).
- 클래스형 컴포넌트에서는 생명주기 메서드를 사용하지만, 함수형 컴포넌트에서는 useEffect 훅을 활용합니다.

```jsx
import React from 'react';

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    // 초기 state 설정
    this.state = { count: 0 };
    console.log('constructor 호출: 초기 state 설정');
  }

  // 컴포넌트가 마운트된 후 한 번 호출
  componentDidMount() {
    console.log('componentDidMount 호출: 컴포넌트가 화면에 나타남');
  }

  // 컴포넌트가 업데이트된 후 호출
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate 호출: state 또는 props가 변경됨');
  }

  // 컴포넌트가 언마운트되기 전에 호출
  componentWillUnmount() {
    console.log('componentWillUnmount 호출: 컴포넌트가 제거되기 전');
  }

  // 버튼 클릭 시 state를 업데이트하는 메서드
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render 호출: UI 렌더링');
    return (
      <div>
        <p>현재 카운트: {this.state.count}</p>
        <button onClick={this.handleClick}>카운트 증가</button>
      </div>
    );
  }
}

export default LifecycleExample;
`
```

- 마운트 : 컴포넌트가 생성될 때
- 업데이트 : 컴포넌트의 props가 변경될때
- 언마운트 : 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때
