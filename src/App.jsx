import React from "react";

function MyElem(props) {
  console.log(props);
  return <div></div>;
}

function MyComp({ city, country, price }) {
  console.log("city", city);
  console.log("country", country);
  console.log("price", price);
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyElem name="son" age={33} />
      <MyComp city="seoul" country="korea" price={500} />
    </div>
  );
}

export default App;
