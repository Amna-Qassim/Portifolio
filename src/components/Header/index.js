import Link from '../Link';
import styles from './Header.module.css';

const Header = ({ name, urls }) => (
  <nav className={styles.container}>
    <p>{name}</p>
    <ul className={styles['link-list']}>
      {urls.map(({ href, text }) => (
        <li key={href} className={styles['link-item']}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Header;
