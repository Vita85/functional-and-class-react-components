import React from "react";
import StateComponent from "./components/StateComponent";
import PropsComponent from "./components/PropsComponent";
import ClassStateComponent from "./components/ClassStateComponent";
import ClassPropsComponent from "./components/ClassPropsComponent";

function App() {
  return (
    <div className="App">
      <StateComponent />
      <br />
      <PropsComponent message={"I'm props message"} />

      <hr />

      <ClassStateComponent />
      <br />
      <ClassPropsComponent message={"I'm class props message"} />
    </div>
  );
}

export default App;
