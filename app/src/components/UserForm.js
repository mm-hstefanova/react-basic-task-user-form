import styles from './UserForm.module.css';
import Button from './Button';
import { useState } from 'react';

function UserForm(props) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => setAge(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      name: username,
      age: age,
    };

    props.onAddNewUser(user);

    setUsername('');
    setAge('');
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['form__row']}>
        <label>Username: {username}</label>
        <input type='text' value={username} onChange={usernameChangeHandler} />
      </div>
      <div className={styles['form__row']}>
        <label>Age (Years): {age}</label>
        <input type='number' value={age} onChange={ageChangeHandler} />
      </div>
      <div className={styles['form__row']}>
        <Button type='submit'>~ Add User ~</Button>
      </div>
    </form>
  );
}

export default UserForm;
