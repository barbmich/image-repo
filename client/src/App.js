import "./App.css";

function App() {
  return (
    <div className="App">
      <form action="/" method="post" encType="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
