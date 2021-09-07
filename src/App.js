import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import styles from './App.module.css';
import {
  headerURLs,
  footerURLs,
  projects,
} from './constants';

const App = () => (
  <div className={styles.container}>
    <div>
      <Header name="Mujtaba Al-Tameemi" urls={headerURLs} />
      <main>
        <Projects projects={projects} />
      </main>
    </div>
    <Footer urls={footerURLs} />
  </div>
);


export default App;
