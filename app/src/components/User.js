import styles from './UserList.module.css';

function User(props) {
  return <li className={styles['user__row']}>{props.user.name}</li>;
}

export default User;
