import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  const deleteUserHandler = () => {
    props.deleteUser(props.id);
  };
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li onClick={deleteUserHandler} key={user.id}>
            {user.userName} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
