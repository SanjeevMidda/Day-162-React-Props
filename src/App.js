import Button from "./components/Button"

let fruit = "pineapple"

function App() {
  return (
    <div className="App">
      <h1>Working</h1>
      <Button content = {fruit==="orange" ? "Yes" : "No"}/>
    </div>
  );
}

export default App;
