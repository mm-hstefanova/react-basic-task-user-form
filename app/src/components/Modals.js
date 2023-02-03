import styles from './Modal.module.css';
import Card from './Card';
import { createPortal } from 'react-dom';

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <Card className='modal-card'>
        <h2 className={styles['modal__head']}>{props.title}</h2>
        <div className={styles['modal__body']}>{props.text}</div>
      </Card>
    </div>
  );
}

function ErrorModal(props) {
  return (
    <>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}

      {createPortal(
        <ModalOverlay title={props.title} text={props.text} />,
        document.getElementById('modal-root')
      )}
    </>
  );
}

export default ErrorModal;
