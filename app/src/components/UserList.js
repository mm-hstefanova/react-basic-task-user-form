import User from './User';
import styles from './UserList.module.css';

function UserList(props) {
  return (
    <ul className={styles.users}>
      {props.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
