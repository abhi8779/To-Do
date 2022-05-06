import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //Data Validation Logic  //Guards claws
    if (!userName.trim() || !age.trim() || +age < 1) return;

    props.newUser(userName, age);

    //Clearing input fields on submissions
    setUserName("");
    setAge("");
  };
  return (
    <div>
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            onChange={userNameChangeHandler}
            value={userName}
            id="username"
            type="text"
          ></input>
          <label htmlFor="age">Age</label>
          <input
            onChange={ageChangeHandler}
            value={age}
            id="age"
            type="number"
          ></input>

          <Button
            onClick={submitHandler}
            type={"submit"}
            btnTitle={"Add User"}
          />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
