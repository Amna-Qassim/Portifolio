import Link from '../Link';
import styles from './Footer.module.css';

const Footer = ({ urls }) => (
  <nav className={styles.container}>
    <ul className={styles['link-list']}>
      {urls.map(({ href, text }) => (
        <li key={href} className={styles['link-item']}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Footer;
