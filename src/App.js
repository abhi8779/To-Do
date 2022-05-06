import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import { useState } from "react";
import "./App.css";

function App() {
  const [usersList, setUserList] = useState("");

  const addNewUserHandler = (userName, age) => {
    const userData = {
      userName: userName,
      age: age,
      id: Math.random().toString(),
    };

    setUserList((prevUser) => {
      return [userData, ...prevUser];
    });
  };
  console.log(usersList);
  return (
    <div>
      <AddUser newUser={addNewUserHandler} />
      <UserList users={usersList || []} />
    </div>
  );
}

export default App;
