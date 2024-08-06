import React from "react";
import "./index.css";
import { Users } from "./components/Users";
import { Search } from "./components/Search";

// Тут список пользователей: https://jsonplaceholder.typicode.com/users

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log(error);
        alert("Произошла ошибка");
      });
  }, []);
  return (
    <div className="App">
      <Search />
      <Users elements={users} />
    </div>
  );
}

export default App;
