import styles from './UserList.module.css';

function User(props) {
  return (
    <li className={styles['user__row']}>
      {props.user.name} ({props.user.age})
    </li>
  );
}

export default User;
