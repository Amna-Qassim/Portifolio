import styles from './Link.module.css';

const Link = ({ href, children }) => (
  <a className={styles.link} href={href}>{children}</a>
);

export default Link;
