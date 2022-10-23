import React from "react";
import Hello from "./hello";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import './App.css';

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black', // background-color 처럼 - 로 구분되어 있는 이름은 camelCase 형태로 네이밍 해줘야 한다.
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    paddubg: '1rem', // ekfms 단위 사용 시 문자열로 설정
  }

  return (
    // JSX 문법상 두 개 이상의 태그는 무조건 하나의 태그로 감싸있어져야 한다.
    <>
      <Hello
        // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
      />
      {/* 모든 태그는 꼭 닫혀 있어야 한다. */}
      <input />
      {/* JSX 안에 자바스크립트 값을 사용 할 경우 {}로 감싸야 한다. */}
      <div style={style}>{name}</div>
      {/* CSS class 를 설정 할 때에는 class= 가 아닌 className= 으로 설정해줘야 한다. */}
      <div className="gray-box"></div>
      <MyComponent name={"React"} favoriteNumber={1}>리액트</MyComponent>
      <br/>
      <Counter/>
      <br/>
      <Say/>
      <br/>
      <ValidationSample/>
      <br/>
      <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </>
  );
}

export default App;