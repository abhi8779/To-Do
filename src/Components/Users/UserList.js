import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  console.log(props.user);
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
