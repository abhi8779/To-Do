import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import { useState } from "react";
import ErrorModal from "./Components/UI/ErrorModal";
import "./App.css";

function App() {
  const [usersList, setUserList] = useState("");

  const addNewUserHandler = (userName, age) => {
    const userData = {
      userName: userName,
      age: age,
      id: Math.random().toString(),
    };

    setUserList((prevUserList) => {
      return [userData, ...prevUserList];
    });
  };

  return (
    <div>
      <AddUser newUser={addNewUserHandler} />
      <UserList users={usersList || []} />
      <ErrorModal title="An error occured" message="Something went wrong" />
    </div>
  );
}

export default App;
