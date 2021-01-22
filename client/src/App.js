import "./App.css";

function App() {
  return (
    <div className="App">
      <form action="/" method="post" encType="multipart/form-data">
        <input type="file" accept="image/*" name="file" multiple={true} />
        <input type="text" name="text" value="pog" readOnly />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
