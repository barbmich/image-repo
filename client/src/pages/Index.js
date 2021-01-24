import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Index() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Home</h1>
      <span>{user}</span>
      <button onClick={() => setUser("sup")}>change value</button>
    </>
  );
}
export default Index;
