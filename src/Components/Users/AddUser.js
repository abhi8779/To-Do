import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button btnTitle={"Add User"} />
      </form>
    </Card>
  );
};

export default AddUser;
