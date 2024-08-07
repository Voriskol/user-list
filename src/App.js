import React from "react";
import axios from "axios";
import "./index.css";
import { Users } from "./components/Users";
import { Error } from "./components/Error/Error";

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      const apiUrl = "https://jsonplaceholder.typicode.com/users";
      axios.get(apiUrl).then((response) => {
        setUsers(response.data);
      });
    } catch (e) {
      setError(true);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <Users elements={users} isLoading={isLoading} />
      <Error error={error} />
    </div>
  );
}

export default App;
