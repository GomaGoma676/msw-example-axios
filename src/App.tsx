import { VFC, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { ErrorDisp } from "./ErrorDisp";

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: string;
  name: string;
  username: string;
}

const App: VFC = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get<User[]>(url);
        setUsers(res.data);
      } catch (error) {
        setIsError(true);
        setErrorMsg(error.message);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>　{user.name}</li>
            ))}
          </ul>
        )}
        {isError && <ErrorDisp errorMsg={errorMsg} />}
      </header>
    </div>
  );
};

export default App;
