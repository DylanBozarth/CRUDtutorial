import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD</h1>
      <input type="text" name="moviename" placeholder="Movie name"></input>{" "}
      
      <input type="text" name="moviereview" placeholder="movie review"></input>
      <br />
      <button>Submit</button>
    </div>
  );
}

export default App;
