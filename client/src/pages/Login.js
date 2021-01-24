import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  function handleLogin() {
    axios
      .post("/auth/signin", { username, password })
      .then((res) => {
        const user = res.data.user;
        setUser(user);
        props.history.push("/upload");
      })
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
