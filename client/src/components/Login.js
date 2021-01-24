import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post("/signin", { username, password })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  return (
    <div>
      username:{" "}
      <input
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      password:{" "}
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
