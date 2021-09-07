import styles from './Card.module.css';

const Card = ({ img, title, description, links }) => (
  <div className={styles.card}>
    <img className={styles['card-media']} alt={img.alt} {...img} />
    <div className={styles['card-details']}>
      <h2 className={styles['card-head']}>{title}</h2>
      <p>{description}</p>
      {links.map(({ href, text }) => (
        <a key={href} className={styles['card-action-button']} href={href}>{text}</a>
      ))}
    </div>
  </div>
)

export default Card;
