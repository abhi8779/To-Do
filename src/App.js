import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import { useState } from "react";
import ErrorModal from "./Components/UI/ErrorModal";
import "./App.css";

function App() {
  const [usersList, setUserList] = useState("");
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

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

  const errorHandler = (title, message) => {
    setTitle(title);
    setMessage(message);
    setError(true);
  };

  const closeWindowHandler = () => {
    setError(false);
  };

  const deleteUserHandler = (deleteId) => {
    setUserList((prevUsersList) => {
      const updatedUsersList = prevUsersList.filter((user) => {
        console.log(user.id, deleteId);
        return user.id !== deleteId;
      });

      return [...updatedUsersList];
    });
  };

  return (
    <div>
      <AddUser error={errorHandler} newUser={addNewUserHandler} />
      <UserList deleteUser={deleteUserHandler} users={usersList || []} />
      {error && (
        <ErrorModal
          closeWindow={closeWindowHandler}
          title={title}
          message={message}
        />
      )}
    </div>
  );
}

export default App;
