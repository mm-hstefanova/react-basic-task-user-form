import styles from './Form.module.css';
import Button from './Button';

function Form(props) {
  return (
    <form className={styles.form}>
      <div className={styles['form__row']}>
        <label>Username</label>
        <input type='text' />
      </div>
      <div className={styles['form__row']}>
        <label>Age (Years)</label>
        <input type='number' />
      </div>
      <div className={styles['form__row']}>
        <Button type='submit'>~ Add User ~</Button>
      </div>
    </form>
  );
}

export default Form;
