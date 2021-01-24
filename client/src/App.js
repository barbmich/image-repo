import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Index from "./pages/Index";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <Switch>
            {/* <Route path="/" exact component={Index} /> */}
            <Route path="/" exact component={Login} />
            <ProtectedRoute path="/upload" component={Upload} />
            <Route path="*" component={() => <h1>404 not found</h1>} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
