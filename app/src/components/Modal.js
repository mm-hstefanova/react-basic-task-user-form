import styles from './Modal.module.css';
import Card from './Card';

function Modal(props) {
  return (
    <div className={styles.modal} onClick={props.onClose}>
      <Card className='modal-card'>
        <h2 className={styles['modal__head']}>Invalid Input</h2>
        <div className={styles['modal__body']}>{props.children}</div>
      </Card>
    </div>
  );
}

export default Modal;
