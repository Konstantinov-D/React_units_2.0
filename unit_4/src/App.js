import "./App.css";
import Comp1 from "./components/Test1";
import Comp2 from "./components/Refs";

function App() {
  return (
    <>
      <Comp1 arg={77} />
      <Comp2 />
    </>
  );
}

export default App;
