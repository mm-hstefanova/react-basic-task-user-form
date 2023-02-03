import styles from './UserForm.module.css';
import Button from './Button';
import ErrorModal from './Modals';

import { useState } from 'react';

function UserForm(props) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorTitle, setErrorTitle] = useState('Invalid Input');

  const [showModal, setShowModal] = useState(false);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => setAge(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    // validation
    if (username.length === 0 || age.length === 0) {
      setIsValid(false);
      setShowModal(true);
      setErrorMessage('Please enter a valid name and age (non-empty values)');
      return;
    }

    if (age < 0) {
      setIsValid(false);
      setShowModal(true);

      setErrorMessage('Age should be a positive number.');
      return;
    }

    // new record
    const user = {
      name: username,
      age: age,
    };

    props.onAddNewUser(user);

    // clear the fields
    setUsername('');
    setAge('');
  };

  const onModalClose = () => {
    setShowModal(false);
    // remove error messages
    setIsValid(true);
  };

  return (
    <>
      {showModal && (
        <ErrorModal
          onClose={onModalClose}
          title={errorTitle}
          text={errorMessage}
        />
      )}

      <form className={styles.form} onSubmit={submitHandler}>
        <div
          className={`${styles['form__row']} ${
            !isValid ? styles['invalid'] : ''
          }`}
        >
          <label>Username:</label>
          <input
            type='text'
            value={username}
            onChange={usernameChangeHandler}
          />
          {!isValid && (
            <span className={styles.error}>This field is required!</span>
          )}
        </div>
        <div
          className={`${styles['form__row']} ${
            !isValid ? styles['invalid'] : ''
          }`}
        >
          <label>Age (Years): {age}</label>
          <input
            type='number'
            max='110'
            value={age}
            onChange={ageChangeHandler}
          />
          {!isValid && (
            <span className={styles.error}>This field is required!</span>
          )}
        </div>
        <div className={styles['form__row']}>
          <Button type='submit'>~ Add User ~</Button>
        </div>
      </form>
    </>
  );
}

export default UserForm;
