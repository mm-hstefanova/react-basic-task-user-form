import styles from './Card.module.css';

function Card(props) {
  return (
    <div className={`${styles.card} ${styles[`${props.className}`]}`}>
      {props.children}
    </div>
  );
}

export default Card;
