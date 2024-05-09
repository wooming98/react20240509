function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment <></> 사용

  return (
    <>
      <p>Lorem ipsum.</p>
      <p>Modi, sint.</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Modi, sint.</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Aspernatur, necessitatibus?</p>
    </div>
  );
}

function App() {
  // component 사용시 종료 태그 생략할 수 없음
  // br 같은 빈 요소는 시작태그에서 꼭 종료
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
