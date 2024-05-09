function App() {
  // &&, //

  // falsy(false 같은)
  // : false, 0, "", null, undefined

  const a = 0;
  if (a) {
    console.log("a는 참이다.");
  } else {
    console.log("a는 거짓이다.");
  }

  // truthy(true 같은) : falsy 가 아니면 truthy

  let b = 0;

  let c = b && "값이 있음";
  console.log("c", c); // 0

  let d = b || "값이 없음";
  console.log("d", d);

  return <div></div>;
}

export default App;
