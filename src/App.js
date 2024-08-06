import React from "react";
import "./index.css";
import { Users } from "./components/Users";
import { Search } from "./components/Search";

// Тут список пользователей: https://jsonplaceholder.typicode.com/users

function App() {
  return (
    <div className="App">
      <Search />
      <Users />
    </div>
  );
}

export default App;
